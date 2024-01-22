import { Chip as MUIChip } from '@mui/material'
import { tv } from 'tailwind-variants'

type ChipProps = {
  label: string
  variant: 'ativo' | 'inativo'
}

const chip = tv({
  base: ['p-chip font-medium text-xs leading-4'],

  variants: {
    variant: {
      ativo: 'bg-green-50  text-green-500',
      inativo: 'bg-red-50 text-red-error',
    },
  },

  defaultVariants: {
    variant: 'ativo',
  },
})

export function Chip({ label, variant = 'ativo' }: ChipProps) {
  return <MUIChip label={label} className={chip({ variant })} />
}
