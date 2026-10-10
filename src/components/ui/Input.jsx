import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

export const Input = forwardRef(function Input({ className, ...props }, ref) {
  return <input ref={ref} className={cn('form-control', className)} {...props} />
})
