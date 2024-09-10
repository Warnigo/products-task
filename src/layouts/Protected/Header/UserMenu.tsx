import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Spinner } from '@/components'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui'
import { getInitials } from '@/helpers/utils'
import { useGetUser } from '@/shared/query-hooks'

export const UserMenu = () => {
  const { data, isLoading } = useGetUser()

  if (!isLoading || !data) {
    return <Spinner />
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="flex cursor-pointer items-center justify-center rounded-full border-2">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="user"
            className="size-8 rounded-full"
          />
          <AvatarFallback>{getInitials('local')}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>
          <p>{data.firstName}</p>
        </DropdownMenuItem>
        <p>first name usernmae</p>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
