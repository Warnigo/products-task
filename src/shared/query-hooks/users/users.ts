import { useQuery } from '@tanstack/react-query'
import {
  getAllUsers,
  getSingleUser,
  getUserCarts,
  getUserPosts,
  getUserSearch,
  getUserTodos,
} from '@/api'
import { queryKeys } from '../query-keys'

export const useGetAllUsers = () =>
  useQuery({
    queryKey: [queryKeys.users],
    queryFn: getAllUsers,
    staleTime: 60 * 60 * 1,
  })

export const useGetUserSingle = (userId: number) =>
  useQuery({
    queryKey: [queryKeys.userSingle(userId)],
    queryFn: () => getSingleUser(userId),
    staleTime: 60 * 60 * 1,
  })

export const useGetUserSearch = (search: string) =>
  useQuery({
    queryKey: [queryKeys.usersSearch],
    queryFn: () => getUserSearch(search),
    staleTime: 60 * 60 * 1,
  })

export const useGetUserCarts = (userId: number) =>
  useQuery({
    queryKey: [queryKeys.userIdCarts(userId)],
    queryFn: () => getUserCarts(userId),
    staleTime: 5 * 60 * 1000,
    retry: 3,
    retryDelay: 1000,
  })

export const useGetUserPosts = (userId: number) =>
  useQuery({
    queryKey: [queryKeys.userIdPosts(userId)],
    queryFn: () => getUserPosts(userId),
    staleTime: 5 * 60 * 1000,
    retry: 3,
    retryDelay: 1000,
  })

export const useGetUserTodos = (userId: number) =>
  useQuery({
    queryKey: [queryKeys.userIdTodos(userId)],
    queryFn: () => getUserTodos(userId),
    staleTime: 5 * 60 * 1000,
    retry: 3,
    retryDelay: 1000,
  })
