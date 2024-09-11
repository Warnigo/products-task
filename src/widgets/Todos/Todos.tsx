'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { AnimateButton, Spinner, TruncateText } from '@/components'
import { Card, CardContent, CardHeader } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useIntersectionObserver } from '@/helpers/hooks'
import { useI18n } from '@/locales/client'
import { FadeInUp } from '@/shared/motion'
import { useGetTodos } from '@/shared/query-hooks'
import { User } from '../User'

const Todos = () => {
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
    <div className="grid grid-cols-2 gap-3">
      {todos.map((item) => (
        <FadeInUp key={item.id} ref={ref}>
          <Card className="cursor-pointer hover:shadow-md">
            <CardHeader>
              <User userId={item.userId} />
            </CardHeader>

            <CardContent className="flex items-center justify-between">
              <TruncateText text={item.todo} limit={10} />

              <Link href={ROUTES.singleTodo.replace(':id', String(item.id))}>
                <AnimateButton roleIcon={<ChevronRight />}>{t('seeMore')}</AnimateButton>
              </Link>
            </CardContent>
          </Card>
        </FadeInUp>
      ))}
    </div>
  )
}

Todos.displayName = 'Todos'
export default Todos
