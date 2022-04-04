import clsx from 'clsx'
import * as React from 'react'

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      className={clsx(className, 'flex items-center')}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export { ExternalLink }
