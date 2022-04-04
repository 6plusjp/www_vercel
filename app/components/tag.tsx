import clsx from 'clsx'
import * as React from 'react'
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox'

interface Props {
  tag: string
  selected: boolean
  onClick?: React.ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
}
function Tag({ tag, selected, onClick, disabled }: Props) {
  return (
    <CustomCheckboxContainer
      as="label"
      checked={selected}
      onChange={onClick}
      className={clsx(
        'relative block h-auto w-auto cursor-pointer py-1 pl-2 text-sm focus:shadow-none',
        {
          'text-tp': !selected,
          'text-hp': selected,
          'hover:opacity-50': !disabled,
          'line-through opacity-25': disabled,
        }
      )}
      disabled={disabled}
    >
      <CustomCheckboxInput checked={selected} value={tag} className="sr-only" />
      <span>{tag}</span>
    </CustomCheckboxContainer>
  )
}

export { Tag }
