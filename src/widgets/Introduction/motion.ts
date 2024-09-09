import { Transition, Variants } from 'framer-motion'

export const fadeInAnimation: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

export const fadeInTransition: Transition = {
  duration: 1,
}
