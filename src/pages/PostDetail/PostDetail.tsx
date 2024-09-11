'use client'

import { Breadcrumb, Spinner } from '@/components'
import { Separator } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useI18n } from '@/locales/client'
import { useGetSinglePost } from '@/shared/query-hooks'
import { Post } from '@/widgets/Post'
import Comments from './Comments'

type Props = {
  postId: string
}

const PostDetail = ({ postId }: Props) => {
  const t = useI18n()
  const { data, isLoading } = useGetSinglePost(postId)

  if (isLoading || !data) {
    return <Spinner />
  }

  return (
    <section className="my-10 flex flex-col gap-4">
      <div>
        <Breadcrumb title={data.title} back={t('layout.posts')} backLink={ROUTES.posts} />

        <h1 className="text-4xl font-black">{data.title}</h1>
      </div>

      <Separator />
      <Post data={data} hideButton />
      <Comments postId={postId} />
    </section>
  )
}

PostDetail.displayName = 'PostDetail'
export default PostDetail
