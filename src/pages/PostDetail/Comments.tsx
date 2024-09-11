'use client'

import { ThumbsUp } from 'lucide-react'
import { Spinner } from '@/components'
import { Card, Separator } from '@/components/ui'
import { useI18n } from '@/locales/client'
import { useGetCommentPost } from '@/shared/query-hooks/posts/posts'
import { Owner } from '@/widgets/Owner'

type Props = {
  postId: string
}

const Comments = ({ postId }: Props) => {
  const t = useI18n()
  const { data, isLoading } = useGetCommentPost(postId)

  const comments = data?.comments

  if (isLoading) {
    return <Spinner />
  }

  if (!comments?.length) {
    return (
      <div className="mt-4">
        <h3 className="text-2xl font-bold">{t('noComments')}</h3>
      </div>
    )
  }

  return (
    <div className="mt-4">
      <h3 className="text-2xl font-bold">{t('comments')}</h3>
      <Separator className="my-3" />

      <Card className="rounded-lg bg-background p-5">
        {comments.map((item, index) => (
          <div key={item.id}>
            <Owner userId={item.user.id} />
            <p className="mt-2">{item.body}</p>
            <div className="flex items-center gap-3 text-sm">
              <ThumbsUp />
              <span>{item.likes}</span>
            </div>
            {index !== comments.length - 1 && <Separator className="my-4" />}
          </div>
        ))}
      </Card>
    </div>
  )
}

Comments.displayName = 'Comments'
export default Comments
