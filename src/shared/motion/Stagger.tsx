import { FC, memo, PropsWithChildren } from 'react'
import { motion, Variants } from 'framer-motion'
import { cn } from '@/lib'

export const stagger: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

interface Props extends PropsWithChildren {
  variant?: 'fadeInUp' | 'stagger'
  className?: string
}

export const Stagger: FC<Props> = memo(({ children, className }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={stagger}
    className={cn('w-full', className)}
  >
    {children}
  </motion.div>
))
