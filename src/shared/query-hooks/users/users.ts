import { useQuery } from '@tanstack/react-query'
import {
  getSearchUser,
  getSingleUser,
  getUserCarts,
  getUserPosts,
  getUsers,
  getUserTodos,
} from '@/api'
import { queryKeys } from '../query-keys'

export const useGetUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.users],
    queryFn: getUsers,
    staleTime: 5 * 60 * 1000,
    retry: 3,
    retryDelay: 1000,
  })

  return { data, isLoading }
}

export const useGetUserSingle = (userId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.userSingle(userId)],
    queryFn: () => getSingleUser(userId),
    staleTime: 60 * 60 * 1,
  })

  return { data, isLoading }
}

export const useGetUserSearch = (username: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.userSearch],
    queryFn: () => getSearchUser(username),
    staleTime: 5 * 60 * 1000,
    retry: 3,
    retryDelay: 1000,
  })

  return { data, isLoading }
}

export const useGetUserCarts = (userId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.userIdCarts(userId)],
    queryFn: () => getUserCarts(userId),
    staleTime: 5 * 60 * 1000,
    retry: 3,
    retryDelay: 1000,
  })

  return { data, isLoading }
}

export const useGetUserPosts = (userId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.userIdPosts(userId)],
    queryFn: () => getUserPosts(userId),
    staleTime: 5 * 60 * 1000,
    retry: 3,
    retryDelay: 1000,
  })

  return { data, isLoading }
}

export const useGetUserTodos = (userId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.userIdTodos(userId)],
    queryFn: () => getUserTodos(userId),
    staleTime: 5 * 60 * 1000,
    retry: 3,
    retryDelay: 1000,
  })

  return { data, isLoading }
}
