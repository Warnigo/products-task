import { FC, memo } from 'react'
import Link from 'next/link'
import BrandLogo from 'public/logo.svg'
import { ROUTES } from '@/constants'
import { cn } from '@/lib'

interface Props {
  className?: string
}

export const Logo: FC<Props> = memo(({ className }) => (
  <Link href={ROUTES.home} className={'flex w-full items-center justify-center'}>
    <BrandLogo className={cn(className)} />
  </Link>
))
