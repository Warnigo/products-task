import { getMetadata } from '@/helpers/utils'
import { getI18n } from '@/locales/server'
import TodoDetail from '@/pages/TodoDetail'

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata() {
  const t = await getI18n()

  return getMetadata(t('todo.title'))
}

export default function TodoId({ params }: Props) {
  return <TodoDetail todoId={params.id} />
}
