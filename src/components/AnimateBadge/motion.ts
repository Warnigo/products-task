import { Transition, Variants } from 'framer-motion'

export const badgeAnimation = (rotate: number): Variants => ({
  initial: { scale: 0, rotate: rotate * 3 },
  animate: { scale: 1, rotate },
})

export const badgeTransition: Transition = {
  duration: 0.5,
  type: 'spring',
}
