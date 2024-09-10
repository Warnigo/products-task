import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { CircleUser } from 'lucide-react'
import { Spinner } from '@/components'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Separator,
} from '@/components/ui'
import { ROUTES } from '@/constants'
import { getInitials } from '@/helpers/utils'
import { useI18n } from '@/locales/client'
import { useGetUser } from '@/shared/query-hooks'

export const UserMenu = () => {
  const { data, isLoading } = useGetUser()
  const t = useI18n()

  if (isLoading || !data) {
    return <Spinner />
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="flex cursor-pointer items-center justify-center rounded-full border-2">
          <AvatarImage src={data.image} alt="user" className="size-8 rounded-full" />
          <AvatarFallback>{getInitials('local')}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <div className="flex flex-col px-3">
          <p className="font-bold">
            {data.firstName} {data.lastName}
          </p>
          <span className="text-sm">{data.email}</span>
        </div>
        <Separator className="my-2" />

        <DropdownMenuItem className="flex items-center gap-2" asChild>
          <Link href={ROUTES.profile}>
            <CircleUser className="size-5" />
            <span className="">{t('profile')}</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
