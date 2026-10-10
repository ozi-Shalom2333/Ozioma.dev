import { useRef } from 'react'
import { m as Motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { ProfileImage } from '../shared/ProfileImage'
import { Reveal } from '../shared/Reveal'

export function Hero() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -36])

  return (
    <section ref={sectionRef} tabIndex={-1} id="hero" className="hero page-container" aria-labelledby="hero-title">
      <Reveal onMount className="hero-top eyebrow">
        <span>Ozioma Okafor / Frontend Engineer</span>
        <span className="availability">Let’s build something thoughtful</span>
      </Reveal>
      <div className="hero-grid">
        <div>
          <Reveal as="h1" id="hero-title" onMount delay={0.06}>Interfaces<br />with <span className="serif">intent.</span></Reveal>
          <Reveal as="p" className="hero-description" onMount delay={0.12}>
            I’m <strong>Ozioma</strong>. I turn ideas into considered web experiences,
            bringing together clear design, responsive interfaces, and the React ecosystem.
          </Reveal>
          <Reveal className="hero-actions" onMount delay={0.18}>
            <a href="#projects" className="button">Explore my work <ArrowDown aria-hidden="true" /></a>
            <a href="#contact" className="text-link">Start a conversation <ArrowUpRight aria-hidden="true" /></a>
          </Reveal>
        </div>
        <Motion.div style={reduceMotion ? undefined : { y: portraitY }}>
          <Reveal onMount delay={0.1} y={24}><ProfileImage /></Reveal>
        </Motion.div>
      </div>
      <Reveal className="hero-bottom" onMount delay={0.24}>
        <p>React · Next.js · TypeScript · Tailwind CSS</p>
        <a href="#projects">Selected work <ArrowDown size={16} aria-hidden="true" /></a>
      </Reveal>
    </section>
  )
}
