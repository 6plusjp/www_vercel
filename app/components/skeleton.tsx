import * as React from 'react'
import clsx from 'clsx'

interface Props {
  /**
   * The animation.
   * If `false` the animation effect is disabled.
   * @default 'pulse'
   */
  animation?: 'pulse' | 'wave' | false
  /**
   * The type of content that will be rendered.
   * @default 'text'
   */
  variant?: 'text' | 'rectangular' | 'circular'

  children?: React.ReactNode
  className?: string
}

const Skeleton = React.forwardRef(function Skeleton(
  props: React.HTMLAttributes<HTMLSpanElement> & Props,
  ref: React.Ref<HTMLSpanElement>
) {
  const { animation = 'pulse', className, variant = 'text', ...rest } = props

  return (
    <span
      ref={ref}
      className={clsx(className, 'block', {
        'animate-pulse': animation === 'pulse',
        'animate-wave': animation === 'wave',
        'my-0 h-auto rounded': variant === 'text',
        'rounded-full': variant === 'circular',
      })}
      {...rest}
    />
  )
})

export { Skeleton }
