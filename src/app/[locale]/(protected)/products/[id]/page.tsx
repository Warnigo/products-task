import { getMetadata } from '@/helpers/utils'
import { getI18n } from '@/locales/server'
import ProductDetail from '@/pages/ProductDetail'

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata() {
  const t = await getI18n()

  return getMetadata(t('product'))
}

export default function ProductDetailPage({ params }: Props) {
  return <ProductDetail productId={params.id} />
}
