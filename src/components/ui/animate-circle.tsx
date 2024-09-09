import { motion } from 'framer-motion'
import { cn } from '@/lib'

type Props = {
  className?: string
  fromColor?: string
  toColor?: string
  size?: string
  position?: string
  scaleRange?: number[]
  rotateRange?: number[]
  duration?: number
  delay?: number
  clockwise?: boolean
}

const AnimatedCircle = ({
  className,
  fromColor = 'yellow-300',
  toColor = 'orange-500',
  size = 'size-20 md:size-32',
  position = 'bottom-10 left-10',
  scaleRange = [1, 1.2, 1],
  rotateRange = [0, 180, 360],
  duration = 5,
  delay = 0,
  clockwise = true,
}: Props) => (
  <motion.div
    className={cn(
      'absolute rounded-full bg-gradient-to-r opacity-50',
      `from-${fromColor} to-${toColor}`,
      size,
      position,
      className,
    )}
    animate={{
      scale: scaleRange,
      rotate: clockwise ? rotateRange : rotateRange.map((v) => -v),
    }}
    transition={{
      duration,
      repeat: Infinity,
      repeatType: 'reverse',
      delay,
    }}
  />
)

export default AnimatedCircle
