'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Logo } from '@/components'
import { useHeaderScroll } from '@/helpers/hooks'
import { getStripLocale } from '@/helpers/utils'
import { cn } from '@/lib'
import { useI18n } from '@/locales/client'
import { menu } from './constants'
import { AnimatedContainer, AnimatedMenuItem, AnimatedWrapper } from './HeaderAnimations'
import { SwitcherLanguages } from './SwitcherLanguages'
import { SwitcherTheme } from './SwitcherTheme'

type TranslationKey = 'layout.home' | 'layout.about' | 'layout.contact'

const Header = () => {
  const pathname = usePathname()
  const strippedPathname = getStripLocale(pathname ?? '')
  const t = useI18n()
  const isScrolled = useHeaderScroll()

  return (
    <AnimatedContainer isScrolled={isScrolled}>
      <div className="container flex items-center justify-between py-2">
        <div className="flex items-center gap-8">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-full">
            <Logo className="size-12 w-full text-primary" />
          </motion.div>

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
        </div>
      </div>
    </AnimatedContainer>
  )
}

export default Header
