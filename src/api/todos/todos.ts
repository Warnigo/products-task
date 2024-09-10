import { Response, Todo, TodoAddParams } from '@/types'
import { axiosInstance } from '../axios-instance'
import { endpoints } from '../endpoints'

export type deleteTodoProps = {
  todoId: number
  completed: boolean
}

export const getTodos = async () => {
  try {
    const data = await axiosInstance.get<Response<Todo[]>>(endpoints.todos, { useAuth: false })

    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getSingleTodo = async (todoId: number) => {
  try {
    const url = endpoints.todoId.replace(':id', String(todoId))
    const data = await axiosInstance.get<Todo>(url, { useAuth: false })

    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const postAddTodo = async (todoAddParams: TodoAddParams) => {
  try {
    const data = await axiosInstance.post<Todo>(endpoints.todoAdd, todoAddParams, {
      useAuth: false,
    })

    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const deleteTodo = async ({ todoId, completed }: deleteTodoProps) => {
  try {
    const url = endpoints.todoId.replace(':id', String(todoId))
    const data = await axiosInstance.post<Todo>(
      url,
      { completed },
      {
        useAuth: false,
      },
    )

    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}