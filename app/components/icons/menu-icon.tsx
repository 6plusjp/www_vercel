import * as React from 'react'
import clsx from 'clsx'

interface Props {
  className?: string
}
function MenuIcon({ className }: Props) {
  return (
    <svg
      className={clsx(
        className,
        ' select-none stroke-current stroke-2 duration-300 ease-in-out hover:delay-500 hover:duration-700'
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="80"
      aria-label="menu icon"
      height="80"
    >
      <path
        className="top"
        d="M30 33h40c13.1 0 14.38 31.803 6.9 33.422-24.612 5.327 9.016-52.338-12.758-30.564L35.858 64.142"
      />
      <path
        className="middle"
        d="M70 50H30c-7.787 0-6.429-4.64-6.429-8.571 0-5.896 6.074-11.784 12.287-5.571l28.284 28.284"
      />
      <path
        className="bottom"
        d="M69.575 67.074h-40c-13.1 0-14.38-31.803-6.9-33.422 24.613-5.327-9.015 52.338 12.758 30.564l28.285-28.284"
      />
    </svg>
  )
}
export { MenuIcon }
