import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ProfileImage } from '../shared/ProfileImage'
import { Button } from '../ui/Button'
import { Github, Linkedin } from 'lucide-react'
import { Link } from 'react-scroll'

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

export const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen pt-32 pb-20 flex items-center justify-center px-6 grid-bg bg-[var(--color-bg-primary)]"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants}>
          <ProfileImage />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mt-10 tracking-tight text-white"
        >
          <span className="accent-text">Ozioma Okafor</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-3xl mt-4 font-light text-[var(--color-text-muted)]"
        >
          Frontend Engineer building production-ready web applications with React & Next.js.
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-[var(--color-text-muted)] mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          I design and develop modern interfaces powered by APIs,
          AI integrations, and production-ready architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center mt-12 flex-col sm:flex-row"
        >
          <Link to="projects" smooth duration={500}>
            <Button variant="solid">View My Work</Button>
          </Link>

          <Link to="contact" smooth duration={500}>
            <Button variant="outline">Let’s Collaborate</Button>
          </Link>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8 mt-16"
        >
          <a
            href="https://github.com/ozi-Shalom2333"
            aria-label="Github Profile"
            className="text-gray-500 hover:text-white transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/ozioma-okafor-111006329/"
            aria-label="LinkedIn Profile"
            className="text-gray-500 hover:text-white transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
