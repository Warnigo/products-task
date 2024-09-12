'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui'
import { useI18n } from '@/locales/client'
import MyCarts from './MyCarts'
import MyPosts from './MyPosts'
import MyTodos from './MyTodos'

type TabValue = 'posts' | 'todos' | 'carts'

const ProfileTab = () => {
  const t = useI18n()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [currentTab, setCurrentTab] = useState<TabValue>('posts')

  useEffect(() => {
    if (searchParams) {
      const tab = searchParams.get('tab') as TabValue

      if (tab && ['posts', 'todos', 'carts'].includes(tab)) {
        setCurrentTab(tab)
      }
    }
  }, [searchParams])

  const handleTabChange = (value: string) => {
    setCurrentTab(value as TabValue)

    if (searchParams) {
      const newParams = new URLSearchParams(searchParams.toString())

      newParams.set('tab', value)
      router.push(`${pathname}?${newParams.toString()}`, { scroll: false })
    }
  }

  return (
    <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full">
      <div className="flex items-center justify-center">
        <TabsList>
          <TabsTrigger value="posts">{t('layout.posts')}</TabsTrigger>
          <TabsTrigger value="todos">{t('layout.todos')}</TabsTrigger>
          <TabsTrigger value="carts">{t('carts')}</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="posts">
        <MyPosts />
      </TabsContent>

      <TabsContent value="todos">
        <MyTodos />
      </TabsContent>

      <TabsContent value="carts">
        <MyCarts />
      </TabsContent>
    </Tabs>
  )
}

ProfileTab.displayName = 'ProfileTab'
export default ProfileTab
