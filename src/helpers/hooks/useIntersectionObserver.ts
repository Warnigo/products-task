import { RefObject, useEffect, useRef, useState } from 'react'

interface IntersectionObserverOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

export const useIntersectionObserver = (
  options: IntersectionObserverOptions = {},
): [RefObject<HTMLElement>, boolean] => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return [ref, isVisible]
}
