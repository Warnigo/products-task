'use client'

import { FC } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { AnimateButton, TruncateText } from '@/components'
import { Badge, Card, CardContent, CardHeader, Separator } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useI18n } from '@/locales/client'
import { Todo as TodoType } from '@/types'
import { User } from '../User'

type Props = {
  data: TodoType
}

const Todo: FC<Props> = ({ data }) => {
  const t = useI18n()

  return (
    <Card className="p-6">
      <CardHeader className="flex flex-row items-center justify-between p-0">
        <Link href={ROUTES.usersSingle.replace(':id', String(data.userId))}>
          <User userId={data.id} />
        </Link>

        <div className="flex items-center gap-2">
          {data.completed ? (
            <Badge className="rounded-full py-2">{t('completed')}</Badge>
          ) : (
            <Badge className="rounded-full py-2">{t('notCompleted')}</Badge>
          )}
        </div>
      </CardHeader>

      <Separator className="my-5" />

      <CardContent className="flex items-center justify-between p-0">
        <TruncateText limit={10} text={data.todo} />

        <Link href={ROUTES.singleTodo.replace(':id', String(data.id))}>
          <AnimateButton roleIcon={<ChevronRight />}>{t('seeMore')}</AnimateButton>
        </Link>
      </CardContent>
    </Card>
  )
}

Todo.displayName = 'Todo'
export default Todo
