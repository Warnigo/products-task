import { FC, memo, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib'

interface Props extends PropsWithChildren {
  className?: string
}

export const AnimatedWrapper: FC<Props> = memo(({ children, className }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={cn(className)}>
    {children}
  </motion.div>
))
