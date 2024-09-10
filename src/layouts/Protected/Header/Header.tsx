'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingBag } from 'lucide-react'
import { AnimateButton, Logo } from '@/components'
import { Separator } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useHeaderScroll } from '@/helpers/hooks'
import { getStripLocale } from '@/helpers/utils'
import { cn } from '@/lib'
import { useI18n } from '@/locales/client'
import { AnimatedContainer, AnimatedMenuItem, AnimatedWrapper } from '@/shared/motion'
import { menu } from './constants'
import { SwitcherLanguages } from './SwitcherLanguages'
import { SwitcherTheme } from './SwitcherTheme'
import { UserMenu } from './UserMenu'

type TranslationKey = 'layout.home' | 'layout.products' | 'layout.users' | 'layout.posts'

const Header = () => {
  const pathname = usePathname()
  const strippedPathname = getStripLocale(pathname ?? '')
  const t = useI18n()
  const isScrolled = useHeaderScroll()

  return (
    <AnimatedContainer isScrolled={isScrolled}>
      <div className="container flex items-center justify-between py-2">
        <div className="flex items-center gap-8">
          <AnimatedWrapper>
            <Logo className="size-12 w-full text-primary" />
          </AnimatedWrapper>

          <nav>
            <ul className="flex items-center justify-center gap-3">
              {menu.map(({ title, link }) => (
                <AnimatedMenuItem
                  key={title}
                  className={cn('text-primary/70 hover:text-primary', {
                    'text-primary': strippedPathname === link,
                  })}
                >
                  <Link href={link}>{t(title as TranslationKey)}</Link>
                </AnimatedMenuItem>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <AnimatedWrapper>
            <SwitcherTheme />
          </AnimatedWrapper>

          <AnimatedWrapper>
            <SwitcherLanguages />
          </AnimatedWrapper>

          <Separator orientation="vertical" className="h-8" />

          <AnimatedWrapper>
            <AnimateButton roleIcon={<ShoppingBag className="size-5" />}>
              <Link href={ROUTES.cards}>{t('cards')}</Link>
            </AnimateButton>
          </AnimatedWrapper>

          <AnimatedWrapper>
            <UserMenu />
          </AnimatedWrapper>
        </div>
      </div>
    </AnimatedContainer>
  )
}

Header.displayName = 'Header'
export default Header
