import { FC, memo, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib'

interface Props extends PropsWithChildren {
  className?: string
}

export const AnimatedMenuItem: FC<Props> = memo(({ children, className }) => (
  <motion.li className={cn(className)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    {children}
  </motion.li>
))
