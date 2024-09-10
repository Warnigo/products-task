import { cn } from '@/lib/utils'
import { Icons } from '../Icons'

interface LoadingProps {
  className?: string
}

export const Spinner = ({ className }: LoadingProps) => (
  <div className={cn('flex items-center justify-center', className)}>
    <Icons.spinner className="size-6 animate-spin text-primary" />
  </div>
)
