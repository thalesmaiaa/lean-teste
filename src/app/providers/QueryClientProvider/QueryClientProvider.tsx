'use client'

import { queryClient } from '@/apis'
import { QueryClientProvider as Provider } from '@tanstack/react-query'

type QueryClientProviderProps = {
  children: React.ReactNode
}

export function QueryClientProvider({ children }: QueryClientProviderProps) {
  return <Provider client={queryClient}>{children}</Provider>
}
