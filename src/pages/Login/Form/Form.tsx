'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { LogIn } from 'lucide-react'
import * as z from 'zod'
import { AnimateButton } from '@/components'
import { Separator } from '@/components/ui'
import { DEFAULT_PASSWORD, DEFAULT_USERNAME, ROUTES } from '@/constants'
import { useI18n } from '@/locales/client'
import { passwordSchema, usernameSchema } from '@/schemas'
import { FormControlField, FormProvider, PasswordTextField, TextField } from '@/shared/form-control'
import { FadeInUp } from '@/shared/motion'
import { usePostLogin } from '@/shared/query-hooks'
import { FormValues, LoginParams } from '@/types'

const formSchema = z
  .object({
    username: usernameSchema,
    password: passwordSchema,
  })
  .required({
    username: true,
    password: true,
  })

const TIMEOUT = 1440

const Form = () => {
  const t = useI18n()
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  const { mutate: login, isPending } = usePostLogin()

  const methods = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: DEFAULT_USERNAME,
      password: DEFAULT_PASSWORD,
    },
  })

  const handleSubmit = (formData: FormValues) => {
    const requestParams: LoginParams = {
      username: formData.username,
      password: formData.password,
      expiresInMins: TIMEOUT,
    }

    login(requestParams, {
      onSuccess: () => {
        router.push(ROUTES.home)
      },
      onError: (error) => {
        setError(t('login.error'))
        console.error('Login error:', error)
      },
    })
  }

  return (
    <FadeInUp className="flex items-center justify-center">
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit}
        className="flex w-full max-w-[400px] flex-col items-center gap-6 rounded-lg border bg-background p-4 shadow-xl"
      >
        <h2 className="text-3xl font-black">{t('login.title')}</h2>

        {error && <div className="w-full text-center text-sm text-destructive">{error}</div>}

        <FormControlField label={t('username')}>
          <TextField placeholder="username" name="username" defaultValue={DEFAULT_USERNAME} />
        </FormControlField>

        <FormControlField label={t('password')}>
          <PasswordTextField name="password" defaultValue={DEFAULT_PASSWORD} />
        </FormControlField>

        <div className="w-full text-right">
          <Link href={ROUTES.forgotPassword} className="text-sm hover:underline">
            {t('forgotPassword.title')}
          </Link>
        </div>

        <AnimateButton
          role={t('enter')}
          roleIcon={<LogIn className="size-4" />}
          className="w-full"
          disabled={isPending}
        >
          {isPending ? t('loading') : t('login.title')}
        </AnimateButton>

        <Separator className="my-4" />

        <div className="w-full">
          <p className="flex w-full items-center justify-center gap-2 text-sm text-primary/60">
            <span>{t('login.noAccount')}</span>

            <Link href={ROUTES.login} className="text-primary hover:underline">
              {t('register.title')}
            </Link>
          </p>
        </div>
      </FormProvider>
    </FadeInUp>
  )
}

Form.displayName = 'Form'
export default Form
