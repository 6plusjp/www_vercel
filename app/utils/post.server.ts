import { bundleMDX } from "mdx-bundler";
import * as matter from "gray-matter";
import { LRUCache } from "lru-cache";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrism from "rehype-prism-plus";

import { md2toc } from "./unified";
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

  try {
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
  } catch (error) {
    console.error(`Compilation error for slug: `, slug);
    throw error;
  }
};

const getBlogPost = async (slug: string) => {
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
    const { frontmatter, code } = await bundleMDX<Frontmatter>({
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
    });
    const toc = await md2toc(matter.default(source).content);

    return { frontmatter, code, toc };
  } catch (error) {
    console.error(`Compilation error for slug: `, slug);
    throw error;
  }
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
        slug: filename.replace(/\.mdx$/, ""),
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
        slug: filename.replace(/\.mdx$/, ""),
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
