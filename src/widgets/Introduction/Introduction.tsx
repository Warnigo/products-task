'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { TitleWithBadge } from '@/components'
import { useIntersectionObserver } from '@/helpers/hooks'
import { useI18n } from '@/locales/client'
import { fadeInAnimation, fadeInTransition } from './motion'

const Introduction: FC = () => {
  const t = useI18n()
  const title = t('home.title')
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-[0.03]"
        style={{
          WebkitMask: `url('/logo.svg') center / contain no-repeat`,
          mask: `url('/logo.svg') center / contain no-repeat`,
          backgroundColor: 'hsl(var(--primary))',
        }}
      />

      <motion.div
        className="container flex min-h-screen items-center justify-center px-4 py-20"
        variants={fadeInAnimation}
        initial="initial"
        animate={isVisible ? 'animate' : 'initial'}
        transition={fadeInTransition}
      >
        <div className="relative flex flex-col items-center justify-center gap-12">
          <TitleWithBadge
            title={title}
            visible={isVisible}
            highlightWordOne={t('home.part')}
            highlightWordTwo={t('home.partSecond')}
            badgeLabelOne={t('backend')}
            badgeLabelTwo={t('frontend')}
          />

          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 0.8, type: 'spring' }}
          >
            <p className="text-center text-lg font-medium text-primary md:text-xl">
              {t('home.description')}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

Introduction.displayName = 'Introduction'
export default Introduction
