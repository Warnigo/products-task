'use client'

import { Spinner } from '@/components'
import { useI18n } from '@/locales/client'
import { useGetUserCarts } from '@/shared/query-hooks'
import { getUserCredentials } from '@/stores/app'
import { Cart } from '@/widgets/Cart'

const MyCarts = () => {
  const t = useI18n()
  const userCredentials = getUserCredentials()
  const id = userCredentials?.id
  const { data, isLoading } = useGetUserCarts(Number(id))

  const todos = data?.carts

  if (!todos || isLoading) {
    return <Spinner />
  }

  if (!todos.length) {
    return (
      <div className="mt-5 flex items-center justify-center">
        <p className="text-center text-xl font-bold text-primary/50">{t('emptyCarts')}</p>
      </div>
    )
  }

  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 gap-3">
        {todos.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}

MyCarts.displayName = 'MyCarts'
export default MyCarts
