import { useMutation, useQuery } from '@tanstack/react-query'
import {
  deletePost,
  getAllPosts,
  getPostComments,
  getPostSearch,
  getPostSingle,
  postAddPost,
  updatePost,
  UpdatePostProps,
} from '@/api'
import { CommentRequest } from '@/types'
import { queryKeys } from '../query-keys'

const steleTime = 60 * 60 * 1

export const useGetAllPosts = () =>
  useQuery({
    queryKey: [queryKeys.allPosts],
    queryFn: getAllPosts,
    staleTime: steleTime,
  })

export const useGetSinglePost = (postId: string) =>
  useQuery({
    queryKey: [queryKeys.postSingle(postId)],
    queryFn: () => getPostSingle(postId),
    enabled: !!postId,
    staleTime: steleTime,
  })

export const useGetSearchPost = (search: string) =>
  useQuery({
    queryKey: [queryKeys.postSearch, search],
    queryFn: () => getPostSearch(search),
    enabled: !!search,
    staleTime: steleTime,
  })

export const useGetCommentPost = (postId: string) =>
  useQuery({
    queryKey: [queryKeys.postComment(postId)],
    queryFn: () => getPostComments(postId),
    enabled: !!postId,
    staleTime: steleTime,
  })

export const usePostAdd = () =>
  useMutation({
    mutationKey: [queryKeys.postSearch],
    mutationFn: (params: CommentRequest) => postAddPost(params),
  })

export const usePutUpdatePost = () =>
  useMutation({
    mutationKey: [queryKeys.postUpdate],
    mutationFn: ({ postId, params }: UpdatePostProps) => updatePost({ postId, params }),
  })

export const useDeletePost = () =>
  useMutation({
    mutationKey: [queryKeys.postUpdate],
    mutationFn: (postId: string) => deletePost(postId),
  })
