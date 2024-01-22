import { describe, expect, test, vi } from 'vitest'
import { act, fireEvent, render } from '@testing-library/react'
import { HomePage } from '../app/pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Table } from '@/components'

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

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
]

const queryClient = new QueryClient()
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe.only('Users Page', () => {
  test('Should render users page', async () => {
    const { getAllByText } = render(<Wrapper>{<HomePage />}</Wrapper>)

    expect(getAllByText('LOGO')).toHaveLength(2)
  })

  test('Should render users Table and pagination', async () => {
    const { getByText } = render(
      <Wrapper>{<Table rows={rows} columns={columns} />}</Wrapper>,
    )

    expect(getByText('First name'))
    expect(getByText('Linhas por página'))
  })
})
