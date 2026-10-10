import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

export const Button = forwardRef(function Button({ className, variant = 'solid', children, ...props }, ref) {
  return <button ref={ref} className={cn('button', variant === 'outline' && 'button-outline', className)} {...props}>{children}</button>
})
