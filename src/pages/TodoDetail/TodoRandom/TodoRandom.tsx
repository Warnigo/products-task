import { Spinner } from '@/components'
import { useI18n } from '@/locales/client'
import { useGetTodoRandom } from '@/shared/query-hooks'
import { TodoCard } from '@/widgets/TodoCard'

const TodoRandom = () => {
  const t = useI18n()
  const { data, isLoading } = useGetTodoRandom()

  if (isLoading || !data) {
    return <Spinner />
  }

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-black">{t('todo.other')}</h3>

      <div className="grid grid-cols-2 gap-3">
        {data.map((item) => (
          <TodoCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}

TodoRandom.displayName = 'TodoRandom'
export default TodoRandom
