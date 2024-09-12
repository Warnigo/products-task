import { FC, memo } from 'react'
import {
  Breadcrumb as ComponentBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui'
import { ROUTES } from '@/constants'
import { useI18n } from '@/locales/client'

type Props = {
  title: string
  backLink?: string
  back?: string
}

export const Breadcrumb: FC<Props> = memo(({ title, backLink, back }: Props) => {
  const t = useI18n()

  return (
    <ComponentBreadcrumb className="my-2 mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={backLink || ROUTES.home}>{back || t('layout.home')}</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </ComponentBreadcrumb>
  )
})

Breadcrumb.displayName = 'Breadcrumb'
