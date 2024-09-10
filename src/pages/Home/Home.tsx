'use client'

import Link from 'next/link'
import { CirclePlus } from 'lucide-react'
import { AnimateButton } from '@/components'
import { Separator } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useI18n } from '@/locales/client'
import { Todos } from '@/widgets/Todos'

const Home = () => {
  const t = useI18n()

  return (
    <div className="py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-black">{t('layout.todos')}</h1>

        <div className="flex items-center">
          <Link href={ROUTES.createTodo}>
            <AnimateButton roleIcon={<CirclePlus />}>{t('todo.create')}</AnimateButton>
          </Link>
        </div>
      </div>

      <Separator className="my-4" />

      <Todos />
    </div>
  )
}

Home.displayName = 'Home'
export default Home
