'use server'

import { cookies } from 'next/headers'
import { Cookies, IS_PROD, ROUTES } from '@/constants'
import { UserCredentials } from '@/types'

export const setUserCredentialsTokens = async (authResponse: UserCredentials) => {
  const userCredentials = {
    token: authResponse.token,
    refreshToken: authResponse.refreshToken,
    id: authResponse.id,
  }

  cookies().set(Cookies.User, JSON.stringify(userCredentials), {
    httpOnly: true,
    secure: IS_PROD,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24,
    path: ROUTES.home,
  })
}

export const logout = async () => {
  cookies().delete(Cookies.User)
}
