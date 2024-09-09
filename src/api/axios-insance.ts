'use client'

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { APP_LINK } from '@/constants'
import { clearApp, getUserCredentials } from '@/stores/app'
import { Methods } from '@/types'

const TIME_OUT = 30_000

class AxiosService {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: APP_LINK,
      timeout: TIME_OUT,
    })

    this.instance.interceptors.request.use(this.handleRequest)
    this.instance.interceptors.response.use(this.handleResponse, this.handleResponseError)
  }

  private handleRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const userCredentials = getUserCredentials()
    const accessToken = userCredentials?.accessToken

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  }

  private handleResponse = (response: AxiosResponse) => response

  private handleResponseError = async (error: AxiosError) => {
    if (error.response?.status === 401 || error.response?.status === 409) {
      console.error(`Error ${error.response.status}`)
      try {
        window.localStorage.clear()
        clearApp()
        window.location.reload()
      } catch (logoutError) {
        console.error('Error while trying to logout:', logoutError)
      }

      return
    }
    throw error
  }

  public async request<T = any>(config: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.request<T>(config)

    return response.data
  }

  public async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: Methods.GET, url })
  }

  public async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: Methods.POST, url, data })
  }

  public async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: Methods.PUT, url, data })
  }

  public async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: Methods.DELETE, url })
  }

  public async patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: Methods.PATCH, url, data })
  }
}

export const axiosInstance = new AxiosService()
