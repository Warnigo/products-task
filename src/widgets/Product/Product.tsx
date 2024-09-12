'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Package, ShoppingCart, Star } from 'lucide-react'
import { AnimateButton } from '@/components'
import { Badge, Card, CardContent, CardHeader, Separator } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useI18n } from '@/locales/client'
import { Products } from '@/types'

type Props = {
  data: Products
  hideButton?: boolean
}

const Product = ({ data, hideButton = false }: Props) => {
  const t = useI18n()

  const discountedPrice = data.price * (1 - data.discountPercentage / 100)

  return (
    <Card className="flex h-full flex-col gap-3 rounded-lg bg-background p-5">
      <CardHeader className="p-0">
        <div className="relative mb-4 h-48 w-full">
          <Image
            src={data.thumbnail}
            alt={data.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          {data.discountPercentage > 0 && (
            <Badge className="absolute right-2 top-2 bg-destructive text-primary">
              {`-${data.discountPercentage.toFixed(0)}%`}
            </Badge>
          )}
        </div>
        <h3 className="mb-2 text-xl font-bold">{data.title}</h3>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <Star className="mr-1 size-5 text-yellow-400" />
            <span>{data.rating.toFixed(1)}</span>
          </div>
          <Badge variant="outline">{data.category}</Badge>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="grow p-0">
        <p className="mb-4 text-sm text-primary/60">{data.description}</p>

        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">${discountedPrice.toFixed(2)}</span>
            {data.discountPercentage > 0 && (
              <span className="ml-2 text-sm text-primary/50 line-through">
                ${data.price.toFixed(2)}
              </span>
            )}
          </div>
          <Badge variant="secondary" className="flex items-center rounded-full">
            <Package className="mr-1 size-4" />
            {data.stock > 0 ? t('inStock') : t('outOfStock')}
          </Badge>
        </div>

        <div className="flex justify-between gap-2">
          <div>
            <AnimateButton roleIcon={<ShoppingCart className="size-5" />}>
              {t('shopNow')}
            </AnimateButton>
          </div>

          {!hideButton && (
            <Link href={ROUTES.productsSingle.replace(':id', String(data.id))}>
              <AnimateButton roleIcon={<ChevronRight className="size-5" />}>
                {t('seeMore')}
              </AnimateButton>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

Product.displayName = 'Product'
export default Product
