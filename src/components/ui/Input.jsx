import { cn } from './../../lib/utils'
import { forwardRef } from 'react'

const Input = forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      `
      w-full px-4 py-3 rounded-md
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

Input.displayName = 'Input'

export { Input }
