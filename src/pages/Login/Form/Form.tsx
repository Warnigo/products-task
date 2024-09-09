'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LogIn } from 'lucide-react'
import * as z from 'zod'
import { AnimateButton } from '@/components'
import { DEFAULT_PASSWORD, DEFAULT_USERNAME } from '@/constants'
import { useI18n } from '@/locales/client'
import { passwordSchema, usernameSchema } from '@/schemas'
import { FormControlField, FormProvider, PasswordTextField, TextField } from '@/shared/form-control'
import { FormValues } from '@/types'

const formSchema = z
  .object({
    username: usernameSchema,
    password: passwordSchema,
  })
  .required({
    username: true,
    password: true,
  })

const Form = () => {
  const t = useI18n()

  const methods = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: DEFAULT_USERNAME,
      password: DEFAULT_PASSWORD,
    },
  })

  const handleSubmit = (formData: FormValues) => {
    const requestParams = {
      username: formData.username,
      password: formData.password,
    }

    console.log(requestParams)
  }

  return (
    <FormProvider
      methods={methods}
      onSubmit={handleSubmit}
      className="flex w-full max-w-[600px] flex-col items-center gap-5 rounded-lg border bg-background p-5 shadow-xl"
    >
      <h2 className="text-4xl font-black">{t('login.title')}</h2>

      <FormControlField label={t('username')}>
        <TextField placeholder="username" name="username" defaultValue={DEFAULT_USERNAME} />
      </FormControlField>

      <FormControlField label={t('password')}>
        <PasswordTextField name="password" defaultValue={DEFAULT_PASSWORD} />
      </FormControlField>

      <AnimateButton role={t('enter')} roleIcon={<LogIn className="size-4" />} className="w-full">
        {t('login.title')}
      </AnimateButton>
    </FormProvider>
  )
}

Form.displayName = 'Form'
export default Form
