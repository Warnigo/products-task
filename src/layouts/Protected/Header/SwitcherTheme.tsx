'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui'
import { cn } from '@/lib'
import { switchMode } from './constants'

export function SwitcherTheme() {
  const { setTheme, theme } = useTheme()

  const handleSwitch = (mode: string) => {
    setTheme(mode)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="flex flex-col gap-1">
        {switchMode.map(({ title, mode }) => (
          <DropdownMenuItem
            key={mode}
            onClick={() => handleSwitch(mode)}
            className={theme === mode ? cn('bg-accent text-accent-foreground') : ''}
          >
            {title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
