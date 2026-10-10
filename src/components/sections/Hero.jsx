import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { ProfileImage } from '../shared/ProfileImage'

export function Hero() {
  return (
    <section tabIndex={-1} id="hero" className="hero page-container" aria-labelledby="hero-title">
      <div className="hero-top eyebrow">
        <span>Ozioma Okafor / Frontend Engineer</span>
        <span className="availability">Let’s build something thoughtful</span>
      </div>
      <div className="hero-grid">
        <div>
          <h1 id="hero-title">Interfaces<br />with <span className="serif">intent.</span></h1>
          <p className="hero-description">
            I’m <strong>Ozioma</strong>. I turn ideas into considered web experiences,
            bringing together clear design, responsive interfaces, and the React ecosystem.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button">Explore my work <ArrowDown aria-hidden="true" /></a>
            <a href="#contact" className="text-link">Start a conversation <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <ProfileImage />
      </div>
      <div className="hero-bottom">
        <p>React · Next.js · TypeScript · Tailwind CSS</p>
        <a href="#projects">Selected work <ArrowDown size={16} aria-hidden="true" /></a>
      </div>
    </section>
  )
}
