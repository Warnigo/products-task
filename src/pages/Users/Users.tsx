'use client'

import { Spinner } from '@/components'
import { Separator } from '@/components/ui'
import { useI18n } from '@/locales/client'
import { useGetUsers } from '@/shared/query-hooks'

const Users = () => {
  const t = useI18n()
  const { data, isLoading } = useGetUsers()

  const users = data?.users

  if (!users?.length) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-4xl font-black text-primary/50">{t('notFoundUsers')}</p>
      </div>
    )
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <section className="my-10 h-full">
      <div>
        <h1 className="text-4xl font-black">{t('layout.users')}</h1>
      </div>

      <Separator className="my-4" />

      {/* <div>{users.map((item) => {})}</div> */}
    </section>
  )
}

Users.displayName = 'Users'
export default Users
