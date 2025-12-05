import { motion } from 'framer-motion'

export const LoadingSpinner = () => (
  <div className="h-64 flex items-center justify-center bg-[var(--color-dark-black)]/50 text-[var(--color-neon-red)]">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className="w-8 h-8 border-4 border-t-[var(--color-neon-red)] border-white/20 rounded-full"
    />
  </div>
)