'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Logo } from '@/components'
import { Button } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useI18n } from '@/locales/client'

const NotFound = () => {
  const t = useI18n()
  const route = useRouter()

  const handleBack = () => {
    route.back()
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <Logo className="size-20" />

        <div>
          <h1 className="text-5xl font-bold text-primary">{t('notFound.title')}</h1>
          <p className="font-semibold text-primary/80">{t('notFound.desc')}</p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button onClick={handleBack} className="flex h-9 gap-2">
            <ArrowLeft className="size-4" />
            <span>{t('notFound.goback')}</span>
          </Button>

          <Button asChild variant="outline" className="h-9 border-2">
            <Link href={ROUTES.home}>{t('notFound.backHome')}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

NotFound.displayName = 'Not found'
export default NotFound
