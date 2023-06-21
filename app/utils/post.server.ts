import { bundleMDX } from "mdx-bundler";
import * as matter from "gray-matter";

import { m2toc } from "./unified";
import { readContentFile, readContentDir, joinPath } from "./fs.server";
import { LRUCache } from "lru-cache";

export interface Frontmatter {
  title?: string;
  description?: string;
  slug?: string;
  lang?: string;
  categories?: string[];

  draft?: boolean;
  published?: string;
  updated?: string;

  bannerImgId?: string;
  bannerTitle?: string;
  bannerAlt?: string;
  bannerCredit?: string;

  meta?: {
    keywords?: string[];
  };
  socialImageTitle?: string;
}

interface PostData {
  frontmatter: Frontmatter;
  code: string;
  toc?: string;
  slug?: string;
}

const defaultMaxAge = 1000 * 60 * 60 * 24 * 7;
const cache = new LRUCache<string, PostData>({
  maxSize: process.env.NODE_ENV === "production" ? defaultMaxAge : 2500,
  sizeCalculation: (value, key) => {
    return 1;
  },
});

export async function getMdxPage(
  slug: string,
  contentDir?: string
): Promise<PostData | undefined> {
  const key = `${contentDir}:${slug}`;
  let post: PostData | undefined;

  if (cache.has(key)) {
    post = cache.get(key);
  } else {
    post =
      contentDir === "works"
        ? await getWorksPage(slug)
        : await getBlogPost(slug);
    post ? cache.set(key, post) : cache.delete(key);
  }

  return post;
}

async function getBlogPost(slug: string): Promise<PostData> {
  const [
    remarkGfm,
    rehypeSlug,
    rehypeAutolinkHeadings,
    rehypeExternalLinks,
    rehypePrism,
  ] = await Promise.all([
    import("remark-gfm").then((mod) => mod.default),
    import("rehype-slug").then((mod) => mod.default),
    import("rehype-autolink-headings").then((mod) => mod.default),
    import("rehype-external-links").then((mod) => mod.default),
    import("rehype-prism-plus").then((mod) => mod.default),
  ]);

  const source = await readContentFile("blog", `${slug}/index.mdx`);

  const rehypeAutolinkHeadingsOptions = {
    behavior: "before",
    properties: {
      ariaHidden: true,
      tabIndex: -1,
      className: [
        "absolute",
        "inset-y-0",
        "-left-6",
        "flex",
        "items-center",
        "border-0",
        "group-hover:opacity-100",
        "opacity-0",
      ],
    },
    content: {
      type: "element",
      tagName: "svg",
      properties: {
        xmlns: "http://www.w3.org/2000/svg",
        className: ["h-6", "w-6"],
        fill: "currentColor",
        viewBox: "0 0 20 20",
      },
      children: [
        {
          type: "element",
          tagName: "path",
          properties: {
            d: "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
          },
        },
      ],
    },
    group: {
      type: "element",
      tagName: "div",
      properties: {
        className: ["group", "flex", "whitespace-pre-wrap", "relative"],
      },
    },
  };

  try {
    const { frontmatter, code } = await bundleMDX({
      source,
      mdxOptions: (options) => {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          rehypeSlug,
          [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
          rehypeExternalLinks,
          [rehypePrism, { ignoreMissing: true, showLineNumbers: true }],
        ];
        return options;
      },
      esbuildOptions: (options) => {
        options.minify = true;
        // Set the `outdir` to a public location for this bundle.
        options.outdir = joinPath("build/_assets");
        options.loader = {
          ...options.loader,
          ".png": "file",
          ".jpg": "file",
          ".jpeg": "file",
        };
        // Set the public path to /img/about
        // options.publicPath = join("build/_assets");
        // Set write to true so that esbuild will output the files.
        // options.write = true;

        return options;
      },
    });
    const toc = await m2toc(matter.default(source).content);
    return { frontmatter, code, toc };
  } catch (e) {
    console.error(`Compilation error for slug: `, slug);
    throw e;
  }
}

async function getBlogPages(contentDir: string) {
  const files = await readContentDir(contentDir);
  const posts: Array<Frontmatter> = await Promise.all(
    files.map(async (filename) => {
      const source = await readContentFile(contentDir, `${filename}/index.mdx`);
      const { frontmatter } = await bundleMDX({
        source,
      });
      return {
        slug: filename.replace(/\.mdx$/, ""),
        ...frontmatter,
      };
    })
  );

  // for (const postDir of dir) {
  //   const contentPath = join(dirPath, postDir);
  //   const postPath = join(contentPath, `index.mdx`);
  //   const slug = postDir;

  //   const source = await readFile(postPath, "utf-8").catch(() => {
  //     console.error(`Missing .mdx for "${slug}"`);
  //   });
  //   if (!source) continue;

  //   const mdx = await bundleMDX({
  //     cwd: contentPath,
  //     source,
  //   }).catch((e) => console.error(e, `\n\nError bundleMDX for "${slug}"`));
  //   if (!mdx) {
  //     console.error(`Couldn't bundleMDX for "${slug}"`);
  //     continue;
  //   }
  //   // if (!mdx.frontmatter.slug) mdx.frontmatter.slug = slug
  //   posts.push({ slug, ...mdx.frontmatter });
  // }

  return posts.sort((a, z) => {
    const aTime = new Date(a.updated ?? a.published ?? "").getTime();
    const zTime = new Date(z.updated ?? z.published ?? "").getTime();
    return aTime > zTime ? -1 : aTime === zTime ? 0 : 1;
  });
}

async function getWorksPage(slug: string): Promise<PostData> {
  const [
    remarkGfm,
    rehypeSlug,
    // rehypeAutolinkHeadings,
    rehypeExternalLinks,
    // rehypePrism,
  ] = await Promise.all([
    import("remark-gfm").then((mod) => mod.default),
    import("rehype-slug").then((mod) => mod.default),
    // import("rehype-autolink-headings").then((mod) => mod.default),
    import("rehype-external-links").then((mod) => mod.default),
    // import("rehype-prism-plus").then((mod) => mod.default),
  ]);

  const source = await readContentFile("works", `${slug}.mdx`);

  try {
    const { frontmatter, code } = await bundleMDX({
      source,
      mdxOptions: (options) => {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          rehypeSlug,
          // [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
          rehypeExternalLinks,
          // [rehypePrism, { ignoreMissing: true, showLineNumbers: true }],
        ];
        return options;
      },
      // esbuildOptions: (options) => {
      //   options.minify = true;
      //   // Set the `outdir` to a public location for this bundle.
      //   options.outdir = joinPath("build/_assets");
      //   options.loader = {
      //     ...options.loader,
      //     ".png": "file",
      //     ".jpg": "file",
      //     ".jpeg": "file",
      //   };
      //   // Set the public path to /img/about
      //   // options.publicPath = join("build/_assets");
      //   // Set write to true so that esbuild will output the files.
      //   // options.write = true;

      //   return options;
      // },
    });
    return { frontmatter, code };
  } catch (e) {
    console.error(`Compilation error for slug: `, slug);
    throw e;
  }
}

async function getWorksPages(contentDir: string) {
  const files = await readContentDir(contentDir);
  const posts: Array<Frontmatter> = await Promise.all(
    files.map(async (filename) => {
      const source = await readContentFile(contentDir, filename);
      const { frontmatter } = await bundleMDX({
        source,
      });
      return {
        slug: filename.replace(/\.mdx$/, ""),
        ...frontmatter,
      };
    })
  );

  return posts.sort((a, z) => {
    const aTime = new Date(a.updated ?? a.published ?? "").getTime();
    const zTime = new Date(z.updated ?? z.published ?? "").getTime();
    return aTime > zTime ? -1 : aTime === zTime ? 0 : 1;
  });
}

export { getBlogPost, getBlogPages, getWorksPage, getWorksPages };
