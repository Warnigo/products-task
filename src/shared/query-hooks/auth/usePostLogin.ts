import { useMutation } from '@tanstack/react-query'
import { postLogin } from '@/api'
import { LoginParams } from '@/types'
import { queryKeys } from '../query-keys'

export const usePostLogin = () =>
  useMutation({
    mutationKey: [queryKeys.login],
    mutationFn: (params: LoginParams) => postLogin(params),
  })
