import { createReadableStreamFromReadable } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import type { EntryContext } from '@vercel/remix'
import { isbot } from 'isbot'
import { renderToPipeableStream } from 'react-dom/server'
import { PassThrough } from 'stream'

import { getRobotsText, getSitemapXml } from './utils/seo'

const ABORT_DELAY = 5_000

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  // Handle sitemap and robots.txt
  const url = new URL(request.url)
  if (url.pathname === '/sitemap.xml') {
    const sitemap = await getSitemapXml(request, remixContext)
    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  }
  if (url.pathname === '/robots.txt') {
    const robotsText = getRobotsText(request)
    return new Response(robotsText, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  }

  // Resume pages contain personal information: reject crawler indexing.
  // (Loader response headers are not propagated to document responses by
  // Remix, so the header must be set here on the final response headers.)
  if (url.pathname.startsWith('/resume/')) {
    responseHeaders.set('X-Robots-Tag', 'noindex, nofollow, noarchive')
  }

  return isbot(request.headers.get('user-agent'))
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      )
}

function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false
    const { pipe, abort } = renderToPipeableStream(
      <RemixServer
        context={remixContext}
        url={request.url}
        abortDelay={ABORT_DELAY}
      />,
      {
        onAllReady() {
          shellRendered = true
          const body = new PassThrough()
          const stream = createReadableStreamFromReadable(body)

          responseHeaders.set('Content-Type', 'text/html')

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          )

          pipe(body)
        },
        onShellError(err: unknown) {
          reject(err)
        },
        onError(err: unknown) {
          responseStatusCode = 500
          if (shellRendered) {
            console.error(err)
          }
        },
      }
    )
    setTimeout(abort, ABORT_DELAY)
  })
}

function handleBrowserRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false
    const { pipe, abort } = renderToPipeableStream(
      <RemixServer
        context={remixContext}
        url={request.url}
        abortDelay={ABORT_DELAY}
      />,
      {
        onShellReady() {
          shellRendered = true
          const body = new PassThrough()
          const stream = createReadableStreamFromReadable(body)

          responseHeaders.set('Content-Type', 'text/html')

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          )

          pipe(body)
        },
        onShellError(err: unknown) {
          reject(err)
        },
        onError(err: unknown) {
          responseStatusCode = 500
          if (shellRendered) {
            console.error(err)
          }
        },
      }
    )
    setTimeout(abort, ABORT_DELAY)
  })
}
