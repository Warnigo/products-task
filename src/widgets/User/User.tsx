'use client'

import { FC } from 'react'
import Link from 'next/link'
import { Spinner } from '@/components'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'
import { ROUTES } from '@/constants'
import { getInitials } from '@/helpers/utils'
import { useGetUserSingle } from '@/shared/query-hooks'

interface Props {
  userId: number
  onClick?: () => void
}

const User: FC<Props> = ({ userId, onClick }) => {
  const { data: userData, isLoading, refetch } = useGetUserSingle(userId)

  if (isLoading) {
    return <Spinner />
  }

  if (!userData) {
    return (
      <p>
        User data not available. <button onClick={() => refetch()}>Try again</button>
      </p>
    )
  }

  return (
    <div className="flex flex-row items-center justify-start gap-3" onClick={onClick}>
      <Link href={ROUTES.usersSingle.replace(':id', String(userData.id))}>
        <Avatar className="size-12 rounded-full border-2">
          <AvatarImage src={userData.image} alt={userData.firstName} className="rounded-full" />
          <AvatarFallback>
            {getInitials(`${userData.firstName} ${userData.lastName}`)}
          </AvatarFallback>
        </Avatar>
      </Link>

      <div>
        <p className="font-semibold">{`${userData.firstName} ${userData.lastName}`}</p>
        <p className="text-sm text-primary/70">
          {`${userData.address.city}, ${userData.address.country}`}
        </p>
      </div>
    </div>
  )
}

User.displayName = 'User'
export default User
