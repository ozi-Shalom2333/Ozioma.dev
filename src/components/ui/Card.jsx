import { cn } from '@/lib/utils'
import { motion as Motion } from 'framer-motion'
import { forwardRef } from 'react'

const Card = forwardRef(({ className, children, ...props }, ref) => (
  <Motion.div
    ref={ref}
    initial={{ opacity: 0, y: 20 }}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
    className={cn(
      `
      relative rounded-xl overflow-hidden p-6
      bg-[var(--color-bg-secondary)]/60
      border border-[var(--color-border-light)]
      shadow-soft transition-all duration-300
      `,
      className
    )}
    {...props}
  >
    {children}
  </Motion.div>
))

Card.displayName = 'Card'

export { Card }
