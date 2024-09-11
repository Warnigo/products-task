import { getMetadata } from '@/helpers/utils'
import { getI18n } from '@/locales/server'
import { Posts } from '@/pages/Posts'

export async function generateMetadata() {
  const t = await getI18n()

  return getMetadata(t('layout.posts'))
}

export default function PostsPage() {
  return <Posts />
}
