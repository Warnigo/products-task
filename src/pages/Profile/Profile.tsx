'use client'

import { Cake, Globe, Mail, MapPin, Phone, User } from 'lucide-react'
import { InfoItem, Spinner } from '@/components'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardHeader,
  Separator,
} from '@/components/ui'
import { getInitials } from '@/helpers/utils'
import { useI18n } from '@/locales/client'
import { useGetUser } from '@/shared/query-hooks'
import { ProfileTab } from './Tab'

const Profile = () => {
  const t = useI18n()
  const { data, isLoading } = useGetUser()

  if (isLoading || !data) {
    return <Spinner />
  }

  return (
    <div className="flex h-full flex-col gap-6 py-10">
      <h2 className="text-4xl font-black">{t('profile')}</h2>

      <Card className="col-span-full">
        <CardContent className="flex flex-col items-center gap-6 py-6 sm:flex-row sm:items-start">
          <Avatar className="size-40 rounded-full border-2">
            <AvatarImage
              src={data.image}
              alt={data.firstName}
              className="rounded-full object-cover"
            />
            <AvatarFallback>{getInitials(`${data.firstName} ${data.lastName}`)}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="mb-2 text-3xl font-black">{`${data.firstName} ${data.lastName}`}</h1>
            <p className="mb-4 text-lg text-primary/70">{`${data.address.city}, ${data.address.country}`}</p>
            <div className="flex flex-wrap gap-4">
              <InfoItem icon={<Mail className="size-5" />} label={t('email')} value={data.email} />
              <InfoItem
                icon={<Phone className="size-5" />}
                label={t('phoneNumber')}
                value={data.phone}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">{t('personalInformation')}</h2>
          </CardHeader>
          <CardContent className="space-y-2">
            <InfoItem icon={<User className="size-5" />} label={t('gender')} value={data.gender} />
            <InfoItem
              icon={<Cake className="size-5" />}
              label={t('birthday')}
              value={data.birthDate}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">{t('address')}</h2>
          </CardHeader>
          <CardContent className="space-y-2">
            <InfoItem
              icon={<MapPin className="size-5" />}
              label={t('city')}
              value={data.address.city}
            />
            <InfoItem
              icon={<Globe className="size-5" />}
              label={t('country')}
              value={data.address.country}
            />
          </CardContent>
        </Card>
      </div>

      <Separator />

      <ProfileTab />
    </div>
  )
}

export default Profile
