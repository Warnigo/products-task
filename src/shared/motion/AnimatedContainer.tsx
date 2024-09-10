import { FC, memo, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib'

interface Props extends PropsWithChildren {
  isScrolled: boolean
}

export const AnimatedContainer: FC<Props> = memo(({ children, isScrolled }) => (
  <motion.header
    className={cn(
      'fixed z-50 w-full border-b bg-background/70 bg-gradient-to-b from-background to-transparent backdrop-blur-lg',
      { 'shadow-md': isScrolled },
    )}
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
  >
    {children}
  </motion.header>
))
