import { PropsWithChildren, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib'

export const AnimatedContainer = ({
  children,
  isScrolled,
}: {
  children: ReactNode
  isScrolled: boolean
}) => (
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
)

export const AnimatedLogo = ({ children }: PropsWithChildren) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    {children}
  </motion.div>
)

export const AnimatedMenuItem = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => (
  <motion.li className={className} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    {children}
  </motion.li>
)

export const AnimatedWrapper = ({ children }: PropsWithChildren) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    {children}
  </motion.div>
)
