import { PropsWithChildren } from 'react'
import { getCookies } from '@/helpers/utils'
import { ProtectedLayout } from '@/layouts'
import { I18nProviderClient } from '@/locales/client'
import { UserCredentials } from '@/types'
import { AppInitializer } from './AppInitializer'

interface Props extends PropsWithChildren {
  params: {
    locale: string
  }
}

export default async function Layout({ children, params }: Props) {
  let userCredentials: UserCredentials | null = null

  try {
    userCredentials = await getCookies()
  } catch (error) {
    console.error(error)
  }

  return (
    <ProtectedLayout>
      <AppInitializer userCredentials={userCredentials}>
        <I18nProviderClient locale={params.locale}>{children}</I18nProviderClient>
      </AppInitializer>
    </ProtectedLayout>
  )
}
