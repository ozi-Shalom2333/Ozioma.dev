import React from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

export const ProjectCard = ({ project, index }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ delay: index * 0.1, duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -6, boxShadow: "0 8px 24px rgba(0,0,0,0.35)" }}
      className="
        group relative rounded-xl overflow-hidden cursor-pointer
        bg-[var(--color-bg-secondary)]/60
        border border-[var(--color-border-light)]
        transition-all duration-300 flex flex-col
      "
    >
      {/* Project Image */}
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-105
          "
        />

        {/* Subtle overlay */}
        <div
          className="
            absolute inset-0 bg-gradient-to-b
            from-black/10 to-black/40
            opacity-70
          "
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Top Row: ID + Tech */}
        <div className="flex justify-between items-start mb-4">
          <span className="font-mono text-[var(--color-text-muted)] text-xs tracking-wide">
            0{project.id}
          </span>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="
                  text-[10px] uppercase tracking-wider px-2 py-1 rounded-full
                  border border-[var(--color-border-light)]
                  text-[var(--color-text-muted)]
                  transition-colors duration-300
                  group-hover:border-white/20
                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Title */}
        <h3
          className="
            text-xl font-medium text-white
            group-hover:text-[var(--color-accent-red)]
            transition-colors duration-300
          "
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[var(--color-text-muted)] mt-2 line-clamp-2">
          {project.desc}
        </p>

        {/* CTA */}
        <div
          className="
            mt-4 flex items-center gap-1 text-sm font-medium
            text-[var(--color-accent-red)]
            transition-transform duration-300
            group-hover:translate-x-1
          "
        >
          View Blueprint
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  )
}
