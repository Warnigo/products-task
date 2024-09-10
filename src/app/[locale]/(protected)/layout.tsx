import { PropsWithChildren } from 'react'
import { ProtectedLayout } from '@/layouts'
import { I18nProviderClient } from '@/locales/client'

interface Props extends PropsWithChildren {
  params: {
    locale: string
  }
}

export default function Layout({ children, params }: Props) {
  return (
    <ProtectedLayout>
      <I18nProviderClient locale={params.locale}>{children}</I18nProviderClient>
    </ProtectedLayout>
  )
}
