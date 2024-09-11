import { useQuery } from '@tanstack/react-query'
import { getUser } from '@/api'
import { queryKeys } from '../query-keys'

export const useGetUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.userMe],
    queryFn: getUser,
    staleTime: 60 * 60 * 1,
  })

  return { data, isLoading }
}
