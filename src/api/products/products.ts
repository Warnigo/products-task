import { Products, ProductsResponse } from '@/types'
import { axiosInstance } from '../axios-instance'
import { endpoints } from '../endpoints'

const handleError = (error: unknown) => {
  console.error(error)
  throw error
}

export const getProducts = async (): Promise<ProductsResponse<Products[]>> => {
  try {
    const response = await axiosInstance.get<ProductsResponse<Products[]>>(endpoints.products, {
      useAuth: false,
    })

    return response
  } catch (error) {
    return handleError(error)
  }
}

export const getProductSingle = async (productId: string): Promise<Products> => {
  try {
    const url = endpoints.productSingle.replace(':id', productId)
    const response = await axiosInstance.get<Products>(url, {
      useAuth: false,
    })

    return response
  } catch (error) {
    return handleError(error)
  }
}

export const getProductSearch = async (
  search: string,
  category: string,
): Promise<ProductsResponse<Products[]>> => {
  try {
    let url = endpoints.productSearch.replace(':name', search)

    if (category) {
      url += `?category=${category}`
    }

    const response = await axiosInstance.get<ProductsResponse<Products[]>>(url, {
      useAuth: false,
    })

    return response
  } catch (error) {
    return handleError(error)
  }
}

export const getProductCategoryList = async (): Promise<string[]> => {
  try {
    const response = await axiosInstance.get<string[]>(endpoints.productCategoryList, {
      useAuth: false,
    })

    return response
  } catch (error) {
    return handleError(error)
  }
}

export const getProductCategory = async (
  category: string,
): Promise<ProductsResponse<Products[]>> => {
  try {
    const url = endpoints.productCategoryName.replace(':name', category)
    const response = await axiosInstance.get<ProductsResponse<Products[]>>(url, {
      useAuth: false,
    })

    return response
  } catch (error) {
    return handleError(error)
  }
}
