import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Work', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Capabilities', id: 'skills' },
  { label: 'Let’s talk', id: 'contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef(null)
  useEffect(() => {
    if (!isOpen) return
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    window.addEventListener('resize', closeOnResize)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('resize', closeOnResize)
    }
  }, [isOpen])
  return (
    <header className="site-header">
      <div className="page-container">
        <div className="header-inner">
          <Link to="/#hero" className="wordmark" onClick={() => setIsOpen(false)} aria-label="Ozioma.dev home">
            Ozioma<span>.dev</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(({ label, id }) => (
              <Link key={id} to={`/#${id}`} className={id === 'contact' ? 'nav-contact' : undefined}>
                {label}{id === 'contact' && <ArrowUpRight size={15} aria-hidden="true" />}
              </Link>
            ))}
          </nav>
          <button ref={toggleRef} type="button" className="menu-toggle" onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isOpen} aria-controls="mobile-navigation">
            {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!isOpen}>
          {navItems.map(({ label, id }, index) => (
            <Link key={id} to={`/#${id}`} onClick={() => setIsOpen(false)}>
              {label}<span className="eyebrow" aria-hidden="true">0{index + 1}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
