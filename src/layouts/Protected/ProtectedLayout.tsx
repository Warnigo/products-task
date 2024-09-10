'use client'

import { PropsWithChildren } from 'react'
import { I18nProviderClient, useCurrentLocale } from '@/locales/client'
import { Header } from './Header'

export const ProtectedLayout = ({ children }: PropsWithChildren) => {
  const locale = useCurrentLocale()

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <I18nProviderClient locale={locale}>
        <Header />
      </I18nProviderClient>

      <main className="container relative mt-16">{children}</main>
    </div>
  )
}
