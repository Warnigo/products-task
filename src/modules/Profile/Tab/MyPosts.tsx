'use client'

import { Spinner } from '@/components'
import { useI18n } from '@/locales/client'
import { useGetUserPosts } from '@/shared/query-hooks'
import { getUserCredentials } from '@/stores/app'
import { Post } from '@/widgets/Post'

const MyPosts = () => {
  const t = useI18n()
  const userCredentials = getUserCredentials()
  const id = userCredentials?.id
  const { data, isLoading } = useGetUserPosts(Number(id))

  const posts = data?.posts

  if (!posts || isLoading) {
    return <Spinner />
  }

  if (!posts.length) {
    return (
      <div className="mt-5 flex items-center justify-center">
        <p className="text-center text-xl font-bold text-primary/50">{t('emptyPosts')}</p>
      </div>
    )
  }

  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 gap-3">
        {posts.map((item) => (
          <Post key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}

MyPosts.displayName = 'MyPosts'
export default MyPosts
