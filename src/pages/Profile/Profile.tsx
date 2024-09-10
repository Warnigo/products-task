'use client'

import { Spinner } from '@/components'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'
import { getInitials } from '@/helpers/utils'
import { useI18n } from '@/locales/client'
import { useGetUser } from '@/shared/query-hooks'

const Profile = () => {
  const t = useI18n()
  const { data, isLoading } = useGetUser()

  if (isLoading || !data) {
    return <Spinner />
  }

  return (
    <div className="flex h-full max-h-full items-center justify-center py-10">
      <div className="flex items-center justify-start gap-8 rounded-lg border p-10">
        <Avatar className="size-40 rounded-full border-2">
          <AvatarImage
            src={data.image}
            alt={data.firstName}
            className="size-40 rounded-full object-cover"
          />
          <AvatarFallback>{getInitials(`${data.firstName} ${data.lastName}`)}</AvatarFallback>
        </Avatar>

        <div className="grid grid-cols-3 gap-10">
          <div>
            <p className="text-primary/60">{t('name')}</p>
            <h6 className="text-lg font-bold">{`${data.firstName} ${data.lastName}`}</h6>
          </div>

          <div>
            <p className="text-primary/60">{t('email')}</p>
            <h6 className="text-lg font-bold">{data.email}</h6>
          </div>

          <div>
            <p className="text-primary/60">{t('phoneNumber')}</p>
            <h6 className="text-lg font-bold">{data.phone}</h6>
          </div>

          <div>
            <p className="text-primary/60">{t('garden')}</p>
            <h6 className="text-lg font-bold">{data.gender}</h6>
          </div>

          <div>
            <p className="text-primary/60">{t('birthday')}</p>
            <h6 className="text-lg font-bold">{data.birthDate}</h6>
          </div>

          <div>
            <p className="text-primary/60">{t('address')}</p>
            <h6 className="text-lg font-bold">{`${data.address.city}, ${data.address.country}`}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

Profile.displayName = 'Profile'
export default Profile
