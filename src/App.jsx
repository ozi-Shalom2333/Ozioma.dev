import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { LoadingSpinner } from './components/shared/LoadingSpinner'
import { RouteEffects } from './components/shared/RouteEffects'

const BlueprintPage = lazy(() => import('./pages/BlueprintPage'))

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <RouteEffects />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blueprint/:id" element={<BlueprintPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
