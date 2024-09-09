import { FC, memo } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib'
import { AnimateBadge } from '../AnimateBadge'
import { containerAnimation, itemAnimation, itemTransition } from './motion'
import { style } from './TitleWithBadge.style'

interface Props {
  title: string
  visible: boolean
  highlightWordOne: string
  highlightWordTwo: string
  badgeLabelOne: string
  badgeLabelTwo: string
}

export const TitleWithBadge: FC<Props> = memo(
  ({ title, visible, highlightWordOne, highlightWordTwo, badgeLabelOne, badgeLabelTwo }) => {
    const words = title.split(' ')

    return (
      <motion.h2
        className="relative flex flex-wrap justify-center text-center text-5xl font-black md:text-7xl lg:text-8xl lg:leading-[115px]"
        variants={containerAnimation}
        initial="hidden"
        animate={visible ? 'show' : 'hidden'}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={itemAnimation}
            transition={itemTransition}
            className={cn(
              'mb-2 mr-2 inline-block whitespace-pre-wrap bg-clip-text tracking-tighter text-primary',
              {
                'text-outline-sm text-outline-red relative text-destructive':
                  word === highlightWordOne || word === highlightWordTwo,
              },
            )}
            style={{
              textShadow:
                word === highlightWordOne || word === highlightWordTwo ? style.textShadow : 'none',
            }}
          >
            {word === highlightWordOne && (
              <AnimateBadge
                className="absolute -left-10 -top-10 rotate-12 md:-top-20 md:right-0"
                classNameBadge="border-purple-600 bg-purple-100 text-purple-600"
                variant="outline"
                delay={1}
                rotate={12}
              >
                {badgeLabelOne}
              </AnimateBadge>
            )}
            {word === highlightWordTwo && (
              <AnimateBadge
                className="absolute -right-8 -top-10 -rotate-12 md:-right-12 md:-top-16"
                classNameBadge="border-pink-600 bg-pink-100 text-pink-600"
                variant="outline"
                delay={1.2}
                rotate={-12}
              >
                {badgeLabelTwo}
              </AnimateBadge>
            )}
            {word}
          </motion.span>
        ))}
      </motion.h2>
    )
  },
)

TitleWithBadge.displayName = 'TitleWithBadge'
