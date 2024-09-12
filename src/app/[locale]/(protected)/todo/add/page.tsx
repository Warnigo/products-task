import { getMetadata } from '@/helpers/utils'
import { getI18n } from '@/locales/server'
import CreateTodo from '@/modules/CreateTodo'

export async function generateMetadata() {
  const t = await getI18n()

  return getMetadata(t('todo.create'))
}

export default function CreateTodoPage() {
  return <CreateTodo />
}
