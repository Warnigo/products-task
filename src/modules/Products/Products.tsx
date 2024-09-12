'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, Spinner } from '@/components'
import { Separator } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useI18n } from '@/locales/client'
import {
  useGetAllProductCategoryName,
  useGetAllProducts,
  useGetProductSearch,
} from '@/shared/query-hooks'
import { Product } from '@/widgets/Product'
import Categories from './Categories'

const Products = () => {
  const t = useI18n()
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchQuery = searchParams?.get('q') ?? ''
  const [searchTerm, setSearchTerm] = useState(searchQuery)
  const [categoryValue, setCategoryValue] = useState<string>('')

  const { data: allProductData, isLoading: allProductLoading } = useGetAllProducts()
  const { data: productSearchData, isLoading: productSearchLoading } = useGetProductSearch(
    searchTerm,
    categoryValue,
  )
  const { data: categoryData, isLoading: isCategoryLoading } =
    useGetAllProductCategoryName(categoryValue)

  const products = searchTerm
    ? productSearchData?.products
    : categoryValue
      ? categoryData?.products
      : allProductData?.products

  const updateSearchParams = useCallback(
    (value: string) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString() ?? '')

      if (value) {
        newSearchParams.set('q', value)
      } else {
        newSearchParams.delete('q')
      }

      router.push(`${ROUTES.products}?${newSearchParams.toString()}`)
    },
    [router, searchParams],
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm !== searchQuery) {
        updateSearchParams(searchTerm)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm, searchQuery, updateSearchParams])

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  if (allProductLoading || isCategoryLoading) {
    return <Spinner />
  }

  return (
    <section className="my-10 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-black">{t('layout.products')}</h1>

        <div className="w-full max-w-96">
          <Search value={searchTerm} onChange={handleSearch} />
        </div>
      </div>
      <Separator />

      <Categories setCategoryValue={setCategoryValue} categoryValue={categoryValue} />

      <div>
        {categoryValue || searchTerm ? (
          productSearchLoading ? (
            <div className="my-10 flex items-center justify-center">
              <Spinner />
            </div>
          ) : products && products.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {products.map((item) => (
                <Product key={item.id} data={item} />
              ))}
            </div>
          ) : (
            <div className="mt-10 flex items-center justify-center">
              <p className="text-4xl font-black text-primary/50">{t('emptyCategory')}</p>
            </div>
          )
        ) : searchQuery && productSearchLoading ? (
          <div className="my-10 flex items-center justify-center">
            <Spinner />
          </div>
        ) : products && products.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {products.map((item) => (
              <Product key={item.id} data={item} />
            ))}
          </div>
        ) : (
          <div className="mt-10 flex items-center justify-center">
            <p className="text-4xl font-black text-primary/50">
              {searchQuery ? t('searchNotFound') : t('notFoundUsers')}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

Products.displayName = 'Products'
export default Products
