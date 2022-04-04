import clsx from 'clsx'
import * as React from 'react'

interface Props {
  state?: 'info' | 'success' | 'warning' | 'error'
  children: React.ReactNode
  className?: string
}
export function Alert({ children, className }: Props) {
  return (
    <div
      className={clsx(
        className,
        'alert relative rounded-r-lg border-l-4 px-4 py-2 text-base lg:text-lg'
      )}
    >
      {children}
    </div>
  )
}
