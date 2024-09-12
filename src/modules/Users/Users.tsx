'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { CircleUser } from 'lucide-react'
import { AnimateButton, Search, Spinner } from '@/components'
import { Card, CardContent, CardHeader, Separator } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useI18n } from '@/locales/client'
import { useGetAllUsers, useGetUserSearch } from '@/shared/query-hooks'
import { Owner } from '@/widgets/Owner'

const Users = () => {
  const t = useI18n()
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchQuery = searchParams?.get('q') ?? ''
  const [searchTerm, setSearchTerm] = useState(searchQuery)
  const { data: usersData, isLoading: isUsersLoading } = useGetAllUsers()
  const {
    data: usersSearch,
    isLoading: isUsersSearchLoading,
    refetch: refetchUserSearch,
  } = useGetUserSearch(searchQuery)

  const users = searchQuery ? usersSearch?.users : usersData?.users

  const updateSearchParams = useCallback(
    (value: string) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString() ?? '')

      if (value) {
        newSearchParams.set('q', value)
      } else {
        newSearchParams.delete('q')
      }
      router.push(`${ROUTES.users}?${newSearchParams.toString()}`)
    },
    [router, searchParams],
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm !== searchQuery) {
        updateSearchParams(searchTerm)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm, searchQuery, updateSearchParams])

  useEffect(() => {
    if (searchQuery) {
      refetchUserSearch()
    }
  }, [searchQuery, refetchUserSearch])

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  const isLoading = isUsersLoading || (isUsersSearchLoading && searchQuery)

  if (isLoading) {
    return <Spinner />
  }

  return (
    <section className="my-10 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-black">{t('layout.users')}</h1>
        <div className="w-full max-w-96">
          <Search value={searchTerm} onChange={handleSearch} />
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {users && users.length > 0 ? (
          users.map((item) => (
            <Card key={item.id} className="flex flex-col gap-3 rounded-lg bg-background p-5">
              <CardHeader>
                <Owner userId={item.id} />
              </CardHeader>
              <Separator />
              <CardContent className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <p className="flex items-center justify-start gap-2">
                    <span className="text-primary/80">{t('phoneNumber')}:</span>
                    <span>{item.phone}</span>
                  </p>
                  <p className="flex items-center justify-start gap-2">
                    <span className="text-primary/80">{t('company')}:</span>
                    <span>{item.company.department},</span>
                    <span>{item.company.title}</span>
                  </p>
                </div>
                <Link href={ROUTES.usersSingle.replace(':id', String(item.id))}>
                  <AnimateButton roleIcon={<CircleUser className="size-5" />}>
                    {t('seeMore')}
                  </AnimateButton>
                </Link>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full mt-10 flex items-center justify-center">
            <p className="text-4xl font-black text-primary/50">
              {searchQuery ? t('searchNotFound') : t('userNotFound')}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Users
