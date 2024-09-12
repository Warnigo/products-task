import { getMetadata } from '@/helpers/utils'
import { getI18n } from '@/locales/server'
import { UserDetail } from '@/pages/UserDetail'

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata() {
  const t = await getI18n()

  return getMetadata(t('user'))
}

export default function UserId({ params }: Props) {
  return <UserDetail userId={params.id} />
}
