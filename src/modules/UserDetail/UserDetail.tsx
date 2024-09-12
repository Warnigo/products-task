'use client'

import {
  Briefcase,
  Cake,
  Dumbbell,
  Globe,
  Hash,
  Mail,
  MapPin,
  Phone,
  Ruler,
  User,
  User2,
} from 'lucide-react'
import { Breadcrumb, InfoItem, Spinner } from '@/components'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardHeader,
  Separator,
} from '@/components/ui'
import { ROUTES } from '@/constants'
import { getInitials } from '@/helpers/utils'
import { useI18n } from '@/locales/client'
import { useGetUserSingle } from '@/shared/query-hooks'

type Props = {
  userId: string
}

const UserDetail = ({ userId }: Props) => {
  const t = useI18n()
  const { data, isLoading } = useGetUserSingle(Number(userId))

  if (isLoading || !data) {
    return <Spinner />
  }

  return (
    <section className="my-10 flex flex-col gap-6">
      <div>
        <Breadcrumb
          title={`${data.firstName} ${data.lastName}`}
          back={t('layout.users')}
          backLink={ROUTES.users}
        />
      </div>

      <Card className="col-span-full">
        <CardContent className="flex flex-col items-center gap-6 py-6 sm:flex-row sm:items-start">
          <Avatar className="size-32 rounded-full border-2">
            <AvatarImage src={data.image} alt={data.firstName} className="rounded-full" />
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
            <InfoItem
              icon={<User className="size-5" />}
              label={t('username')}
              value={data.username}
            />
            <InfoItem
              icon={<Cake className="size-5" />}
              label={t('birthDate')}
              value={data.birthDate}
            />
            <InfoItem icon={<User className="size-5" />} label={t('gender')} value={data.gender} />
            <InfoItem icon={<Hash className="size-5" />} label="SSN" value={data.ssn} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">{t('address')}</h2>
          </CardHeader>
          <CardContent className="space-y-2">
            <InfoItem
              icon={<MapPin className="size-5" />}
              label={t('street')}
              value={data.address.address}
            />
            <InfoItem
              icon={<MapPin className="size-5" />}
              label={t('city')}
              value={data.address.city}
            />
            <InfoItem
              icon={<MapPin className="size-5" />}
              label={t('state')}
              value={data.address.state}
            />
            <InfoItem
              icon={<Globe className="size-5" />}
              label={t('country')}
              value={data.address.country}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">{t('company')}</h2>
          </CardHeader>
          <CardContent className="space-y-2">
            <InfoItem
              icon={<Briefcase className="size-5" />}
              label={t('name')}
              value={data.company.name}
            />
            <InfoItem
              icon={<Briefcase className="size-5" />}
              label={t('department')}
              value={data.company.department}
            />
            <InfoItem
              icon={<Briefcase className="size-5" />}
              label={t('title')}
              value={data.company.title}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">{t('otherInformation')}</h2>
          </CardHeader>
          <CardContent className="space-y-2">
            <InfoItem icon={<User2 className="size-5" />} label={t('age')} value={data.age} />
            <InfoItem icon={<Ruler className="size-5" />} label={t('height')} value={data.height} />
            <InfoItem
              icon={<Dumbbell className="size-5" />}
              label={t('weight')}
              value={data.weight}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

UserDetail.displayName = 'UserDetail'
export default UserDetail
