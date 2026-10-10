import { forwardRef } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import { DISTANCE, DURATION, EASE, VIEWPORT } from '../../lib/motion'

// A small, reduced-motion aware wrapper. When motion is reduced it renders a
// plain element with no hidden initial state, so content is never withheld.
export const Reveal = forwardRef(function Reveal(
  {
    as = 'div',
    children,
    className,
    delay = 0,
    y = DISTANCE,
    duration = DURATION,
    viewport = VIEWPORT,
    onMount = false,
    ...props
  },
  ref,
) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    const Tag = as
    return <Tag ref={ref} className={className} {...props}>{children}</Tag>
  }

  const MotionTag = m[as] || m.div
  const animation = onMount
    ? { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y }, whileInView: { opacity: 1, y: 0 }, viewport }

  return (
    <MotionTag
      ref={ref}
      className={className}
      transition={{ duration, delay, ease: EASE }}
      {...animation}
      {...props}
    >
      {children}
    </MotionTag>
  )
})
