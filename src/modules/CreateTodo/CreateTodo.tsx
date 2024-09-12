'use client'

import { useId, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { CircleCheck, CirclePlus } from 'lucide-react'
import * as z from 'zod'
import { AnimateButton, Breadcrumb } from '@/components'
import { Card, Checkbox } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useI18n } from '@/locales/client'
import { todoSchema } from '@/schemas'
import { FormControlField, FormProvider, TextField } from '@/shared/form-control'
import { usePostAddTodo } from '@/shared/query-hooks'
import { getUserCredentials } from '@/stores/app'

type FormValues = {
  todo: string
}

const formSchema = z.object({
  todo: todoSchema,
})

const CreateTodo = () => {
  const t = useI18n()
  const { isPending, mutate } = usePostAddTodo()
  const [completed, setCompleted] = useState<boolean>(true)
  const [finish, setFinish] = useState<boolean>(false)
  const id = useId()
  const router = useRouter()

  const methods = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(formSchema),
    defaultValues: {
      todo: '',
    },
  })

  const handleSubmit = (formData: FormValues) => {
    const userCredentials = getUserCredentials()
    const userId = userCredentials?.id

    try {
      const requestParams = {
        todo: formData.todo,
        completed,
        userId: Number(userId),
      }

      setFinish(true)
      mutate(requestParams)
      router.push(ROUTES.home)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  const handleCompletedChange = (checked: boolean) => {
    setCompleted(checked)
  }

  return (
    <section className="my-10 flex flex-col gap-5">
      <Breadcrumb title={t('todo.create')} />

      <h1 className="text-4xl font-black">{t('todo.create')}</h1>

      <Card className="rounded-lg border bg-background p-5">
        <FormProvider
          methods={methods}
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center gap-5"
        >
          <FormControlField label={t('todo.title')}>
            <TextField placeholder={t('todo.about')} name="todo" />
          </FormControlField>

          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id={id} checked={completed} onCheckedChange={handleCompletedChange} />
              <label htmlFor={id} className="cursor-pointer">
                {t('completed')}
              </label>
            </div>

            <div>
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
          </div>
        </FormProvider>
      </Card>
    </section>
  )
}

CreateTodo.displayName = 'CreateTodo'
export default CreateTodo
