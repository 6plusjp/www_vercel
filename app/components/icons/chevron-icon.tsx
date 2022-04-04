import clsx from 'clsx'

interface ChevronIconProps {
  direction: 'up' | 'right' | 'down' | 'left' | 'top-right'
  size?: number
  className?: string
}

const rotationMap = {
  up: 'rotate-180',
  right: '-rotate-90',
  down: 'rotate-0',
  left: 'rotate-90',
  'top-right': '-rotate-135'
}

function ChevronIcon({ direction, size = 24, className }: ChevronIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={clsx(className, 'transform', rotationMap[direction])}
      fill='none'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M19 9l-7 7-7-7'
      />
    </svg>
  )
}
export { ChevronIcon }
