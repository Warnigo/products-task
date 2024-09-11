import { useMutation, useQuery } from '@tanstack/react-query'
import {
  deleteTodo,
  deleteTodoProps,
  getSingleTodo,
  getTodoRandom,
  getTodos,
  postAddTodo,
} from '@/api'
import { TodoAddParams } from '@/types'
import { queryKeys } from '../query-keys'

export const useGetTodos = () => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.todos],
    queryFn: getTodos,
  })

  return { data, isLoading }
}

export const useGetTodoRandom = () => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.todoRandom],
    queryFn: getTodoRandom,
  })

  return { data, isLoading }
}

export const useGetSingleTodo = (todoId: number) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [queryKeys.todos],
    queryFn: () => getSingleTodo(todoId),
    staleTime: 5 * 60 * 1000,
    retry: 3,
    retryDelay: 1000,
  })

  return { data, isLoading, error, refetch }
}

export const usePostAddTodo = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: [queryKeys.todoAdd],
    mutationFn: (todoAddParams: TodoAddParams) => postAddTodo(todoAddParams),
  })

  return { mutate, isPending }
}

export const useDeleteTodo = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: [queryKeys.todoAdd],
    mutationFn: ({ todoId, completed }: deleteTodoProps) => deleteTodo({ todoId, completed }),
  })

  return { mutate, isPending }
}
