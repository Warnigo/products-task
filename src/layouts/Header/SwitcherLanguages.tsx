'use client'

import { Languages } from 'lucide-react'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui'
import { cn } from '@/lib'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import { Locale } from '@/types'
import { switchLang } from './constants'

export function SwitcherLanguages() {
  const changeLocale = useChangeLocale()
  const currentLocale = useCurrentLocale()

  const handleSwitch = (lang: Locale) => {
    changeLocale(lang)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="size-[1.2rem] rotate-0 scale-100" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="flex flex-col gap-1">
        {switchLang.map(({ title, lang }) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => handleSwitch(lang as Locale)}
            className={currentLocale === lang ? cn('bg-accent text-accent-foreground') : ''}
          >
            {title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
