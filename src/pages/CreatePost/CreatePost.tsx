'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { CircleCheck, CirclePlus } from 'lucide-react'
import * as z from 'zod'
import { AnimateButton, Breadcrumb } from '@/components'
import { Card } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useI18n } from '@/locales/client'
import { postSchema } from '@/schemas'
import { FormControlField, FormProvider, TextField } from '@/shared/form-control'
import { usePostAdd } from '@/shared/query-hooks'
import { getUserCredentials } from '@/stores/app'

type FormValues = {
  title: string
  body: string
}

const formSchema = z.object({
  title: postSchema,
  body: postSchema,
})

const CreatePost = () => {
  const t = useI18n()
  const { isPending, mutate } = usePostAdd()
  const [finish, setFinish] = useState<boolean>(false)
  const router = useRouter()

  const methods = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      body: '',
    },
  })

  const handleSubmit = (formData: FormValues) => {
    const userCredentials = getUserCredentials()
    const userId = userCredentials?.id

    try {
      const requestParams = {
        body: formData.body,
        title: formData.title,
        userId: Number(userId),
      }

      setFinish(true)
      mutate(requestParams)
      router.push(ROUTES.posts)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  return (
    <section className="my-10 flex flex-col gap-5">
      <Breadcrumb title={t('createPost')} back={t('layout.posts')} backLink={ROUTES.posts} />

      <h1 className="text-4xl font-black">{t('todo.create')}</h1>

      <Card className="rounded-lg border bg-background p-5">
        <FormProvider
          methods={methods}
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center gap-5"
        >
          <FormControlField label={t('title')}>
            <TextField placeholder={t('postTitle')} name="title" />
          </FormControlField>

          <FormControlField label={t('about')}>
            <TextField placeholder={t('postAbout')} name="body" />
          </FormControlField>

          <div className="flex w-full items-center justify-end">
            <AnimateButton
              roleIcon={
                finish ? <CircleCheck className="size-5" /> : <CirclePlus className="size-5" />
              }
              disabled={isPending}
              type="submit"
            >
              {finish ? t('done') : t('create')}
            </AnimateButton>
          </div>
        </FormProvider>
      </Card>
    </section>
  )
}

CreatePost.displayName = 'CreatePost'
export default CreatePost
