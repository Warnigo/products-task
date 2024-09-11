'use client'

import { useEffect, useState } from 'react'
import { Spinner } from '@/components'
import { Separator } from '@/components/ui'
import { useI18n } from '@/locales/client'
import { useGetAllPosts, useGetSearchPost } from '@/shared/query-hooks'
import { Post } from '@/widgets/Post'
import PostSearch from './Search'

const Posts = () => {
  const t = useI18n()
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  const { data: allPostsData, isLoading: isLoadingAllPosts } = useGetAllPosts()
  const { data: searchPostsData, isLoading: isLoadingSearchPosts } =
    useGetSearchPost(debouncedSearchTerm)

  const posts = debouncedSearchTerm ? searchPostsData?.posts : allPostsData?.posts

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearchTerm(searchTerm), 300)

    return () => clearTimeout(timer)
  }, [searchTerm])

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  if (isLoadingAllPosts && !debouncedSearchTerm) {
    return <Spinner />
  }

  return (
    <section className="my-10 h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-black">{t('layout.posts')}</h1>

        <div className="w-96">
          <PostSearch value={searchTerm} onChange={handleSearch} />
        </div>
      </div>

      <Separator className="my-4" />

      {isLoadingSearchPosts && debouncedSearchTerm ? (
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
            {debouncedSearchTerm ? t('searchNotFound') : t('notFoundUsers')}
          </p>
        </div>
      )}
    </section>
  )
}

Posts.displayName = 'Posts'
export default Posts
