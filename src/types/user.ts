import { Tokens } from './token'

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

type UserAddress = {
  address: string
  city: string
  state: string
  country: string
}

export interface UserInfo {
  id: number
  userName: string
  email: string
  firstName: string
  lastName: string
  gender: Gender
  image: string
  age: number
  phone: number
  birthDate: number
  address: UserAddress
}

export type UserCredentials = Tokens & UserInfo
