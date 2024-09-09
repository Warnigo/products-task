import { getMetadata } from '@/helpers/utils'
import { getI18n } from '@/locales/server'
import { Login } from '@/pages/Login'

export async function generateMetadata() {
  const t = await getI18n()

  return getMetadata(t('login.title'))
}
export default function LoginPage() {
  return <Login />
}
