import { PropsWithChildren } from 'react'

export const PublicLayout = ({ children }: PropsWithChildren) => (
  <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
    <main className="container relative">{children}</main>
  </div>
)
