'use client'

import { FC, memo } from 'react'
import { Spinner } from '@/components'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'
import { getInitials } from '@/helpers/utils'
import { useGetUserSingle } from '@/shared/query-hooks'

interface Props {
  userId: number
  onClick: () => void
}

const User: FC<Props> = memo(({ userId, onClick }) => {
  const { data: userData, isLoading } = useGetUserSingle(userId)

  if (isLoading || !userData) {
    return <Spinner />
  }

  return (
    <div className="flex flex-row items-center justify-start gap-3">
      <Avatar onClick={onClick} className="size-12 rounded-full border-2">
        <AvatarImage src={userData.image} alt={userData.firstName} className="rounded-full" />
        <AvatarFallback>{getInitials(`${userData.firstName} ${userData.lastName}`)}</AvatarFallback>
      </Avatar>

      <div>
        <p className="font-semibold">{`${userData.firstName} ${userData.lastName}`}</p>
        <p className="text-sm text-primary/70">{`${userData.address.city}, ${userData.address.country}`}</p>
      </div>
    </div>
  )
})

User.displayName = 'User'
export default User
