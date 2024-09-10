import { UsersResponse } from './users'

export interface CartsResponse<T> extends Omit<UsersResponse<T>, 'users'> {
  carts: T
}

export interface Products {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedTotal: number
  thumbnail: string
}

export interface Cart {
  id: number
  products: Products[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}
