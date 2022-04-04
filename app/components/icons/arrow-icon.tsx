import * as React from 'react'
import clsx from 'clsx'

interface ArrowIconProps {
  direction: 'up' | 'right' | 'down' | 'left' | 'top-right'
  size?: number
  className?: string
}

const rotationMap = {
  up: 'rotate-180',
  right: '-rotate-90',
  down: 'rotate-0',
  left: 'rotate-90',
  'top-right': '-rotate-135',
}

function ArrowIcon({ direction, size = 24, className }: ArrowIconProps) {
  return (
    <svg
      className={clsx(className, 'transform', rotationMap[direction])}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  )
}
export { ArrowIcon }
