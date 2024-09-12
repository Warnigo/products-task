import { useQuery } from '@tanstack/react-query'
import {
  getProductCategory,
  getProductCategoryList,
  getProducts,
  getProductSearch,
  getProductSingle,
} from '@/api'
import { queryKeys } from '../query-keys'

const STALE_TIME = 60 * 60 * 1

export const useGetAllProducts = () =>
  useQuery({
    queryKey: [queryKeys.products],
    queryFn: getProducts,
    staleTime: STALE_TIME,
  })

export const useGetProductSingle = (productId: string) =>
  useQuery({
    queryKey: [queryKeys.productSingle(productId)],
    queryFn: () => getProductSingle(productId),
    enabled: !!productId,
    staleTime: STALE_TIME,
  })

export const useGetProductSearch = (search: string, category: string) =>
  useQuery({
    queryKey: [queryKeys.productSearch, search, category],
    queryFn: () => getProductSearch(search, category),
    enabled: !!search || !!category,
    staleTime: STALE_TIME,
  })

export const useGetAllProductCategory = () =>
  useQuery({
    queryKey: [queryKeys.productCategoryList],
    queryFn: getProductCategoryList,
    staleTime: STALE_TIME,
  })

export const useGetAllProductCategoryName = (category: string) =>
  useQuery({
    queryKey: [queryKeys.productCategoryName(category)],
    queryFn: () => getProductCategory(category),
    enabled: !!category,
    staleTime: STALE_TIME,
  })
