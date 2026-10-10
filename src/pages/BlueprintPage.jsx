import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { portfolioProjects } from '../data/projectPresentation'
import { Reveal } from '../components/shared/Reveal'
import { STAGGER } from '../lib/motion'
import { NotFound } from './NotFound'

function ImageGallery({ project }) {
  const [currentImage, setCurrentImage] = useState(0)
  const dialogRef = useRef(null)
  const returnFocusRef = useRef(null)
  const images = project.screenshots || []
  const moveImage = delta => setCurrentImage(index => (index + delta + images.length) % images.length)

  useEffect(() => {
    return () => {
      // A route change can unmount an open viewer.
      document.body.classList.remove('viewer-open')
    }
  }, [])

  const close = () => dialogRef.current?.close()
  const open = (index, trigger) => {
    setCurrentImage(index)
    returnFocusRef.current = trigger
    dialogRef.current.showModal()
    document.body.classList.add('viewer-open')
  }
  const handleClose = () => {
    document.body.classList.remove('viewer-open')
    returnFocusRef.current?.focus()
  }

  if (!images.length) return null
  return (
    <section className="case-gallery" aria-labelledby="gallery-title">
      <Reveal className="case-gallery-header" as="div"><h2 id="gallery-title">A look inside.</h2><p className="eyebrow text-muted">Select an image to explore</p></Reveal>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <Reveal as="button" key={src} className="gallery-button" type="button" onClick={event => open(index, event.currentTarget)} delay={Math.min(index * STAGGER, 0.32)} aria-label={`Enlarge ${project.displayTitle} screenshot ${index + 1}`}>
            <img src={src} alt={`${project.displayTitle} interface, view ${index + 1}`} width="1280" height="600" loading="lazy" decoding="async" />
            <span className="gallery-caption"><span>View {String(index + 1).padStart(2, '0')}</span><Expand size={14} aria-hidden="true" /></span>
          </Reveal>
        ))}
      </div>
      <dialog ref={dialogRef} className="lightbox" aria-labelledby="lightbox-title" onClose={handleClose}
        onClick={event => { if (event.target === event.currentTarget) close() }}
        onKeyDown={event => {
          if (event.key === 'ArrowRight') { event.preventDefault(); moveImage(1) }
          if (event.key === 'ArrowLeft') { event.preventDefault(); moveImage(-1) }
        }}>
        <div className="lightbox-controls">
          <p id="lightbox-title" aria-live="polite">{project.displayTitle} / {currentImage + 1} of {images.length}</p>
          {images.length > 1 && <><button type="button" onClick={() => moveImage(-1)} aria-label="Previous screenshot"><ChevronLeft aria-hidden="true" /></button><button type="button" onClick={() => moveImage(1)} aria-label="Next screenshot"><ChevronRight aria-hidden="true" /></button></>}
          <button type="button" onClick={close} aria-label="Close image viewer" autoFocus><X aria-hidden="true" /></button>
        </div>
        <img src={images[currentImage]} alt={`${project.displayTitle} interface, view ${currentImage + 1}`} />
      </dialog>
    </section>
  )
}

export function BlueprintPage() {
  const { id } = useParams()
  const project = portfolioProjects.find(item => item.id === Number(id))
  const headingRef = useRef(null)
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true })
  }, [id])
  if (!project) return <NotFound project />

  const notes = project.architecture || {}
  const nextProject = portfolioProjects[(portfolioProjects.indexOf(project) + 1) % portfolioProjects.length]
  return (
    <article className="case-page page-container">
      <Reveal onMount y={8}><Link to="/#projects" className="case-back"><ArrowLeft size={16} aria-hidden="true" />Back to work</Link></Reveal>
      <Reveal className="case-header" onMount delay={0.05}>
        <div>
          <p className="eyebrow text-brand">Project / {String(project.id).padStart(2, '0')}</p>
          <h1 ref={headingRef} tabIndex={-1} className="case-title">{project.displayTitle}</h1>
          <p className="case-summary">{project.summary}</p>
          <div className="hero-actions">
            {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="button">Explore live site <ArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-link">View source <ArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
          </div>
        </div>
        <dl className="case-metadata">
          <div><dt className="eyebrow">Project type</dt><dd>{project.category}</dd></div>
          <div><dt className="eyebrow">Frontend work</dt><dd>{project.focus}</dd></div>
          <div><dt className="eyebrow">Tools used</dt><dd>{project.tech.join(' · ')}</dd></div>
          {project.note && <div><dt className="eyebrow">Project context</dt><dd>{project.note}</dd></div>}
        </dl>
      </Reveal>
      <Reveal className="case-hero" onMount delay={0.1} y={24} style={{ '--project-tone': project.tone }}>
        <img src={project.preview} alt={`${project.displayTitle} website overview`} width="1280" height="600" fetchPriority="high" />
      </Reveal>
      <Reveal as="section" className="case-content" aria-labelledby="implementation-title">
        <div><p className="eyebrow text-muted mb-4">Behind the interface</p><h2 id="implementation-title">How it<br /><span className="serif">comes together.</span></h2></div>
        <div className="case-notes">
          {[
            ['Overview', notes.overview],
            ['Frontend implementation', notes.frontend],
            ['Services & backend', notes.backend],
            ['Data', notes.database],
          ].filter(([, text]) => text).map(([title, text]) => <div className="case-note" key={title}><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </Reveal>
      {[
        ['Features', notes.features],
        ['Challenges', notes.challenges],
        ['Approach & solutions', notes.solutions],
      ].filter(([, items]) => items?.length).map(([title, items]) => (
        <Reveal as="section" className="case-content" key={title} aria-label={title}>
          <h2>{title}</h2><div className="case-notes"><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></div>
        </Reveal>
      ))}
      <ImageGallery key={project.id} project={project} />
      <Reveal className="case-next"><p className="eyebrow text-muted">Next project</p><Link to={`/blueprint/${nextProject.id}`}>{nextProject.displayTitle}<ArrowRight aria-hidden="true" /></Link></Reveal>
    </article>
  )
}

export default BlueprintPage
