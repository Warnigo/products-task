import { PropsWithChildren } from 'react'
import { QueryProvider } from './QueryProvider'
import { ThemeProvider } from './ThemeProvider'

export const Provider = ({ children }: PropsWithChildren) => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    <QueryProvider>{children}</QueryProvider>
  </ThemeProvider>
)
