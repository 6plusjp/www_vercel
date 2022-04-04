import clsx from 'clsx'

interface Props {
  size?: number
  className?: string
}

function FramerIcon({ size = 24, className }: Props) {
  return (
    <svg
      className={clsx(className)}
      width={size}
      height={size}
      viewBox='0 0 14 21'
      xmlns='http://www.w3.org/2000/svg'
      aria-label='framer icon'
    >
      <path d='M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z' fill='#fff' />
    </svg>
  )
}
export { FramerIcon }
