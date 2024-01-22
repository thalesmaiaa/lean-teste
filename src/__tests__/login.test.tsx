import { describe, expect, test, vi } from 'vitest'
import { act, fireEvent, render } from '@testing-library/react'
import { LoginPage } from '../app/pages'

vi.mock('next/navigation', () => {
  const actual = vi.importActual('next/navigation')
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
    })),
    useSearchParams: vi.fn(() => ({
      get: vi.fn(),
    })),
    usePathname: vi.fn(),
  }
})

describe.only('Login Page', () => {
  test('Should watch empty form submit', async () => {
    const { getByTestId, getByText } = render(<LoginPage />)
    await act(async () => {
      fireEvent.click(getByTestId('submit'))
    })
    expect(getByText('Email inválido'))
    expect(getByText('Senha tem mínimo 8 caracteres'))
  })
})
