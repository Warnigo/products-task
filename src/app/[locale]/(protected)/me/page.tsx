import { getMetadata } from '@/helpers/utils'
import { getI18n } from '@/locales/server'
import Profile from '@/pages/Profile'

export async function generateMetadata() {
  const t = await getI18n()

  return getMetadata(t('profile'))
}

export default function ProfilePage() {
  return <Profile />
}
