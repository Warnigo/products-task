'use client'

import { Spinner } from '@/components'
import { useI18n } from '@/locales/client'
import { useGetUserTodos } from '@/shared/query-hooks'
import { getUserCredentials } from '@/stores/app'
import { Todo } from '@/widgets/Todo'

const MyTodos = () => {
  const t = useI18n()
  const userCredentials = getUserCredentials()
  const id = userCredentials?.id
  const { data, isLoading } = useGetUserTodos(Number(id))

  const todos = data?.todos

  if (!todos || isLoading) {
    return <Spinner />
  }

  if (!todos.length) {
    return (
      <div className="mt-5 flex items-center justify-center">
        <p className="text-center text-xl font-bold text-primary/50">{t('emptyTodos')}</p>
      </div>
    )
  }

  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 gap-3">
        {todos.map((item) => (
          <Todo key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}

MyTodos.displayName = 'MyTodos'
export default MyTodos
