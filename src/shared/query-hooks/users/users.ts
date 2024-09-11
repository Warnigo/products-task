import { useQuery } from '@tanstack/react-query'
import {
  getSearchUser,
  getSingleUser,
  getUser,
  getUserCarts,
  getUserPosts,
  getUserTodos,
} from '@/api'
import { queryKeys } from '../query-keys'

export const useGetUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.users],
    queryFn: getUser,
  })

  return { data, isLoading }
}

export const useGetUserSingle = (userId: number) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: [queryKeys.userSingle(userId)],
    queryFn: () => getSingleUser(userId),
    staleTime: 5 * 60 * 1000,
    retry: 3,
    retryDelay: 1000,
  })

  return { data, isLoading, refetch }
}

export const useGetUserSearch = (username: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.userSearch],
    queryFn: () => getSearchUser(username),
  })

  return { data, isLoading }
}

export const useGetUserCarts = (userId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.userIdCarts(userId)],
    queryFn: () => getUserCarts(userId),
  })

  return { data, isLoading }
}

export const useGetUserPosts = (userId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.userIdPosts(userId)],
    queryFn: () => getUserPosts(userId),
  })

  return { data, isLoading }
}

export const useGetUserTodos = (userId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.userIdTodos(userId)],
    queryFn: () => getUserTodos(userId),
  })

  return { data, isLoading }
}