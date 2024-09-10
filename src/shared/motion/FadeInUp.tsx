import { FC, memo, PropsWithChildren, RefObject } from 'react'
import { motion, Variants } from 'framer-motion'
import { cn } from '@/lib'

interface Props extends PropsWithChildren {
  className?: string
  ref?: RefObject<HTMLDivElement>
}

const fadeInUp: Variants = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { y: 60, opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const FadeInUp: FC<Props> = memo(({ children, className, ref }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={fadeInUp}
    className={cn('w-full', className)}
    ref={ref!}
  >
    {children}
  </motion.div>
))
