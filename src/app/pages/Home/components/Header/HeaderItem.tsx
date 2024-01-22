import { Button } from '@mui/material'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

type HeaderItemProps = {
  selected: boolean
  label: string
  onClick: () => void
}

export function HeaderItem({ selected, label, onClick }: HeaderItemProps) {
  return (
    <Button
      className={twMerge(
        'text-gray-800 font-medium normal-case leading-6 tracking-0.4 py-4 px-2',
        `${selected ? 'text-violet-500 font-normal' : 'text-gray-800'}`,
      )}
      onClick={onClick}
    >
      {label}
      {selected && (
        <motion.div
          layoutId="activeTab"
          className="hidden md:flex md:absolute -bottom-px left-0 right-0 h-0.5 bg-violet-500 "
        />
      )}
    </Button>
  )
}
