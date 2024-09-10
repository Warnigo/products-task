import {
  Cart,
  CartsResponse,
  Post,
  PostsResponse,
  Todo,
  TodosResponse,
  Users,
  UsersResponse,
} from '@/types'
import { axiosInstance } from '../axios-instance'
import { endpoints } from '../endpoints'

export const getUsers = async () => {
  try {
    const response = await axiosInstance.get<UsersResponse<Users[]>>(endpoints.users, {
      useAuth: false,
    })

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getSingleUser = async (userId: number) => {
  try {
    const url = endpoints.userId.replace(':id', String(userId))
    const response = await axiosInstance.get<Users>(url, { useAuth: false })

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getSearchUser = async (username: string) => {
  try {
    const url = endpoints.userSearch.replace(':name', String(username))
    const response = await axiosInstance.get<UsersResponse<Users[]>>(url, { useAuth: false })

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getUserCarts = async (userId: number) => {
  try {
    const url = endpoints.userIdCarts.replace(':id', String(userId))
    const response = await axiosInstance.get<CartsResponse<Cart[]>>(url, { useAuth: false })

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getUserPosts = async (userId: number) => {
  try {
    const url = endpoints.userIdPosts.replace(':id', String(userId))
    const response = await axiosInstance.get<PostsResponse<Post[]>>(url, { useAuth: false })

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getUserTodos = async (userId: number) => {
  try {
    const url = endpoints.userIdTodos.replace(':id', String(userId))
    const response = await axiosInstance.get<TodosResponse<Todo[]>>(url, { useAuth: false })

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}
