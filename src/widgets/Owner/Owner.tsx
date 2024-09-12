import { FC } from 'react'
import Link from 'next/link'
import { Spinner } from '@/components'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'
import { ROUTES } from '@/constants'
import { getInitials } from '@/helpers/utils'
import { useGetUserSingle } from '@/shared/query-hooks'

interface Props {
  userId: number
}

export const Owner: FC<Props> = ({ userId }) => {
  const { data, isLoading } = useGetUserSingle(userId)

  if (isLoading || !data) {
    return <Spinner />
  }

  return (
    <div className="flex flex-row items-center justify-start gap-3">
      <Link href={ROUTES.usersSingle.replace(':id', String(data.id))}>
        <Avatar className="size-12 rounded-full border-2">
          <AvatarImage src={data.image} alt={data.firstName} className="rounded-full" />
          <AvatarFallback>{getInitials(`${data.firstName} ${data.lastName}`)}</AvatarFallback>
        </Avatar>
      </Link>

      <div>
        <p className="font-semibold">{`${data.firstName} ${data.lastName}`}</p>
        <p className="text-sm text-primary/70">{`${data.address.city}, ${data.address.country}`}</p>
      </div>
    </div>
  )
}

Owner.displayName = 'Owner'
