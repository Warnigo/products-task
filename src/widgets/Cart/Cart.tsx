'use client'

import { FC } from 'react'
import { Card, CardHeader } from '@/components/ui'
import { useI18n } from '@/locales/client'
import { Cart as CartType } from '@/types'

type Props = {
  data: CartType | null
}

const Cart: FC<Props> = ({ data }) => {
  const t = useI18n()

  if (!data || (data.total === 0 && data.discountedTotal === 0)) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-center text-xl font-bold">{t('emptyCarts')}</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xl font-bold">
        <p>{`${t('total')}: ${data.total}`}</p>
        <p>{`${t('discountedTotal')}: ${data.discountedTotal}`}</p>
      </div>

      <Card className="rounded-lg border bg-background">
        <CardHeader />
      </Card>
    </div>
  )
}

Cart.displayName = 'Cart'
export default Cart
