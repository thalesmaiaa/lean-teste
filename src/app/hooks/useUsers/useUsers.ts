import { api } from '@/apis'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

type User = {
  id: number
  name: string
  phone: string
  registrationDate: string
  status: string
}

export const useUsers = () => {
  const queryFn = async () => {
    const { data } = await api.get('/users')
    return data
  }

  const useListQuery = () => {
    return useQuery<User[]>({
      queryKey: [`users`],
      queryFn,
      placeholderData: keepPreviousData,
      staleTime: Infinity,
    })
  }

  const { data, isFetching } = useListQuery()

  return {
    data,
    isFetching,
  }
}
