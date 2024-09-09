import { Transition, Variants } from 'framer-motion'

export const containerAnimation: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export const itemAnimation: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
  },
}

export const itemTransition: Transition = {
  type: 'spring',
  stiffness: 100,
}
