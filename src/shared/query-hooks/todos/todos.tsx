import { useMutation, useQuery } from '@tanstack/react-query'
import { deleteTodo, deleteTodoProps, getSingleTodo, getTodos, postAddTodo } from '@/api'
import { TodoAddParams } from '@/types'
import { queryKeys } from '../query-keys'

export const useGetTodos = () => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.todos],
    queryFn: getTodos,
  })

  return { data, isLoading }
}

export const useGetSingleTodo = (todoId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.todos],
    queryFn: () => getSingleTodo(todoId),
  })

  return { data, isLoading }
}

export const usePostAddTodo = () => {
  const { data, isPending } = useMutation({
    mutationKey: [queryKeys.todoAdd],
    mutationFn: (todoAddParams: TodoAddParams) => postAddTodo(todoAddParams),
  })

  return { data, isPending }
}

export const useDeleteTodo = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: [queryKeys.todoAdd],
    mutationFn: ({ todoId, completed }: deleteTodoProps) => deleteTodo({ todoId, completed }),
  })

  return { mutate, isPending }
}
