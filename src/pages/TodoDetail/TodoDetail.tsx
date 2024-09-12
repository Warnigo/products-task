'use client'

import { FC } from 'react'
import { Breadcrumb, Spinner } from '@/components'
import { Separator } from '@/components/ui'
import { useGetSingleTodo } from '@/shared/query-hooks'
import { Todo } from '@/widgets/Todo'
import TodoRandom from './TodoRandom'

interface Props {
  todoId: string
}

const TodoDetail: FC<Props> = ({ todoId }) => {
  const { data, isLoading, error } = useGetSingleTodo(todoId)

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>
  }

  if (!data) {
    return <div>No data available</div>
  }

  return (
    <div className="h-full py-10">
      <Breadcrumb title={data.todo} />
      <h1 className="text-4xl font-black">{data.todo}</h1>

      <Separator className="my-4" />
      <Todo data={data} hideButton />

      <Separator className="my-4 mb-10" />
      <TodoRandom />
    </div>
  )
}

TodoDetail.displayName = 'TodoDetail'
export default TodoDetail
