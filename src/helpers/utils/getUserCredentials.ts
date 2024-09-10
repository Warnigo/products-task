import { NextRequest } from 'next/server'
import { Cookies } from '@/constants'
import { UserCredentials } from '@/types'

export function getUserCredentials(request: NextRequest): UserCredentials | null {
  const user = request.cookies.get(Cookies.User)?.value
  const userJson = user ? JSON.parse(user) : null

  if (!userJson || (userJson && !userJson.token)) {
    return null
  }

  return userJson
}
