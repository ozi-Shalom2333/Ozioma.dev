import { Suspense } from 'react'

import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Contact } from './components/sections/Contact'

import { LoadingSpinner } from './components/shared/LoadingSpinner'

export default function App() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <Hero />

        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
          <About />
          <Skills />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  )
}
