'use client'

import Link from 'next/link'
import { CirclePlus } from 'lucide-react'
import { AnimateButton, Spinner } from '@/components'
import { Separator } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useIntersectionObserver } from '@/helpers/hooks'
import { useI18n } from '@/locales/client'
import { useGetTodos } from '@/shared/query-hooks'
import { Todo } from '@/widgets/Todo'

const Home = () => {
  const t = useI18n()
  const { data: todosData, isLoading: isTodosLoading } = useGetTodos()
  const [ref] = useIntersectionObserver({ threshold: 0.5 })

  const todos = todosData?.todos

  if (!todos) {
    return null
  }

  if (!todosData?.limit || isTodosLoading) {
    return <Spinner />
  }

  return (
    <div className="py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-black">{t('layout.todos')}</h1>

        <div className="flex items-center">
          <Link href={ROUTES.createTodo}>
            <AnimateButton roleIcon={<CirclePlus />}>{t('todo.create')}</AnimateButton>
          </Link>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="grid grid-cols-2 gap-3" ref={ref}>
        {todos.map((item) => (
          <Todo key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}

Home.displayName = 'Home'
export default Home
