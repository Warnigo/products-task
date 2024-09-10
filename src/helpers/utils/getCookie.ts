'use server'

import { cookies } from 'next/headers'
import { Cookies } from '@/constants'
import { UserCredentials } from '@/types'

export async function getCookies(): Promise<UserCredentials | null> {
  const cookieStore = cookies()
  const user = cookieStore.get(Cookies.User)?.value

  return user ? (JSON.parse(user) as UserCredentials) : null
}
