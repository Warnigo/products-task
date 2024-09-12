import { getMetadata } from '@/helpers/utils'
import { getI18n } from '@/locales/server'
import Products from '@/modules/Products'

export async function generateMetadata() {
  const t = await getI18n()

  return getMetadata(t('layout.products'))
}

export default function ProductsPage() {
  return <Products />
}
