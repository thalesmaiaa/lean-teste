import { PanoramaFishEye } from '@mui/icons-material'
import { tv } from 'tailwind-variants'

const loader = tv({
  base: ['animate-spin mx-auto my-0 flex relative top-1/2   '],

  variants: {
    variant: {
      violet: 'text-violet-500 ',
      white: 'text-white',
    },
  },

  defaultVariants: {
    variant: 'white',
  },
})

export type LoaderProps = {
  variant?: 'violet' | 'white'
  fontSize?: 'small' | 'medium' | 'inherit' | 'large'
}

export function Loader({
  variant = 'white',
  fontSize = 'inherit',
}: LoaderProps) {
  return <PanoramaFishEye className={loader({ variant })} fontSize={fontSize} />
}
