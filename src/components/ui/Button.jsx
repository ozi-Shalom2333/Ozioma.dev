import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const Button = forwardRef(
  ({ className, variant = 'solid', children, ...props }, ref) => {
    const base =
      'px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm'

    const variants = {
      solid:
        'bg-[var(--color-accent-red)] text-white hover:bg-[var(--color-accent-pink)]',
      outline:
        'btn-gradient-border text-white hover:scale-[1.03]',
      ghost:
        'border border-[var(--color-border-light)] text-[var(--color-text-muted)] hover:text-white hover:border-white/30',
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cn(base, variants[variant], className)}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
