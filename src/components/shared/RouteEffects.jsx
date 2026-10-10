import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { portfolioProjects } from '../../data/projectPresentation'

export function RouteEffects() {
  const { pathname, hash, key } = useLocation()
  const previousPath = useRef(null)
  useEffect(() => {
    const project = portfolioProjects.find(item => pathname === `/blueprint/${item.id}`)
    document.title = pathname === '/' ? 'Ozioma.dev | Frontend Engineer' : project ? `${project.displayTitle} | Ozioma.dev` : 'Page not found | Ozioma.dev'
    let frame
    const samePage = previousPath.current === pathname
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    previousPath.current = pathname
    if (hash) {
      let attempts = 0
      const scroll = () => {
        const target = document.getElementById(hash.slice(1))
        if (target) {
          target.scrollIntoView({ behavior: samePage && !reduceMotion ? 'smooth' : 'instant', block: 'start' })
          target.focus({ preventScroll: true })
        } else if (++attempts < 30) frame = requestAnimationFrame(scroll)
      }
      frame = requestAnimationFrame(scroll)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key])
  return null
}
