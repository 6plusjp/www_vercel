import { useMatches } from '@remix-run/react'
import * as React from 'react'

function ErrorPage({
  error,
  articles,
  heroProps,
}: {
  error?: Error
  articles?: Array<MdxListItem>
  heroProps: HeroSectionProps
}) {
  if (articles?.length) {
    Object.assign(heroProps, {
      arrowUrl: '#articles',
      arrowLabel: 'But wait, there is more!',
    })
  }
  return (
    <>
      <noscript>
        <div
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: 30,
          }}
        >
          <h1 style={{ fontSize: '2em' }}>{heroProps.title}</h1>
          <p style={{ fontSize: '1.5em' }}>{heroProps.subtitle}</p>
          <small>
            Also, this site works much better with JavaScript enabled...
          </small>
        </div>
      </noscript>
      <main className="relative">
        {error && process.env.NODE_ENV === 'development' ? (
          <RedBox error={error} />
        ) : null}
        <HeroSection {...heroProps} />

        {articles?.length ? (
          <>
            <div id="articles" />
            <BlogSection
              articles={articles}
              title="Looking for something to read?"
              description="Have a look at these articles."
            />
          </>
        ) : null}
      </main>
    </>
  )
}

export { ErrorPage }
