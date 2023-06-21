import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { useMemo } from "react";

import { ArrowLeftIcon } from "@heroicons/react/outline";
import { getMDXComponent } from "mdx-bundler/client";

import { Alert } from "~/components/alert";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { PostImage } from "~/components/post-image";
import { Spacer } from "~/components/spacer";

import { formatMonth } from "~/utils/format";
import { getUrl } from "~/utils/misc";
import type { Frontmatter } from "~/utils/post.server";
import { getMdxPage } from "~/utils/post.server";
import { getWorksPages } from "~/utils/post.server";
import type { SEOHandle } from "~/utils/seo";
import { getMeta } from "~/utils/seo";
import { notFound } from "~/utils/responses";

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    const pages = await getWorksPages("works");
    return pages
      .filter((page) => !page.draft)
      .map((page) => {
        return { route: `/works/${page.slug}`, priority: 0.7 };
      });
  },
};

type LoaderData = {
  frontmatter: Frontmatter;
  code: string;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const slug = params.slug || "index";
  const post = await getMdxPage(slug, "works").catch((e) => {
    console.error(e);
    console.error("error in $slug for", slug);
    throw notFound(slug);
  });

  const headers = {
    "Cache-Control": "private, max-age=3600",
    Vary: "Cookie",
  };

  return json(post, { status: 200, headers });
};

export const meta: MetaFunction = ({ data, parentsData }) => {
  const { requestInfo } = parentsData.root;
  if (data?.frontmatter) {
    const { keywords = [], ...extraMeta } = data.frontmatter.meta ?? {};
    let title = data.frontmatter.title;
    const isDraft = data.frontmatter.draft;
    if (isDraft) title = `下書き: ${title ?? "No Title"} | 6+ Works`;
    else title = `${title ?? "No Title"} | 6+ Works`;
    return {
      ...(isDraft ? { robots: "noindex" } : null),
      ...getMeta({
        url: getUrl(requestInfo),
        title,
        description: data.frontmatter.description,
        keywords: keywords.join(", "),
      }),
      ...extraMeta,
    };
  } else {
    return {
      title: "お探しのページは見つかりませんでした",
      description: "お探しのページは見つかりませんでした😢",
    };
  }
};

export default function Work() {
  const { frontmatter, code } = useLoaderData<LoaderData>();
  const isDraft = Boolean(frontmatter.draft);
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <div className="min-h-screen bg-bp duration-500">
        <Navbar />
        <div className="prose prose-sm mx-auto px-8 dark:prose-invert sm:prose-base lg:prose-xl">
          <header className="not-prose pb-12 pt-4 lg:py-16">
            {isDraft ? (
              <Alert state="info" className="mb-12">
                下書きの状態です。リンクや内容等が変更される可能性があります。
              </Alert>
            ) : null}
            <div>
              <dl>
                <dt className="sr-only">Date</dt>
                <dd className="text-sm leading-6 text-slate-700 dark:text-slate-400 sm:text-center">
                  <time dateTime={frontmatter.updated || frontmatter.published}>
                    {frontmatter.updated
                      ? `${formatMonth(frontmatter.updated)}`
                      : frontmatter.published
                      ? `${formatMonth(frontmatter.published)}`
                      : null}
                  </time>
                </dd>
              </dl>
              <h1 className="col-span-full mb-8 py-12 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-center sm:text-4xl">
                {frontmatter.title}
              </h1>
            </div>
            <div className="relative rounded shadow-md">
              {frontmatter.bannerImgId ? (
                <PostImage
                  page="page"
                  className="rounded"
                  imgId={frontmatter.bannerImgId}
                  alt={frontmatter.bannerAlt}
                />
              ) : null}
            </div>
            <div className="not-prose mt-16">
              <Link
                className="group flex gap-2 text-black dark:text-white"
                prefetch="intent"
                to="/works"
              >
                <ArrowLeftIcon className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="text-base">Back to Works</span>
              </Link>
            </div>
          </header>
          <article>
            <Component />
          </article>
          <Spacer size="base" />
        </div>
        <Footer className="bg-bs duration-500" />
      </div>
    </>
  );
}
