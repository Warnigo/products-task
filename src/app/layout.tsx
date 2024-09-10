import '@/styles/globals.css'

import { PropsWithChildren } from 'react'
import { Metadata } from 'next'
import { Provider } from '@/providers'

export const metadata: Metadata = {
  title: "Abubakir Shavkatov's task",
  description: "Abubakir Shavkatov's task",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
