export type FormValues = {
  username: string
  password: string
}

export interface LoginParams {
  username: string
  password: string
  expiresInMins: number
}
