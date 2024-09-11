'use client'

import { FC, useEffect, useState } from 'react'
import { Breadcrumb, Spinner } from '@/components'
import { Separator } from '@/components/ui'
import { useGetSingleTodo } from '@/shared/query-hooks'
import { TodoCard } from '@/widgets/TodoCard'
import { TodoRandom } from './TodoRandom'

interface Props {
  todoId: string
}

const TodoDetail: FC<Props> = ({ todoId }) => {
  const { data, isLoading, refetch } = useGetSingleTodo(Number(todoId))

  if (isLoading) {
    return <Spinner />
  }

  if (data?.userId === undefined) {
    refetch()
    window.location.reload()
  }

  return (
    <div className="h-full py-10">
      <Breadcrumb title={data?.todo || ''} />
      <h1 className="text-4xl font-black">{data?.todo}</h1>
      <Separator className="my-4" />
      <TodoCard data={data!} />
      <Separator className="my-4 mb-10" />
      <TodoRandom />
    </div>
  )
}

TodoDetail.displayName = 'TodoDetail'
export default TodoDetail
