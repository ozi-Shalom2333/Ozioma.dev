export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 border-t border-[var(--color-border-light)] bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <p className="text-sm text-[var(--color-text-muted)]">
          © {year} Ozioma.dev — Built with 
          <span className="accent-text"> React</span>, 
          <span className="accent-text"> Tailwind</span>, 
          and precision.
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="#hero"
            className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#contact"
            className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </footer>
  )
}
