'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { CirclePlus } from 'lucide-react'
import { AnimateButton, Spinner } from '@/components'
import { Separator } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useI18n } from '@/locales/client'
import { useGetAllPosts, useGetSearchPost } from '@/shared/query-hooks'
import { Post } from '@/widgets/Post'
import PostSearch from './Search'

const Posts = () => {
  const t = useI18n()
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchQuery = searchParams?.get('q') ?? ''

  const [searchTerm, setSearchTerm] = useState(searchQuery)

  const { data: allPostsData, isLoading: isLoadingAllPosts } = useGetAllPosts()
  const { data: searchPostsData, isLoading: isLoadingSearchPosts } = useGetSearchPost(searchQuery)

  const posts = searchQuery ? searchPostsData?.posts : allPostsData?.posts

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm !== searchQuery) {
        const newSearchParams = new URLSearchParams(searchParams?.toString() ?? '')

        if (searchTerm) {
          newSearchParams.set('q', searchTerm)
        } else {
          newSearchParams.delete('q')
        }
        router.push(`${ROUTES.posts}?${newSearchParams.toString()}`)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm, router, searchParams, searchQuery])

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  if (isLoadingAllPosts && !searchQuery) {
    return <Spinner />
  }

  return (
    <section className="my-10 h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-black">{t('layout.posts')}</h1>

        <div className="flex items-center gap-3">
          <div className="w-96">
            <PostSearch value={searchTerm} onChange={handleSearch} />
          </div>

          <div className="flex items-center">
            <Link href={ROUTES.postCreate}>
              <AnimateButton roleIcon={<CirclePlus />}>{t('createPost')}</AnimateButton>
            </Link>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      {isLoadingSearchPosts && searchQuery ? (
        <div className="my-10 flex items-center justify-center">
          <Spinner />
        </div>
      ) : posts && posts.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {posts.map((item) => (
            <Post key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="mt-10 flex items-center justify-center">
          <p className="text-4xl font-black text-primary/50">
            {searchQuery ? t('searchNotFound') : t('notFoundUsers')}
          </p>
        </div>
      )}
    </section>
  )
}

Posts.displayName = 'Posts'
export default Posts
