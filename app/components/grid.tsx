import * as React from 'react'
import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  overflow?: boolean
  className?: string
  as?: React.ElementType
  nested?: boolean
  rowGap?: boolean
  featured?: boolean
}

const Grid = React.forwardRef<HTMLElement, Props>(function Grid(
  { children, className, as: Tag = 'div', featured, nested, rowGap },
  ref
) {
  return (
    <Tag
      ref={ref}
      className={clsx('relative', {
        'mx-10vw': !nested,
        'w-full': nested,
        'py-10 md:py-24 lg:pb-40 lg:pt-36': featured
      })}
    >
      {featured ? (
        <div className='-mx-5vw absolute inset-0'>
          <div className='bg-secondary max-w-8xl w-full h-full mx-auto rounded-lg' />
        </div>
      ) : null}

      <div
        className={clsx(
          'relative grid gap-x-4 grid-cols-4 md:grid-cols-8 lg:gap-x-6 lg:grid-cols-12',
          {
            'mx-auto max-w-7xl': !nested,
            'gap-y-4 lg:gap-y-6': rowGap
          },
          className
        )}
      >
        {children}
      </div>
    </Tag>
  )
})

export { Grid }
