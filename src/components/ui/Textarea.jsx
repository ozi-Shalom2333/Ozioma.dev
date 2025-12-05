import { cn } from '../../lib/utils'
import { forwardRef } from 'react'

const Textarea = forwardRef(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      `
      w-full px-4 py-3 rounded-md resize-none
      bg-[var(--color-bg-secondary)]/60
      border border-[var(--color-border-light)]
      text-white placeholder-[var(--color-text-muted)]
      focus:border-[var(--color-accent-red)]
      focus:ring-1 focus:ring-[var(--color-accent-red)]/40
      outline-none transition-all duration-300
      `,
      className
    )}
    {...props}
  />
))

Textarea.displayName = 'Textarea'

export { Textarea }
