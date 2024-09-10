import { UserCredentials } from '@/types'
import { axiosInstance } from '../axios-instance'
import { endpoints } from '../endpoints'

export const getUser = async (): Promise<UserCredentials> => {
  try {
    const response = await axiosInstance.get<UserCredentials>(endpoints.me)

    return response
  } catch (error) {
    console.error('Error fetching user data:', error)
    throw error
  }
}
