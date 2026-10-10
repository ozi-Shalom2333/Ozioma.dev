import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredProjects, archivedProjects } from '../../data/projectPresentation'
import { ProjectCard, ProjectActions } from '../shared/ProjectCard'
import { Reveal } from '../shared/Reveal'
import { STAGGER } from '../../lib/motion'

export function Projects() {
  return (
    <section tabIndex={-1} id="projects" className="work" aria-labelledby="work-title">
      <div className="page-container">
        <div className="section-intro">
          <Reveal><p className="eyebrow">01 / Selected work</p><h2 id="work-title" className="section-heading">Ideas, brought<br /><span className="serif">into focus.</span></h2></Reveal>
          <Reveal as="p" className="work-intro-copy" delay={0.12}>A selection of websites and applications, with a look at the interfaces, the decisions behind them, and the code.</Reveal>
        </div>
        <div className="project-grid">{featuredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
        <details className="work-archive">
          <summary><span>More work & experiments <small>{archivedProjects.length} projects in the archive</small></span><Plus size={22} aria-hidden="true" /></summary>
          <div>{archivedProjects.map((project, index) => (
            <Reveal as="article" key={project.id} className="archive-item" delay={Math.min(index * STAGGER, 0.4)}>
              <span className="project-number" aria-hidden="true">{String(index + 5).padStart(2, '0')}</span>
              <div><h3 className="archive-title"><Link to={`/blueprint/${project.id}`}>{project.displayTitle}</Link></h3><p>{project.summary}</p></div>
              <ProjectActions project={project} />
            </Reveal>
          ))}</div>
        </details>
      </div>
    </section>
  )
}
