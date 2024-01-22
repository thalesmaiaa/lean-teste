import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Button } from '@mui/material'
import { forwardRef } from 'react'

type FilterButtonProps = {
  label: string
  onClick?: () => void
  direction?: 'up' | 'down'
}

export const FilterButton = forwardRef<HTMLButtonElement, FilterButtonProps>(
  ({ label, onClick, direction }, ref) => {
    function renderIcon() {
      if (direction === 'up') {
        return <KeyboardArrowUp />
      }
      return <KeyboardArrowDown />
    }
    return (
      <Button
        variant="text"
        size="medium"
        className="p-sortButton rounded-4 bg-white text-violet-500 normal-case flex items-center gap-2 leading-6 tracking-0.4"
        endIcon={renderIcon()}
        ref={ref}
        onClick={onClick}
      >
        {label}
      </Button>
    )
  },
)

FilterButton.displayName = 'FilterButton'
