import { Link } from "@remix-run/react";

import { motion } from "framer-motion";
import { PostImage } from "./post-image";

import type { Frontmatter } from "~/utils/post.server";
import { formatDate, formatMonth } from "~/utils/format";

interface Props {
  frontmatter: Frontmatter;
}

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

export const Card = ({ frontmatter }: Props) => (
  <motion.article variants={postVariants} layoutId={`card-${frontmatter.slug}`}>
    <Link
      to={`/blog/${frontmatter.slug}`}
      prefetch="intent"
      className="group flex w-full focus:outline-none md:block md:flex-col"
    >
      <motion.div
        className="relative hidden rounded shadow-md ring-hp ring-offset-4 ring-offset-slate-200 transition duration-300 group-hover:ring-2 group-focus:ring-2 group-focus:ring-hp dark:ring-offset-slate-800 md:mb-6 md:block"
        layoutId={`image-container-${frontmatter.slug}`}
      >
        {frontmatter.bannerImgId ? (
          <PostImage
            className="aspect-h-9 aspect-w-16 rounded"
            imgId={frontmatter.bannerImgId}
            sizes={[
              "(max-width:767px) 0vw",
              "(min-width:768px) and (max-width:1023px) 45vw",
              "(min-width:1024px) and (max-width:1535px) 30vw",
              "25vw",
            ].join(", ")}
            alt={frontmatter.bannerAlt ?? frontmatter.title}
          />
        ) : (
          <div className="aspect-none rounded bg-gradient-to-br from-slate-600 to-slate-500 md:aspect-h-9 md:aspect-w-16">
            <span className="flex items-center justify-center">No Image</span>
          </div>
        )}
      </motion.div>
      <div className="w-full rounded bg-bp p-8 shadow ring-hp ring-offset-4 ring-offset-slate-200 duration-300 group-hover:ring-2 group-focus:ring-2 dark:ring-offset-slate-800 sm:p-12 md:bg-transparent md:p-0 md:shadow-none md:ring-transparent md:ring-offset-transparent md:dark:ring-offset-transparent">
        <div>
          <h3 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 line-clamp-2 dark:text-slate-200">
            {frontmatter.title}
          </h3>
          <p className="mb-6 text-base text-slate-800 line-clamp-3 dark:text-slate-300">
            {frontmatter.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 flex-wrap">
            {frontmatter.categories?.map((category) => {
              return (
                <span
                  key={category}
                  className="badge rounded-full bg-slate-300 text-black line-clamp-1"
                >
                  {category}
                </span>
              );
            })}
          </div>
          <dl className="">
            <dt className="sr-only">Date</dt>
            <dd className="text-right text-sm leading-6 text-slate-700 dark:text-slate-400 lg:whitespace-nowrap">
              <time dateTime={frontmatter.updated || frontmatter.published}>
                {frontmatter.updated
                  ? `更新: ${formatDate(frontmatter.updated, true)}`
                  : frontmatter.published
                  ? `公開: ${formatDate(frontmatter.published, true)}`
                  : null}
              </time>
            </dd>
          </dl>
        </div>
      </div>
    </Link>
  </motion.article>
);

export const WorksCard = ({ frontmatter }: Props) => (
  <article>
    <Link
      to={`/works/${frontmatter.slug}`}
      prefetch="intent"
      className="group w-full flex-col focus:outline-none"
    >
      <div className="relative mb-6 block rounded shadow-md ring-hp ring-offset-4 ring-offset-bp transition duration-300 group-hover:ring-2 group-focus:ring-2 group-focus:ring-hp">
        {frontmatter.bannerImgId ? (
          <PostImage
            className="rounded"
            imgId={frontmatter.bannerImgId}
            sizes={[
              "(max-width:767px) 80vw",
              "(min-width:768px) and (max-width:1535px) 45vw",
              "25vw",
            ].join(", ")}
            alt={frontmatter.bannerAlt ?? frontmatter.title}
          />
        ) : (
          <div className="aspect-none rounded bg-gradient-to-br from-slate-600 to-slate-500 md:aspect-h-9 md:aspect-w-16">
            <span className="flex items-center justify-center">No Image</span>
          </div>
        )}
      </div>
      <div className="w-full">
        <div>
          <h3 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 line-clamp-2 dark:text-slate-200">
            {frontmatter.title}
          </h3>
          <p className="mb-6 text-base text-slate-800 line-clamp-3 dark:text-slate-300">
            {frontmatter.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {frontmatter.categories?.map((category) => {
              return (
                <span
                  key={category}
                  className="badge rounded-full bg-slate-300 text-black line-clamp-1"
                >
                  {category}
                </span>
              );
            })}
          </div>
          <dl>
            <dt className="sr-only">Date</dt>
            <dd className="text-right text-sm leading-6 text-slate-700 dark:text-slate-400 lg:whitespace-nowrap">
              <time dateTime={frontmatter.updated || frontmatter.published}>
                {frontmatter.updated
                  ? `${formatMonth(frontmatter.updated, true)}`
                  : frontmatter.published
                  ? `${formatMonth(frontmatter.published, true)}`
                  : null}
              </time>
            </dd>
          </dl>
        </div>
      </div>
    </Link>
  </article>
);
