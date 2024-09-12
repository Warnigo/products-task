import Cookies from 'js-cookie'
import { Cookies as CookieConstants } from '@/constants'
import { UserCredentials } from '@/types'

export const setUserCredentialsTokens = async (authResponse: UserCredentials) => {
  const userCredentials = {
    token: authResponse.token,
    refreshToken: authResponse.refreshToken,
    id: authResponse.id,
  }

  Cookies.set(CookieConstants.User, JSON.stringify(userCredentials), {
    expires: 1,
    secure: true,
    sameSite: 'Strict',
  })
}

export const logout = async () => {
  Cookies.remove(CookieConstants.User)
}
