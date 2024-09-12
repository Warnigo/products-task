'use client'

import { FC } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { AnimateButton, TruncateText } from '@/components'
import { Badge, Card, CardContent, CardHeader, Separator } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useI18n } from '@/locales/client'
import { Todo as TodoType } from '@/types'
import { Owner } from '../Owner'

type Props = {
  data: TodoType
  hideButton?: boolean
}

export const Todo: FC<Props> = ({ data, hideButton = false }) => {
  const t = useI18n()

  return (
    <Card className="p-6">
      <CardHeader className="flex flex-row items-center justify-between p-0">
        <div>
          <Owner userId={data.userId} />
        </div>

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
        <TruncateText limit={10} text={data.todo || ''} />

        {!hideButton && (
          <Link href={ROUTES.singleTodo.replace(':id', String(data.id))}>
            <AnimateButton roleIcon={<ChevronRight />}>{t('seeMore')}</AnimateButton>
          </Link>
        )}
      </CardContent>
    </Card>
  )
}

Todo.displayName = 'Todo'
