import { useQuery } from '@tanstack/react-query'
import { getUser } from '@/api'
import { queryKeys } from '../query-keys'

export const useGetUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.userMe],
    queryFn: getUser,
  })

  return { data, isLoading }
}
