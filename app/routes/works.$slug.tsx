import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Link, useLoaderData } from '@remix-run/react'
import type { LoaderFunctionArgs, MetaFunction } from '@vercel/remix'
import { json } from '@vercel/remix'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

import { Alert } from '~/components/alert'
import { Footer } from '~/components/footer'
import { Navbar } from '~/components/navbar'
import { PostImage } from '~/components/post-image'
import { Spacer } from '~/components/spacer'
import { formatMonth } from '~/utils/format'
import { getUrl } from '~/utils/misc'
import { getMdxPage, getWorksPages } from '~/utils/post.server'
import { notFound } from '~/utils/responses'
import type { SEOHandle } from '~/utils/seo'
import { getMeta } from '~/utils/seo'

export const handle: SEOHandle = {}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const slug = params.slug || 'index'
  const post = await getMdxPage(slug, 'works')
  if (!post) throw notFound(slug)

  const headers = {
    'Cache-Control': 'private, max-age=3600',
    Vary: 'Cookie',
  }

  return json(post, { status: 200, headers })
}

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
  if (data?.frontmatter) {
    const { keywords = [], ...extraMeta } = data.frontmatter.meta ?? {}
    let title = data.frontmatter.title

    const isDraft = data.frontmatter.draft
    if (isDraft) title = `下書き: ${title ?? 'No Title'} | 6+ Works`
    else title = `${title ?? 'No Title'} | 6+ Works`

    return [
      ...getMeta({
        title,
        description: data.frontmatter.description,
        keywords: keywords.join(', '),
        url: `${getUrl()}/works/${params.slug}`,
        isDraft,
      }),
      extraMeta,
    ]
  } else {
    return [
      {
        title: 'お探しのページは見つかりませんでした',
      },
    ]
  }
}

export default function Work() {
  const { frontmatter, code } = useLoaderData<typeof loader>()
  const isDraft = Boolean(frontmatter.draft)
  const Component = useMemo(() => getMDXComponent(code), [code])

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
  )
}
