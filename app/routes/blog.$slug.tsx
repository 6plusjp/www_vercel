import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Link, useLoaderData, useParams } from '@remix-run/react'
import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from '@vercel/remix'
import { json } from '@vercel/remix'
import { motion, useReducedMotion } from 'framer-motion'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

import { Alert } from '~/components/alert'
import { MobileMenu } from '~/components/navbar'
import { PostImage } from '~/components/post-image'
import { Sidebar } from '~/components/sidebar'
import { TableOfContents } from '~/components/table-of-contents'
import prose from '~/styles/prose.css?url'
import { formatDate } from '~/utils/format'
import { getUrl } from '~/utils/misc'
import { getMdxPage } from '~/utils/post.server'
import { notFound } from '~/utils/responses'
import type { SEOHandle } from '~/utils/seo'
import { getMeta } from '~/utils/seo'

export const handle: SEOHandle = {}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const slug = params.slug || 'index'

  const post = await getMdxPage(slug)
  if (!post) throw notFound(slug)

  const headers = {
    'Cache-Control': 'private, max-age=3600',
    Vary: 'Cookie',
  }

  return json(post, { status: 200, headers })
}

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
  if (data?.frontmatter) {
    const { keywords = [], author } = data.frontmatter.meta ?? {}
    let title = data.frontmatter.meta?.title ?? data.frontmatter.title
    const description =
      data.frontmatter.meta?.description ?? data.frontmatter.description

    const isDraft = data.frontmatter.draft
    if (isDraft) title = `下書き: ${title ?? 'No Title'} | 6+ Blog`
    else title = `${title ?? 'No Title'} | 6+ Blog`

    return [
      ...getMeta({
        title,
        description,
        keywords: keywords.join(', '),
        image: `/img/social/${params.slug}`,
        url: `${getUrl()}/blog/${params.slug}`,
        author,
        isDraft,
      }),
    ]
  } else {
    return [
      {
        title: 'お探しのブログページは見つかりませんでした',
      },
    ]
  }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'preload',
      as: 'font',
      href: 'https://fonts.gstatic.com/s/sourcecodepro/v20/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPevWnsUnxg.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    { rel: 'stylesheet', href: prose },
  ]
}

export default function MdxScreen() {
  const { frontmatter, code } = useLoaderData<typeof loader>()
  const { slug } = useParams()
  const isDraft = Boolean(frontmatter.draft)
  const Component = useMemo(() => getMDXComponent(code), [code])

  const shouldReduceMotion = useReducedMotion()
  const duration = shouldReduceMotion ? 0 : 0.5
  const easing = [0.175, 0.85, 0.42, 0.96]
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
  }

  return (
    <>
      <div className="min-h-screen bg-slate-200 px-6 duration-500 dark:bg-slate-800 lg:flex">
        <div className="hidden flex-shrink-0 lg:block">
          <Sidebar>
            {/* {toc ? (
              <nav className="mb-8 text-tp">
                <h4 className="mb-2 py-1 pt-0 text-base font-medium uppercase">
                  Contents
                </h4>
                <div
                  className="toc"
                  dangerouslySetInnerHTML={{ __html: toc }}
                ></div>
              </nav>
            ) : null} */}
          </Sidebar>
        </div>
        <div className="flex-grow pb-12 lg:h-full lg:py-12">
          <div className="flex items-center justify-end px-[5vw] py-4 sm:py-8 lg:hidden lg:py-12">
            <MobileMenu />
          </div>
          <div className="block xl:flex xl:gap-8">
            <TableOfContents />
            <motion.div
              initial="exit"
              animate="enter"
              exit="exit"
              className="prose prose-sm max-w-4xl dark:prose-invert sm:prose-base lg:prose-lg"
            >
              <motion.header
                layoutId={`card-${slug}`}
                className="not-prose pb-12 pt-4 lg:py-16"
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
                          ? `更新: ${formatDate(frontmatter.updated)}`
                          : frontmatter.published
                            ? `公開: ${formatDate(frontmatter.published)}`
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
                  className="relative rounded shadow-md"
                  layoutId={`image-container-${slug}`}
                >
                  {frontmatter.bannerImgId ? (
                    <PostImage
                      className="rounded"
                      imgId={frontmatter.bannerImgId}
                      widths={[280, 560, 840, 1100]}
                      sizes={[
                        '(max-width:767px) 95vw',
                        '(min-width:768px) and (max-width:1023px) 740px',
                        '(min-width:1024px) and (max-width:1279px) 80vw',
                        '900px',
                      ].join(', ')}
                      alt={frontmatter.bannerAlt}
                    />
                  ) : null}
                </motion.div>
                <motion.div
                  variants={motionVariants.back}
                  className="not-prose mt-16"
                >
                  <Link
                    className="group flex gap-2 text-black dark:text-white"
                    prefetch="intent"
                    to="/blog"
                  >
                    <ArrowLeftIcon className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
                    <span className="text-base">Back to Blog</span>
                  </Link>
                </motion.div>
              </motion.header>
              <motion.article variants={motionVariants.code}>
                <Component />
              </motion.article>
              <section title="If you found this article helpful.">
                {/* {data.recommendations} */}
              </section>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
