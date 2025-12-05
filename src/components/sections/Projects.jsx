import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { projectsData } from './../../data/projects'
import { ProjectCard } from '../shared/ProjectCard'

export const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section
      id="projects"
      className="py-[var(--spacing-section)] px-6 bg-[var(--color-bg-primary)] border-y border-[var(--color-border-light)] grid-bg"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">
            <span className="accent-text">/</span> Blueprints
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-xl">
            A selection of projects where performance meets purposeful design.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
