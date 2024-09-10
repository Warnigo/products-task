'use client'

import { FC, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '@/locales/client'

interface TruncateTextProps {
  text: string
  limit: number
  disabled?: boolean
}

const TruncateText: FC<TruncateTextProps> = ({ text, limit = 10, disabled = false }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const t = useI18n()

  const words = text.split(' ')
  const truncated = words.slice(0, limit).join(' ')
  const isTruncated = words.length > limit

  const toggleExpand = () => {
    if (!disabled) {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <span className="inline">
      <AnimatePresence initial={false} mode="wait">
        {isExpanded ? (
          <motion.span
            key="full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {text}
          </motion.span>
        ) : (
          <motion.span
            key="truncated"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {truncated}
          </motion.span>
        )}
      </AnimatePresence>
      {isTruncated && (
        <motion.button
          onClick={toggleExpand}
          className={`ml-1 inline-block focus:outline-none ${
            disabled
              ? 'cursor-pointer text-primary/30'
              : 'text-primary/50 hover:text-primary/80 hover:underline'
          }`}
          whileHover={disabled ? {} : { scale: 1.05 }}
          whileTap={disabled ? {} : { scale: 0.95 }}
          disabled={disabled}
        >
          {isExpanded ? `...${t('less')}` : `...${t('more')}`}
        </motion.button>
      )}
    </span>
  )
}

TruncateText.displayName = 'TruncateText'
export default TruncateText
