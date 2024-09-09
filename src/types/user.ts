import { Tokens } from './token'

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export type UserInfo = {
  id: number
  userName: string
  email: string
  firstName: string
  lastName: string
  gender: Gender
  image: string
}

export type UserCredentials = Tokens & UserInfo
