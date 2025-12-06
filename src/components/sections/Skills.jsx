import { motion } from 'framer-motion'
import { ClipboardList } from 'lucide-react'

const techStacks = [
  { category: 'Frontend', tools: ['HTML5', 'CSS3', 'JavaScript','React', 'TypeScript', 'Next.js', 'Vite', 'Framer Motion', 'Tailwind v4'] },
  { category: 'Backend / Database', tools: ['Node.js', 'Firebase / Firestore'] },
  // , 'Express','MonogoDB' coming soon
  { category: 'Tooling / DevOps', tools: ['Git & Github', 'NPM/PNPM', 'Vercel', 'Figma', 'Netlify'] },
]

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-[var(--spacing-section)] px-6 bg-[var(--color-bg-primary)] border-y border-[var(--color-border-light)] grid-bg"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">
            <span className="accent-text">/</span> Stack
          </h2>
          <p className="text-lg text-[var(--color-text-muted)]">
            The tools I use to build with precision.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="space-y-12">
          {techStacks.map((stack, stackIndex) => (
            <div key={stack.category}>
              
              {/* Category Title */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: stackIndex * 0.15 }}
                className="text-xl font-medium mb-4 flex items-center text-white"
              >
                <ClipboardList className="w-5 h-5 mr-2 text-[var(--color-accent-red)]" />
                {stack.category}
              </motion.h3>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-4">
                {stack.tools.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.05 + stackIndex * 0.15,
                      ease: 'easeOut',
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'rgba(255,255,255,0.05)',
                    }}
                    className="px-5 py-2.5 rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-secondary)]/60 text-[var(--color-text-muted)] text-sm md:text-base transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
