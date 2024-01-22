'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useReadLocalStorage } from '@/hooks'
import { Container, Header, Main } from './components'

export function HomePage() {
  const isAuthenticated = useReadLocalStorage('@leanUsers')

  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  return (
    <Container>
      <Header />
      <Main />
    </Container>
  )
}
