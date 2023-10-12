import { bundleMDX } from "mdx-bundler";
import { LRUCache } from "lru-cache";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrism from "rehype-prism-plus";

import { readContentDir, readContentFile } from "./fs.server";
import path from "path";

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
    title?: string;
    description?: string;
    keywords?: string[];
    author?: string;
  };

  socialImageTitle?: string;
}

interface PostData {
  frontmatter: Frontmatter;
  code: string;
  toc?: string;
}

// interface MdxData {
//   code: string;
//   frontmatter: Frontmatter;
//   errors: string[];
//   matter: Omit<matter.GrayMatterFile<string>, "data"> & {
//     data: Frontmatter;
//   };
// }

// https://github.com/kentcdodds/mdx-bundler/blob/main/README.md#nextjs-esbuild-enoent
if (process.platform === "win32") {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "esbuild.exe",
  );
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "bin",
    "esbuild",
  );
}

const DEFAULT_MAX_AGE = 1000 * 60 * 60 * 24 * 7;

const cache = new LRUCache<string, PostData>({
  maxSize: process.env.NODE_ENV === "production" ? DEFAULT_MAX_AGE : 2500,
  sizeCalculation: () => {
    return 1;
  },
});

export const getMdxPage = async (
  slug: string,
  contentDir?: string,
): Promise<PostData | undefined> => {
  const key = `${contentDir}:${slug}`;
  let post;

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
};

const getWorksPage = async (slug: string) => {
  const source = await readContentFile("works", `${slug}.mdx`);

  return await bundleMDX<Frontmatter>({
    source,
    mdxOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeExternalLinks,
      ];
      return options;
    },
  });
};

const getBlogPost = async (slug: string) => {
  const source = await readContentFile("blog", `${slug}/index.mdx`);

  const { frontmatter, code } = await bundleMDX<Frontmatter>({
    source,
    mdxOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              ariaHidden: true,
              tabIndex: -1,
              className: [
                "before:content-['#']",
                "before:left-4",
                "before:inline-block",
                "text-slate-500",
                "mr-1",
              ],
            },
            content: {
              type: "element",
              tagName: "span",
              properties: {
                className: ["sr-only"],
              },
              children: [{ type: "text", value: "permalink" }],
            },
          },
        ],
        rehypeExternalLinks,
        [rehypePrism, { ignoreMissing: true, showLineNumbers: true }],
      ];
      return options;
    },
  });
  // const toc = await md2toc(matter.default(source).content);

  return { frontmatter, code };
};

export const getWorksPages = async (contentDir: string) => {
  const files = await readContentDir(contentDir);
  const posts: Frontmatter[] = await Promise.all(
    files.map(async (filename) => {
      const source = await readContentFile(contentDir, filename);
      const { frontmatter } = await bundleMDX<Frontmatter>({
        source,
      });
      return {
        slug: removeExtension(filename),
        ...frontmatter,
      };
    }),
  );

  return posts.sort((a, z) => {
    const aTime = new Date(a.updated ?? a.published ?? "").getTime();
    const zTime = new Date(z.updated ?? z.published ?? "").getTime();
    return aTime > zTime ? -1 : aTime === zTime ? 0 : 1;
  });
};

export const getBlogPages = async (contentDir: string) => {
  const files = await readContentDir(contentDir);
  const posts: Frontmatter[] = await Promise.all(
    files.map(async (filename) => {
      const source = await readContentFile(contentDir, `${filename}/index.mdx`);
      const { frontmatter } = await bundleMDX<Frontmatter>({
        source,
      });

      return {
        slug: removeExtension(filename),
        ...frontmatter,
      };
    }),
  );

  return posts.sort((a, z) => {
    const aTime = new Date(a.updated ?? a.published ?? "").getTime();
    const zTime = new Date(z.updated ?? z.published ?? "").getTime();
    return aTime > zTime ? -1 : aTime === zTime ? 0 : 1;
  });
};

function removeExtension(file: string) {
  return file.replace(/\.md(x?)$/, "");
}
