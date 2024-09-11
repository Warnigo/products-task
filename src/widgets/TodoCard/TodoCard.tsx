'use client'

import { FC } from 'react'
import Link from 'next/link'
import { Badge, Card, CardContent, CardHeader } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useI18n } from '@/locales/client'
import { Todo } from '@/types'
import { User } from '../User'

type Props = {
  data: Todo
}

const TodoCard: FC<Props> = ({ data }) => {
  const t = useI18n()

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <Link href={ROUTES.usersSingle.replace(':id', String(data.id))}>
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

      <CardContent>
        <p className="text-primary">{data.todo}</p>
      </CardContent>
    </Card>
  )
}

TodoCard.displayName = 'TodoCard'
export default TodoCard
