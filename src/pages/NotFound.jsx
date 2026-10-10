import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Reveal } from '../components/shared/Reveal'

export function NotFound({ project = false }) {
  return <div className="page-container not-found">
    <Reveal onMount>
      <p className="eyebrow text-brand">404 / {project ? 'Project' : 'Page'} not found</p>
      <h1 className="section-heading">Let’s get you<br /><span className="serif">back to the work.</span></h1>
      <p>This link does not lead to an available {project ? 'project' : 'page'}.</p>
      <Link to="/#projects" className="button"><ArrowLeft aria-hidden="true" />Explore the projects</Link>
    </Reveal>
  </div>
}
