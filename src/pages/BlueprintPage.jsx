import { useParams, Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
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

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const nextImage = () => {
    setCurrentImage(prev =>
      prev === project.screenshots.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImage(prev =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    )
  }

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

          {/* ✅ Architecture Notes */}
          <motion.div variants={fadeIn} className="mt-10 space-y-10">
            {project.architecture?.overview && (
              <div>
                <h2 className="text-xl font-semibold mb-3 accent-text">Overview</h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {project.architecture.overview}
                </p>
              </div>
            )}

            {project.architecture?.frontend && (
              <div>
                <h2 className="text-xl font-semibold mb-3 accent-text">Frontend</h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {project.architecture.frontend}
                </p>
              </div>
            )}

            {project.architecture?.backend && (
              <div>
                <h2 className="text-xl font-semibold mb-3 accent-text">Backend</h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {project.architecture.backend}
                </p>
              </div>
            )}

            {project.architecture?.database && (
              <div>
                <h2 className="text-xl font-semibold mb-3 accent-text">Database</h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {project.architecture.database}
                </p>
              </div>
            )}

            {project.architecture?.features?.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-3 accent-text">Key Features</h2>
                <ul className="list-disc pl-6 text-[var(--color-text-muted)] space-y-2">
                  {project.architecture.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.architecture?.challenges?.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-3 accent-text">Challenges</h2>
                <ul className="list-disc pl-6 text-[var(--color-text-muted)] space-y-2">
                  {project.architecture.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.architecture?.solutions?.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-3 accent-text">Solutions</h2>
                <ul className="list-disc pl-6 text-[var(--color-text-muted)] space-y-2">
                  {project.architecture.solutions.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* ✅ SYSTEM DIAGRAM SECTION */}
          {/* {project.architecture && (
            <motion.div variants={fadeIn} className="mt-16">
              <h2 className="text-xl font-semibold mb-6 accent-text">System Diagram</h2>

              <div
                className="
                  relative p-10 rounded-2xl
                  border border-[var(--color-accent-red)]
                  bg-[var(--color-bg-secondary)]/20
                  shadow-[0_0_30px_rgba(255,0,0,0.15)]
                  blueprint-grid
                "
              >
                <div className="absolute inset-0 blueprint-scanlines pointer-events-none rounded-2xl" />

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

                  
                  {project.architecture.frontend && (
                    <div className="relative">
                      <div className="
                        p-4 rounded-xl border border-[var(--color-accent-red)]
                        bg-[var(--color-bg-secondary)]/40
                        shadow-[0_0_20px_rgba(255,0,0,0.2)]
                        font-mono text-sm
                      ">
                        FRONTEND
                      </div>
                      <div className="hidden sm:block absolute top-1/2 right-[-50%] w-[50%] h-[2px] bg-[var(--color-accent-red)] opacity-60" />
                    </div>
                  )}

                  
                  {project.architecture.backend && (
                    <div className="relative">
                      <div className="
                        p-4 rounded-xl border border-[var(--color-accent-red)]
                        bg-[var(--color-bg-secondary)]/40
                        shadow-[0_0_20px_rgba(255,0,0,0.2)]
                        font-mono text-sm
                      ">
                        BACKEND
                      </div>
                      <div className="hidden sm:block absolute top-1/2 left-[-50%] w-[50%] h-[2px] bg-[var(--color-accent-red)] opacity-60" />
                      <div className="hidden sm:block absolute top-1/2 right-[-50%] w-[50%] h-[2px] bg-[var(--color-accent-red)] opacity-60" />
                    </div>
                  )}

                
                  {project.architecture.database && (
                    <div className="relative">
                      <div className="
                        p-4 rounded-xl border border-[var(--color-accent-red)]
                        bg-[var(--color-bg-secondary)]/40
                        shadow-[0_0_20px_rgba(255,0,0,0.2)]
                        font-mono text-sm
                      ">
                        DATABASE
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )} */}

          {/* ✅ Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <motion.div variants={fadeIn} className="mt-12">
              <h2 className="text-xl font-semibold mb-4 accent-text">Screenshots</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.screenshots.map((src, index) => (
                  <div
                    key={index}
                    className="
                      relative overflow-hidden rounded-xl
                      border border-[var(--color-border-light)]
                      bg-[var(--color-bg-secondary)]/40
                      group
                    "
                  >
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${index + 1}`}
                      onClick={() => openLightbox(index)}
                      className="
                        w-full h-56 object-cover cursor-pointer
                        transition-transform duration-700
                        group-hover:scale-105
                      "
                    />

                    <div className="
                      absolute inset-0 bg-black/20 opacity-0
                      group-hover:opacity-100 transition-opacity duration-300
                    " />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ✅ Live Demo + GitHub Links */}
          <motion.div variants={fadeIn} className="mt-12 flex gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6 py-3 rounded-md
                  border border-[var(--color-accent-red)]
                  text-[var(--color-accent-red)]
                  hover:bg-[var(--color-accent-red)] hover:text-black
                  transition-all duration-300
                  font-medium tracking-wide
                "
              >
                Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6 py-3 rounded-md
                  border border-[var(--color-border-light)]
                  text-white
                  hover:border-[var(--color-accent-red)]
                  hover:text-[var(--color-accent-red)]
                  transition-all duration-300
                  font-medium tracking-wide
                "
              >
                GitHub Repo
              </a>
            )}
             {/* Close Button */}
            <Link
              to="/"
              className="absolute top-6 right-6 text-[var(--color-text-muted)] hover:text-white transition"
            >
              ✕ Close
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ✅ Lightbox Viewer */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-50 bg-black/80 backdrop-blur-md
              flex items-center justify-center
            "
          >
            <div className="absolute inset-0 pointer-events-none blueprint-scanlines" />

            <button
              onClick={closeLightbox}
              className="
                absolute top-6 right-6 text-white text-xl
                hover:text-[var(--color-accent-red)] transition
              "
            >
              ✕
            </button>

            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="
                relative
                max-w-[90%] max-h-[80%]
                p-4
                rounded-2xl
                border border-[var(--color-accent-red)]
                bg-[var(--color-bg-secondary)]/20
                shadow-[0_0_40px_rgba(255,0,0,0.25)]
              "
            >
              <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[var(--color-accent-red)] opacity-70" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[var(--color-accent-red)] opacity-70" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[var(--color-accent-red)] opacity-70" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--color-accent-red)] opacity-70" />

              <div className="
                absolute -top-10 left-1/2 -translate-x-1/2
                text-xs tracking-widest uppercase
                text-[var(--color-accent-red)]
                opacity-80 font-mono
              ">
                FIG {currentImage + 1}
              </div>

              <img
                src={project.screenshots[currentImage]}
                alt="Screenshot"
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>

            <button
              onClick={prevImage}
              className="
                absolute left-10 text-white text-4xl font-light
                hover:text-[var(--color-accent-red)]
                transition drop-shadow-[0_0_10px_rgba(255,0,0,0.4)]
              "
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="
                absolute right-10 text-white text-4xl font-light
                hover:text-[var(--color-accent-red)]
                transition drop-shadow-[0_0_10px_rgba(255,0,0,0.4)]
              "
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
