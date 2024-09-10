'use client'

import { PropsWithChildren, useEffect } from 'react'
import { Spinner } from '@/components'
import { useAppActions, useAppState } from '@/stores/app'
import { UserCredentials } from '@/types'

interface Props extends PropsWithChildren {
  userCredentials: UserCredentials | null
}

export const AppInitializer = ({ children, userCredentials }: Props) => {
  const { isVisibleAppSpinner, userCredentials: appUserCredentials } = useAppState()
  const { setUserCredentials, setIsVisibleAppSpinner } = useAppActions()

  useEffect(() => {
    if (userCredentials && userCredentials.token && !appUserCredentials) {
      setUserCredentials(userCredentials)
    }

    if (userCredentials?.token || appUserCredentials) {
      setIsVisibleAppSpinner(false)
    }
  }, [userCredentials, appUserCredentials, setUserCredentials, setIsVisibleAppSpinner])

  if (isVisibleAppSpinner) {
    return <Spinner />
  }

  return children
}
