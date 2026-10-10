import { ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <p>© {new Date().getFullYear()} Ozioma Okafor. Thoughtfully designed & built.</p>
        <Link to="/#hero">Back to the top <ArrowUp size={14} aria-hidden="true" /></Link>
      </div>
    </footer>
  )
}
