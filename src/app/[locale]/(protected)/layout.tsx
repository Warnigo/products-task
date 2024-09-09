import { PropsWithChildren } from 'react'
import { Layout } from '@/layouts'

export default function ProtectedLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>
}
