import { getMetadata } from '@/helpers/utils'
import { getI18n } from '@/locales/server'
import PostDetail from '@/modules/PostDetail'

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata() {
  const t = await getI18n()

  return getMetadata(t('post'))
}

export default function PostId({ params }: Props) {
  return <PostDetail postId={params.id} />
}
