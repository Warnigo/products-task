'use client'

import { ShoppingBag } from 'lucide-react'
import { AnimateButton, Breadcrumb, Spinner } from '@/components'
import { Separator } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useI18n } from '@/locales/client'
import { useGetProductSingle } from '@/shared/query-hooks'
import { Product } from '@/widgets/Product'

type Props = {
  productId: string
}

const ProductDetail = ({ productId }: Props) => {
  const t = useI18n()
  const { data, isLoading } = useGetProductSingle(productId)

  if (isLoading || !data) {
    return <Spinner />
  }

  return (
    <section className="my-10 flex flex-col gap-4">
      <div>
        <Breadcrumb title={data.title} back={t('layout.products')} backLink={ROUTES.products} />

        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-black">{data.title}</h1>

          <div>
            <AnimateButton roleIcon={<ShoppingBag className="size-5" />}>
              {t('shopNow')}
            </AnimateButton>
          </div>
        </div>
      </div>

      <Separator />

      <Product data={data} hideButton />
    </section>
  )
}

ProductDetail.displayName = 'ProductDetail'
export default ProductDetail
