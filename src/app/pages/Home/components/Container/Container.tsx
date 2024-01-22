import { Box } from '@mui/material'

type ContainerProps = {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <Box component="main" className="h-full bg-white">
      {children}
    </Box>
  )
}
