'use client'

import { PropsWithChildren } from 'react'
import { I18nProviderClient, useCurrentLocale } from '@/locales/client'
import { Header } from './Header'

export const Layout = ({ children }: PropsWithChildren) => {
  const locale = useCurrentLocale()

  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <I18nProviderClient locale={locale}>
        <Header />
      </I18nProviderClient>

      <div className="container relative">{children}</div>
    </main>
  )
}
