'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { AnimateButton, Spinner, TruncateText } from '@/components'
import { Avatar, AvatarFallback, AvatarImage, Card, CardContent, CardHeader } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useIntersectionObserver } from '@/helpers/hooks'
import { getInitials } from '@/helpers/utils'
import { useI18n } from '@/locales/client'
import { FadeInUp } from '@/shared/motion'
import { useGetTodos } from '@/shared/query-hooks'

const Todos = () => {
  const t = useI18n()
  const { data, isLoading } = useGetTodos()
  const router = useRouter()
  const [ref] = useIntersectionObserver({ threshold: 0.5 })

  const todos = data?.todos

  const handleRouteTodoUser = (todoId: number) => {
    router.push(ROUTES.singleTodo.replace(':id', String(todoId)))
  }

  if (!todos) {
    return null
  }

  if (!data?.limit || isLoading) {
    return <Spinner />
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {todos.map((item) => (
        <FadeInUp key={item.id} ref={ref}>
          <Card className="cursor-pointer hover:shadow-md">
            <CardHeader className="flex flex-row items-start justify-start gap-3">
              <Avatar onClick={() => handleRouteTodoUser(item.id)}>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>{getInitials('')}</AvatarFallback>
              </Avatar>

              <p className="font-semibold">name surname</p>
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
