import { motion } from 'framer-motion'
import { Code } from 'lucide-react'

export const ProfileImage = () => {
  return (
    <div className="relative w-48 h-48 mx-auto md:w-64 md:h-64 group">

      {/* Subtle rotating accent aura */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="
          absolute inset-0 rounded-full
          bg-gradient-to-tr from-[var(--color-accent-red)] to-transparent
          opacity-20 blur-2xl
        "
      />

      {/* Image container */}
      <div
        className="
          relative w-full h-full rounded-xl overflow-hidden
          border border-[var(--color-border-light)]
          bg-[var(--color-bg-secondary)]/40
          shadow-soft
        "
      >
        <img
          src="/photo_2025-12-04_14-31-06.jpg"
          alt="Ozioma Okafor – Frontend Engineer & Thinker"
          className="
            w-full h-full object-cover grayscale
            transition-all duration-700 group-hover:grayscale-0
          "
          loading="eager"
        />
      </div>

      {/* Floating label */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4, ease: 'easeOut' }}
        className="
          absolute -bottom-4 -right-4 px-4 py-2 rounded-full
          bg-[var(--color-bg-secondary)]/80
          border border-[var(--color-border-light)]
          text-xs font-mono text-[var(--color-text-muted)]
          shadow-soft flex items-center gap-1
        "
      >
        <Code className="w-4 h-4 text-[var(--color-accent-red)]" />
        Ozioma.dev
      </motion.div>
    </div>
  )
}
