import { getMetadata } from '@/helpers/utils'
import { getI18n } from '@/locales/server'
import CreatePost from '@/modules/CreatePost'

export async function generateMetadata() {
  const t = await getI18n()

  return getMetadata(t('createPost'))
}

export default function CreatePostPage() {
  return <CreatePost />
}
