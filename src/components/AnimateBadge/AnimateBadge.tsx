import { FC, memo } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui'
import { cn } from '@/lib'
import { badgeAnimation, badgeTransition } from './motion'

interface BadgeProps {
  className?: string
  classNameBadge?: string
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  children: React.ReactNode
  delay: number
  rotate: number
}

export const AnimateBadge: FC<BadgeProps> = memo(
  ({ className, classNameBadge, variant, children, delay, rotate }) => (
    <motion.div
      className={className}
      variants={badgeAnimation(rotate)}
      initial="initial"
      animate="animate"
      transition={{ ...badgeTransition, delay }}
    >
      <Badge
        className={cn(
          'rounded-full border-2 px-4 py-2 text-sm font-semibold tracking-tighter shadow-xl md:text-base',
          classNameBadge,
        )}
        variant={variant}
        style={{
          textShadow: 'none',
        }}
      >
        {children}
      </Badge>
    </motion.div>
  ),
)
