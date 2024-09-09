export const IS_PROD = process.env.NODE_ENV === 'production'
export const IS_DEV = process.env.NODE_ENV === 'development'

export const APP_LINK = process.env.NEXT_PUBLIC_APP_FETCH || ''
export const DEFAULT_USERNAME = process.env.NEXT_PUBLIC_APP_DEFAULT_USERNAME || ''
export const DEFAULT_PASSWORD = process.env.NEXT_PUBLIC_APP_DEFAULT_PASSWORD || ''
