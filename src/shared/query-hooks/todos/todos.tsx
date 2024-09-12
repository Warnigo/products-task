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

export const useGetTodos = () =>
  useQuery({
    queryKey: [queryKeys.todos],
    queryFn: getTodos,
    staleTime: 60 * 60 * 1,
  })

export const useGetTodoRandom = () =>
  useQuery({
    queryKey: [queryKeys.todoRandom],
    queryFn: getTodoRandom,
  })

export const useGetSingleTodo = (todoId: string) =>
  useQuery({
    queryKey: [queryKeys.todos, todoId],
    queryFn: () => getSingleTodo(todoId),
    enabled: !!todoId,
    staleTime: 5 * 60 * 1000,
    retry: 3,
    retryDelay: 1000,
  })

export const usePostAddTodo = () =>
  useMutation({
    mutationKey: [queryKeys.todoAdd],
    mutationFn: (todoAddParams: TodoAddParams) => postAddTodo(todoAddParams),
  })

export const useDeleteTodo = () =>
  useMutation({
    mutationKey: [queryKeys.todoAdd],
    mutationFn: ({ todoId, completed }: deleteTodoProps) => deleteTodo({ todoId, completed }),
  })
