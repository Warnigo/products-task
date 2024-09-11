import { Comment, CommentRequest, CommentsResponse, Post, PostsResponse } from '@/types'
import { axiosInstance } from '../axios-instance'
import { endpoints } from '../endpoints'

export type UpdatePostProps = {
  postId: string
  params: string
}

const handleError = (error: unknown) => {
  console.error(error)
  throw error
}

export const getAllPosts = async (): Promise<PostsResponse<Post[]>> => {
  try {
    const response = await axiosInstance.get<PostsResponse<Post[]>>(endpoints.posts, {
      useAuth: false,
    })

    return response
  } catch (error) {
    return handleError(error)
  }
}

export const getPostSingle = async (postId: string): Promise<Post> => {
  try {
    const url = endpoints.postId.replace(':id', postId)
    const response = await axiosInstance.get<Post>(url, {
      useAuth: false,
    })

    return response
  } catch (error) {
    return handleError(error)
  }
}

export const getPostSearch = async (name: string): Promise<PostsResponse<Post[]>> => {
  try {
    const url = endpoints.postSearch.replace(':name', name)
    const response = await axiosInstance.get<PostsResponse<Post[]>>(url, {
      useAuth: false,
    })

    return response
  } catch (error) {
    throw handleError(error)
  }
}

export const getPostComments = async (postId: string): Promise<CommentsResponse<Comment[]>> => {
  try {
    const url = endpoints.postComments.replace(':id', postId)
    const response = await axiosInstance.get<CommentsResponse<Comment[]>>(url, {
      useAuth: false,
    })

    return response
  } catch (error) {
    return handleError(error)
  }
}

export const postAddPost = async (params: CommentRequest): Promise<Comment> => {
  try {
    const response = await axiosInstance.post<Comment>(endpoints.postAdd, params, {
      useAuth: false,
    })

    return response
  } catch (error) {
    return handleError(error)
  }
}

export const updatePost = async ({ postId, params }: UpdatePostProps): Promise<string> => {
  try {
    const url = endpoints.postId.replace(':id', postId)
    const response = await axiosInstance.put<string>(url, params, {
      useAuth: false,
    })

    return response
  } catch (error) {
    return handleError(error)
  }
}

export const deletePost = async (postId: string): Promise<Comment> => {
  try {
    const url = endpoints.postId.replace(':id', postId)
    const response = await axiosInstance.delete<Comment>(url, {
      useAuth: false,
    })

    return response
  } catch (error) {
    return handleError(error)
  }
}
