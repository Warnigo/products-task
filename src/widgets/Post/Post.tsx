'use client'

import { FC } from 'react'
import Link from 'next/link'
import { ChevronRight, ThumbsDown, ThumbsUp } from 'lucide-react'
import { AnimateButton, TruncateText } from '@/components'
import { Badge, Card, CardContent, CardHeader, Separator } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useI18n } from '@/locales/client'
import { Post as PostType } from '@/types'
import { Owner } from '../Owner'

type Props = {
  data: PostType
  hideButton?: boolean
}

export const Post: FC<Props> = ({ data, hideButton = false }) => {
  const t = useI18n()

  return (
    <Card className="rounded-lg border bg-background">
      <CardHeader>
        <Owner userId={data.userId} />
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        <div>
          <h5 className="text-xl font-bold">{data.title}</h5>
          <TruncateText limit={10} text={data.body} />
        </div>

        <div className="flex shrink-0 grow gap-2">
          {data.tags.map((item) => (
            <Badge key={item} className="rounded-full">
              {item}
            </Badge>
          ))}
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="flex gap-5">
            <div className="flex cursor-pointer items-center justify-start gap-2">
              <ThumbsUp />
              <span>{data.reactions.likes}</span>
            </div>

            <div className="flex cursor-pointer items-center justify-start gap-2">
              <ThumbsDown />
              <span>{data.reactions.dislikes}</span>
            </div>
          </div>

          {!hideButton && (
            <Link href={ROUTES.postSingle.replace(':id', String(data.id))}>
              <AnimateButton roleIcon={<ChevronRight className="size-5" />}>
                {t('seeMore')}
              </AnimateButton>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

Post.displayName = 'Post'
