import { setUserCredentialsTokens } from '@/helpers/actions'
import { LoginParams, UserCredentials } from '@/types'
import { axiosInstance } from '../axios-instance'
import { endpoints } from '../endpoints'

export const postLogin = async (credentials: LoginParams): Promise<UserCredentials> => {
  try {
    const url = `${endpoints.auth}${endpoints.login}`
    const response = await axiosInstance.post<UserCredentials>(url, credentials)

    await setUserCredentialsTokens(response)

    return response
  } catch (error) {
    console.error('Login failed:', error)
    throw error
  }
}
