import { FC, memo, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib'
import { containerVariants } from './motion'

interface Props extends PropsWithChildren {
  isVisible?: boolean
  className?: string
}

export const WidgetCard: FC<Props> = memo(({ children, isVisible, className }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate={isVisible ? 'visible' : 'hidden'}
    className={cn('w-full overflow-hidden rounded-3xl border bg-background shadow-xl', className)}
  >
    {children}
  </motion.div>
))
