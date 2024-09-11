import { getMetadata } from '@/helpers/utils'
import { getI18n } from '@/locales/server'
import { Users } from '@/pages/Users'

export async function generateMetadata() {
  const t = await getI18n()

  return getMetadata(t('layout.users'))
}

export default function UsersPage() {
  return <Users />
}
