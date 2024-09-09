import { FC, memo, PropsWithChildren, ReactElement, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib'
import { Button, buttonVariants } from '../ui'

interface Props extends PropsWithChildren {
  role: string
  className?: string
  buttonVariant?: string
  roleIcon?: ReactElement
  variant?: 'default' | 'outline'
}

export const AnimateButton: FC<Props> = memo(
  ({ role, className, variant = 'default', children, roleIcon }) => {
    const [hovered, setHovered] = useState('')

    return (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="w-full text-center"
      >
        <div className="flex w-full items-center justify-center">
          <AnimatePresence>
            <motion.div
              onMouseEnter={() => setHovered(role)}
              onMouseLeave={() => setHovered('')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full"
            >
              <Button
                variant={variant}
                className={cn(
                  'relative w-full overflow-hidden transition-all duration-300',
                  buttonVariants,
                )}
              >
                <motion.span
                  initial={{ y: 0 }}
                  animate={{ y: hovered === role ? -30 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={cn(className)}
                >
                  {children}
                </motion.span>

                <motion.span
                  className={cn('absolute inset-0 flex items-center justify-center gap-2')}
                  initial={{ y: 30 }}
                  animate={{ y: hovered === role ? 0 : 30 }}
                  transition={{ duration: 0.3 }}
                >
                  {roleIcon ? roleIcon : null}
                  {role}
                </motion.span>
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    )
  },
)
