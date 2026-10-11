import { randomBytes } from 'node:crypto'

import { createReadableStreamFromReadable } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import type { EntryContext } from '@vercel/remix'
import { isbot } from 'isbot'
import { renderToPipeableStream } from 'react-dom/server'
import { PassThrough } from 'stream'

import { __DEV__ } from './utils/assertion'
import { setNonce } from './utils/nonce'
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

  const nonce = randomBytes(16).toString('base64')
  setNonce(nonce)
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

  if (!__DEV__) {
    responseHeaders.set(
      'Content-Security-Policy',
      `default-src 'self'; script-src 'self' 'nonce-${nonce}' https://va.vercel-scripts.com https://vercel.live; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://res.cloudinary.com https://cdn.buymeacoffee.com https://vercel.live https://vercel.com; font-src 'self' https://fonts.gstatic.com https://vercel.live https://assets.vercel.com; connect-src 'self' https://va.vercel-scripts.com wss://ws-us3.pusher.com https://vercel.live; frame-src https://vercel.live; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'`
    )
  }

  return isbot(request.headers.get('user-agent'))
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
        nonce
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
        nonce
      )
}

function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  nonce: string
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false
    const { pipe, abort } = renderToPipeableStream(
      <RemixServer
        context={remixContext}
        url={request.url}
        abortDelay={ABORT_DELAY}
        nonce={nonce}
      />,
      {
        nonce,
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
  remixContext: EntryContext,
  nonce: string
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false
    const { pipe, abort } = renderToPipeableStream(
      <RemixServer
        context={remixContext}
        url={request.url}
        abortDelay={ABORT_DELAY}
        nonce={nonce}
      />,
      {
        nonce,
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
