import { Cart, CartsResponse, Post, PostsResponse, Todo, TodosResponse, Users } from '@/types'
import { axiosInstance } from '../axios-instance'
import { endpoints } from '../endpoints'

const handleApiError = (error: unknown) => {
  console.error('API error:', error)
  throw error
}

export const getSingleUser = async (userId: number): Promise<Users> => {
  try {
    const url = endpoints.userId.replace(':id', String(userId))
    const data = await axiosInstance.get<Users>(url, { useAuth: false })

    return data
  } catch (error) {
    return handleApiError(error)
  }
}

export const getUserCarts = async (userId: number): Promise<CartsResponse<Cart[]>> => {
  try {
    const url = endpoints.userIdCarts.replace(':id', String(userId))
    const data = await axiosInstance.get<CartsResponse<Cart[]>>(url, { useAuth: false })

    return data
  } catch (error) {
    return handleApiError(error)
  }
}

export const getUserPosts = async (userId: number): Promise<PostsResponse<Post[]>> => {
  try {
    const url = endpoints.userIdPosts.replace(':id', String(userId))
    const data = await axiosInstance.get<PostsResponse<Post[]>>(url, { useAuth: false })

    return data
  } catch (error) {
    return handleApiError(error)
  }
}

export const getUserTodos = async (userId: number): Promise<TodosResponse<Todo[]>> => {
  try {
    const url = endpoints.userIdTodos.replace(':id', String(userId))
    const data = await axiosInstance.get<TodosResponse<Todo[]>>(url, { useAuth: false })

    return data
  } catch (error) {
    return handleApiError(error)
  }
}
