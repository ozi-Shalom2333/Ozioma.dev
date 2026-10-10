import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'
import { STAGGER } from '../../lib/motion'

export function ProjectActions({ project }) {
  return (
    <div className="project-actions">
      <Link to={`/blueprint/${project.id}`}>Project details <ArrowUpRight aria-hidden="true" /><span className="sr-only"> for {project.displayTitle}</span></Link>
      {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live site <ArrowUpRight aria-hidden="true" /><span className="sr-only"> for {project.displayTitle} (opens in a new tab)</span></a>}
      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Source <ArrowUpRight aria-hidden="true" /><span className="sr-only"> for {project.displayTitle} (opens in a new tab)</span></a>}
    </div>
  )
}

export function ProjectCard({ project, index }) {
  return (
    <Reveal as="article" className="project-card" delay={Math.min(index * STAGGER, 0.4)} y={22}>
      <Link to={`/blueprint/${project.id}`} className="project-media" style={{ '--project-tone': project.tone }} aria-label={`Explore ${project.displayTitle}`}>
        <img src={project.preview} srcSet={`${project.previewSmall} 640w, ${project.preview} 1280w`}
          sizes={index === 0 ? '(max-width: 767px) 90vw, 75vw' : '(max-width: 767px) 90vw, 45vw'}
          alt={`${project.displayTitle} website preview`} width="1280" height="600" loading="lazy" decoding="async" />
        <span className="project-open" aria-hidden="true"><ArrowUpRight size={18} /></span>
      </Link>
      <div className="project-information">
        <div>
          <h3 className="project-title"><span className="project-number" aria-hidden="true">0{index + 1}</span>{project.displayTitle}</h3>
          <p className="project-copy">{project.summary}</p>
          <p className="project-tech">{project.tech.slice(0, 3).map(tech => <span key={tech}>{tech}</span>)}</p>
        </div>
        <div><ProjectActions project={project} /><p className="project-category">{project.category}</p></div>
      </div>
    </Reveal>
  )
}
