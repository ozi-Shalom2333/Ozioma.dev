import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { projectsData } from "../data/projects"

// Motion Variants
const pageTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

export const BlueprintPage = () => {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === Number(id))

  if (!project) {
    return (
      <div className="text-center py-20 text-white">
        Project not found.
      </div>
    )
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageTransition}
      className="relative min-h-screen bg-[var(--color-bg-primary)] text-white overflow-hidden"
    >
      {/* Animated Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      {/* Close Button */}
      <Link
        to="/"
        className="absolute top-6 right-6 text-[var(--color-text-muted)] hover:text-white transition"
      >
        Close ✕
      </Link>

      {/* Frame */}
      <div className="relative z-10 max-w-5xl mx-auto mt-24 mb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="
            border border-[var(--color-accent-red)]
            rounded-2xl p-10
            bg-[var(--color-bg-secondary)]/40
            backdrop-blur-md
            shadow-[0_0_40px_rgba(255,0,0,0.15)]
          "
        >
          {/* Title */}
          <motion.h1 variants={fadeIn} className="text-4xl font-bold accent-text">
            {project.title}
          </motion.h1>

          {/* Category */}
          <motion.p variants={fadeIn} className="mt-2 text-[var(--color-text-muted)]">
            {project.category}
          </motion.p>

          {/* Tech Stack */}
          <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mt-6">
            {project.tech.map(t => (
              <span
                key={t}
                className="
                  px-3 py-1 rounded-full text-xs
                  border border-[var(--color-border-light)]
                  text-[var(--color-text-muted)]
                "
              >
                {t}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p variants={fadeIn} className="mt-8 text-lg leading-relaxed">
            {project.desc}
          </motion.p>

          {/* Architecture Notes */}
          <motion.div variants={fadeIn} className="mt-10">
            <h2 className="text-xl font-semibold mb-3 accent-text">Architecture</h2>
            <p className="text-[var(--color-text-muted)]">
              This section will describe how the system works internally.
            </p>
          </motion.div>

          {/* Screenshots */}
          <motion.div variants={fadeIn} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-48 bg-white/10 rounded-lg" />
            <div className="h-48 bg-white/10 rounded-lg" />
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeIn} className="mt-12 flex gap-4">
            <a href="#" className="btn-gradient-border px-6 py-3 rounded-md text-white">
              Live Demo
            </a>
            <a href="#" className="px-6 py-3 rounded-md border border-[var(--color-border-light)] text-white">
              GitHub Repo
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
