import type { EntryContext } from '@vercel/remix'
import lodash from 'lodash'
const { isEqual } = lodash

import { getDomainUrl, removeTrailingSlash } from './misc'

// sitemap.xml
type SitemapEntry = {
  route: string
  lastmod?: string
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority?: 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0
}

export type SEOHandle = {
  getSitemapEntries?: (
    request: Request
  ) =>
    | Promise<Array<SitemapEntry | null> | null>
    | Array<SitemapEntry | null>
    | null
}

export async function getSitemapXml(
  request: Request,
  remixContext: EntryContext
) {
  const domainUrl = getDomainUrl(request)

  function getEntry({
    route,
    lastmod,
    changefreq,
    priority = 0.7,
  }: SitemapEntry) {
    return `
  <url>
    <loc>${domainUrl}${route}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
    ${typeof priority === 'number' ? `<priority>${priority}</priority>` : ''}
  </url>
    `.trim()
  }

  const rawSitemapEntries = (
    await Promise.all(
      Object.entries(remixContext.routeModules).map(async ([id, mod]) => {
        if (id === 'root') return

        const handle = mod.handle as SEOHandle | undefined
        if (handle?.getSitemapEntries) {
          return handle.getSitemapEntries(request)
        }

        // exclude resource routes from the sitemap
        // (these are an opt-in via the getSitemapEntries method)
        if (!('default' in mod)) return

        const manifestEntry = remixContext.manifest.routes[id]
        if (!manifestEntry) {
          console.warn(`Could not find a manifest entry for ${id}`)
          return
        }
        let parentId = manifestEntry.parentId
        let parent = parentId ? remixContext.manifest.routes[parentId] : null

        let path
        if (manifestEntry.path) {
          path = removeTrailingSlash(manifestEntry.path)
        } else if (manifestEntry.index) {
          path = ''
        } else {
          return
        }

        while (parent) {
          // the root path is '/', so it messes things up if we add another '/'
          const parentPath = parent.path ? removeTrailingSlash(parent.path) : ''
          path = `${parentPath}/${path}`.replace(/\/{2,}/g, '/')
          parentId = parent.parentId
          parent = parentId ? remixContext.manifest.routes[parentId] : null
        }

        // we can't handle dynamic routes, so if the handle doesn't have a
        // getSitemapEntries function, we just
        if (path.includes(':')) return
        if (id === 'root') return

        const entry: SitemapEntry = { route: removeTrailingSlash(path) }
        return entry
      })
    )
  )
    .flatMap((z) => z)
    .filter(typedBoolean)

  const sitemapEntries: SitemapEntry[] = []
  for (const entry of rawSitemapEntries) {
    const existingEntryForRoute = sitemapEntries.find(
      (e) => e.route === entry.route
    )
    if (existingEntryForRoute) {
      if (!isEqual(existingEntryForRoute, entry)) {
        console.warn(
          `Duplicate route for ${entry.route} with different sitemap data`,
          { entry, existingEntryForRoute }
        )
      }
    } else {
      sitemapEntries.push(entry)
    }
  }

  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  >
    ${sitemapEntries.map((entry) => getEntry(entry)).join('')}
  </urlset>
    `.trim()
}

function typedBoolean<T>(
  value: T
): value is Exclude<T, '' | 0 | false | null | undefined> {
  return Boolean(value)
}

// robots.txt
type RobotsPolicy = {
  type: 'allow' | 'disallow' | 'sitemap' | 'crawlDelay' | 'userAgent'
  value: string
}

const typeTextMap = {
  userAgent: 'User-agent',
  allow: 'Allow',
  disallow: 'Disallow',
  sitemap: 'Sitemap',
  crawlDelay: 'Crawl-delay',
}

export function getRobotsText(request: Request): string {
  const policies: RobotsPolicy[] = [
    // for GPTBot
    { type: 'userAgent', value: 'GPTBot' },
    { type: 'disallow', value: '/' },
    // default
    {
      type: 'userAgent',
      value: '*',
    },
    { type: 'disallow', value: '/admin/' },
    { type: 'disallow', value: '/action/' },
    // sitemap
    { type: 'sitemap', value: `${getDomainUrl(request)}/sitemap.xml` },
  ]

  return policies.reduce((accumulator, policy) => {
    const { type, value } = policy
    return `${accumulator}${typeTextMap[type]}: ${value}\n`
  }, '')
}

// meta
interface MetaArgs {
  title?: string
  description?: string
  keywords?: string
  author?: string
  image?: string
  url?: string
  isDraft?: boolean
}

export const getMeta = ({
  title = '6+ | Front-End Developer',
  description = 'デジタル体験を加速させることで世界をより豊かにします。',
  keywords,
  author,
  image = 'public/images/og.png',
  url = 'https://6plus.vercel.app',
  isDraft = false,
}: MetaArgs) => {
  return [
    { title },
    // Article Specific Metadata
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content: keywords ?? 'None',
    },
    ...(author
      ? [
          {
            name: 'article-author',
            content: author,
          },
          {
            name: 'robots',
            content: isDraft ? 'noindex' : 'max-image-preview:large',
          },
        ]
      : []),
    // Open Graph Metadata
    {
      property: 'og:type',
      content: author ? 'article' : 'website',
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: image,
    },
    {
      property: 'og:site_name',
      content: '6+',
    },
    {
      property: 'og:url',
      content: url,
    },
    ...(author
      ? [
          {
            property: 'article:publisher',
            content: '', // TODO -
          },
          {
            property: 'article:publisher_time',
            content: '', // TODO - formatDateISO(published)
          },
        ]
      : []),
    // Twitter Card Metadata
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: url },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image:src', content: image },
    { name: 'twitter:site', content: '@6plusjp' },
  ]
}
