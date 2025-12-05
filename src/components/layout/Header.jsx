import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-scroll'

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-bg-primary)]/90 backdrop-blur-md border-b border-[var(--color-border-light)] py-4 shadow-soft'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="hero"
          smooth
          duration={500}
          className="text-2xl font-semibold tracking-tight cursor-pointer text-white"
        >
          Ozioma<span className="accent-text">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map(({ label, id }) => (
            <Link
              key={id}
              to={id}
              smooth
              duration={500}
              className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors tracking-wide uppercase cursor-pointer"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden text-white"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[var(--color-accent-red)]" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="md:hidden overflow-hidden bg-[var(--color-bg-primary)]/95 backdrop-blur-sm border-t border-[var(--color-border-light)]"
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navItems.map(({ label, id }) => (
            <Link
              key={id}
              to={id}
              smooth
              duration={500}
              onClick={() => setIsOpen(false)}
              className="py-2 text-lg text-[var(--color-text-muted)] hover:text-white transition-colors border-b border-[var(--color-border-light)] last:border-none cursor-pointer"
            >
              {label}
            </Link>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  )
}
