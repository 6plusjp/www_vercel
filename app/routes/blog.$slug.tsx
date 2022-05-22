import * as React from "react";
import { useLoaderData, json, useParams, useCatch, Link } from "remix";
import type { LoaderFunction, MetaFunction, LinksFunction } from "remix";

import { getMDXComponent } from "mdx-bundler/client";
import * as dateFns from "date-fns";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeftIcon } from "@heroicons/react/outline";

import { formatDate } from "~/utils/format";
import type { MdxProps } from "~/utils/post.server";
import { getBlogPages, getBlogPost } from "~/utils/post.server";
import { getMeta } from "~/utils/seo";
import { getDomainUrl, getUrl } from "~/utils/misc";

import { Sidebar } from "~/components/sidebar";
import { Alert } from "~/components/alert";
import { Spacer } from "~/components/spacer";
import { PostImage } from "~/components/post-image";
import { MobileMenu } from "~/components/navbar";
import { ExternalLink } from "~/components/external-link";

type LoaderData = {
  frontmatter: MdxProps["frontmatter"];
  code: string;
  toc: string;
  // recoommendations: MdxPropsWithoutCode[]
};
export const loader: LoaderFunction = async ({ request, params }) => {
  const slug = params.slug || "index";
  if (slug === "rss[.]xml") {
    const posts = await getBlogPages("blog");
    const blogUrl = `${getDomainUrl(request)}/blog`;
    const rss = `
    <rss xmlns:blogChannel="${blogUrl}" version="2.0">
      <channel>
        <title>6+ Blog</title>
        <link>${blogUrl}</link>
        <description>The 6+ Blog</description>
        <language>ja</language>
        <ttl>40</ttl>
        ${posts
          .map((post) =>
            `
            <item>
              <title>${cdata(post.title ?? "Untitled Post")}</title>
              <description>${cdata(
                post.description ?? "This post is... indescribable"
              )}</description>
              <pubDate>${dateFns.format(
                dateFns.add(
                  post.updated
                    ? dateFns.parseISO(post.updated)
                    : post.published
                    ? dateFns.parseISO(post.published)
                    : Date.now(),
                  { minutes: new Date().getTimezoneOffset() }
                ),
                "yyyy-MM-ii"
              )}</pubDate>
              <link>${blogUrl}/${post.slug}</link>
              <guid>${blogUrl}/${post.slug}</guid>
            </item>
          `.trim()
          )
          .join("\n")}
      </channel>
    </rss>
  `.trim();
    function cdata(s: string) {
      return `<![CDATA[${s}]]>`;
    }

    return new Response(rss, {
      headers: {
        "Content-Type": "application/xml",
        "Content-Length": String(Buffer.byteLength(rss)),
      },
    });
  }

  const { frontmatter, code, toc } = await getBlogPost(slug);
  // const recommendations = await getBlogRecommendations(request, {
  //   limit: 3,
  //   keywords: [
  //     ...(page?.frontmatter.categories ?? []),
  //     ...(page?.frontmatter.meta?.keywords ?? []),
  //   ],
  //   exclude: [slug],
  // })
  const headers = {
    "Cache-Control": "private, max-age=3600",
    Vary: "Cookie",
  };

  const data: LoaderData = {
    frontmatter,
    code,
    toc,
    // recommendations,
  };
  return json(data, { status: 200, headers });
};

export const meta: MetaFunction = ({ data, parentsData }) => {
  const { requestInfo } = parentsData.root;
  if (data?.frontmatter) {
    const { keywords = [], ...extraMeta } = data.frontmatter.meta ?? {};
    let title = data.frontmatter.title;
    const isDraft = data.frontmatter.draft;
    if (isDraft) title = `下書き: ${title ?? "No Title"} | 6+ blog`;
    else title = `${title ?? "No Title"} | 6+ blog`;
    return {
      ...(isDraft ? { robots: "noindex" } : null),
      ...getMeta({
        origin: requestInfo.origin,
        url: getUrl(requestInfo),
        title,
        description: data.frontmatter.description,
        keywords: keywords.join(", "),
      }),
      ...extraMeta,
    };
  } else {
    return {
      title: "お探しのブログページは見つかりませんでした",
      description: "お探しのブログページは見つかりませんでした😢",
    };
  }
};

export const links: LinksFunction = () => {
  return [
    // { rel: "stylesheet", href: tailwind },
  ];
};

export default function MdxScreen() {
  const { frontmatter, code, toc } = useLoaderData<LoaderData>();
  const { slug } = useParams();
  const isDraft = Boolean(frontmatter.draft);
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0 : 0.5;
  const easing = [0.175, 0.85, 0.42, 0.96];
  const motionVariants = {
    text: {
      exit: {
        y: 100,
        opacity: 0,
        transition: { duration: duration, ease: easing },
      },
      enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.1, duration: duration, ease: easing },
      },
    },
    image: {
      exit: {
        y: -150,
        opacity: 0,
        transition: { duration: duration, ease: easing },
      },
      enter: {
        y: 0,
        opacity: 1,
        transition: {
          duration: duration,
          ease: easing,
        },
      },
    },
    back: {
      exit: {
        x: 100,
        opacity: 0,
        transition: {
          duration: duration,
          ease: easing,
        },
      },
      enter: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: duration,
          ease: easing,
        },
      },
    },
    code: {
      exit: {
        y: 100,
        opacity: 0,
        transition: {
          duration: duration,
          ease: easing,
        },
      },
      enter: {
        y: 0,
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: duration,
          ease: easing,
        },
      },
    },
  };
  return (
    <>
      <div className="min-h-screen bg-slate-200 px-6 duration-500 dark:bg-slate-800 lg:flex">
        <div className="hidden flex-shrink-0 lg:block">
          <Sidebar>
            {toc ? (
              <nav className="mb-8 text-tp">
                <h4 className="mb-2 py-1 pt-0 text-base font-medium uppercase">
                  Contents
                </h4>
                <div
                  className="toc"
                  dangerouslySetInnerHTML={{ __html: toc }}
                ></div>
              </nav>
            ) : null}
          </Sidebar>
        </div>
        <div className="flex-grow pb-12 lg:h-full lg:py-12">
          <div className="flex items-center justify-end px-[5vw] py-4 sm:py-8 lg:hidden lg:py-12">
            <MobileMenu />
          </div>
          <motion.div
            initial="exit"
            animate="enter"
            exit="exit"
            className="prose mx-auto dark:prose-invert sm:prose-lg lg:prose-xl lg:max-w-4xl"
          >
            <motion.header
              layoutId={`card-${slug}`}
              className="not-prose pt-0 pb-12 lg:py-16"
            >
              {isDraft ? (
                <Alert state="info" className="mb-12">
                  このブログ記事は下書きの状態です。リンクや内容等が変更される可能性があります。
                </Alert>
              ) : null}
              <motion.div variants={motionVariants.text}>
                <dl>
                  <dt className="sr-only">Date</dt>
                  <dd className="text-sm leading-6 text-slate-700 dark:text-slate-400 sm:text-center">
                    <time
                      dateTime={frontmatter.updated || frontmatter.published}
                    >
                      {frontmatter.updated
                        ? `更新日: ${formatDate(frontmatter.updated)}`
                        : frontmatter.published
                        ? `公開日: ${formatDate(frontmatter.published)}`
                        : null}
                    </time>
                  </dd>
                </dl>
                <h1 className="col-span-full mb-8 py-12 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-center sm:text-4xl">
                  {frontmatter.title}
                </h1>
              </motion.div>
              <motion.div
                variants={motionVariants.image}
                className="not-prose relative rounded shadow-md"
                layoutId={`image-container-${slug}`}
              >
                {frontmatter.bannerImgId ? (
                  <PostImage
                    page="post"
                    className="rounded"
                    imgId={frontmatter.bannerImgId}
                    alt={frontmatter.bannerAlt}
                  />
                ) : null}
              </motion.div>
              <motion.div
                variants={motionVariants.back}
                className="not-prose mt-8"
              >
                <Link
                  className="group flex gap-2 text-black dark:text-white"
                  prefetch="intent"
                  to="/blog"
                >
                  <ArrowLeftIcon className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
                  <span className="text-base">Back to blog</span>
                </Link>
              </motion.div>
            </motion.header>
            <motion.article variants={motionVariants.code}>
              {toc ? (
                <nav className="mb-8 text-tp lg:hidden">
                  <h2 className="mb-2">Contents</h2>
                  <div
                    className="toc"
                    dangerouslySetInnerHTML={{ __html: toc }}
                  ></div>
                </nav>
              ) : null}
              <Component />
              <Spacer size="sm" />
              <ExternalLink
                className="flex items-center justify-center"
                href="https://www.buymeacoffee.com/6plus"
              >
                <img
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  height="50"
                  width="210"
                  alt="6plus support"
                />
              </ExternalLink>
            </motion.article>
            <section title="If you found this article helpful.">
              {/* {data.recommendations} */}
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="min-h-screen bg-slate-200 px-6 duration-500 dark:bg-slate-800 lg:flex">
      <div className="hidden flex-shrink-0 lg:block">
        <Sidebar />
      </div>
      <div className="flex-grow rounded lg:z-[1] lg:h-full">{error}</div>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  console.error("CatchBoundary", caught);
  throw new Error(`Unhandled error: ${caught.status}`);
}
