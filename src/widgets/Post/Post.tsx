'use client'

import { FC } from 'react'
import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { TruncateText } from '@/components'
import { Badge, Card, CardContent, CardHeader, Separator } from '@/components/ui'
import { Post as PostType } from '@/types'
import { Owner } from '../Owner'

type Props = {
  data: PostType
}

const Post: FC<Props> = ({ data }) => (
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

      <div className="flex items-center gap-5">
        <div className="flex cursor-pointer items-center justify-start gap-2">
          <ThumbsUp />
          <span>{data.reactions.likes}</span>
        </div>

        <div className="flex cursor-pointer items-center justify-start gap-2">
          <ThumbsDown />
          <span>{data.reactions.dislikes}</span>
        </div>
      </div>
    </CardContent>
  </Card>
)

Post.displayName = 'Post'
export default Post
