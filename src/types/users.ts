export enum UserRole {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  USER = 'user',
}

export interface Address {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  coordinates: {
    lat: number
    lng: number
  }
  country: string
}

export interface Hair {
  color: string
  type: string
}

export interface Bank {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

export interface Company {
  department: string
  name: string
  title: string
  address: Address
}

export interface Crypto {
  coin: string
  wallet: string
  network: string
}

export interface Users {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: 'female' | 'male' | 'other'
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: 'O-' | 'O+' | 'A-' | 'A+' | 'B-' | 'B+' | 'AB-' | 'AB+'
  height: number
  weight: number
  eyeColor: string
  hair: Hair
  ip: string
  address: Address
  macAddress: string
  university: string
  bank: Bank
  company: Company
  ein: string
  ssn: string
  userAgent: string
  crypto: Crypto
  role: UserRole | string
}

export interface UsersResponse<T> {
  users: T
  total: number
  skip: number
  limit: number
}
