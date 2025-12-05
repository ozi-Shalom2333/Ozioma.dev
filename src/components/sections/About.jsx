import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/* Motion Variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section
      ref={ref}
      id="about"
      className="py-[var(--spacing-section)] px-6 grid-bg bg-[var(--color-bg-primary)]"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">
            <span className="accent-text">/</span> The Thinker
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg">
            My philosophy on building.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-8 text-[var(--color-text-muted)] text-lg leading-relaxed"
        >
          <motion.p variants={itemVariants}>
            I don’t just write code — I design systems. My work begins with
            understanding the problem deeply, ensuring every decision is rooted
            in clarity and purpose. The <strong>Thinking</strong> informs the
            <strong> Building</strong>.
          </motion.p>

          <motion.p variants={itemVariants}>
            I focus on clean architecture, precise design execution, and
            performance‑driven development. My expertise lies in the modern
            React ecosystem, leveraging tools that prioritize speed,
            maintainability, and developer experience — including Tailwind v4
            and server‑first patterns.
          </motion.p>

          {/* Principle Card */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-secondary)]/60 shadow-soft"
          >
            <h3 className="text-xl font-medium mb-2 accent-text">
              Core Principle: Precision
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Every pixel, every state change, and every millisecond of load
              time is intentional. Precision isn’t an aesthetic choice — it’s a
              foundation for building software that feels effortless to use.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
