import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'

import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

import { Home } from './pages/Home'
import { BlueprintPage } from './pages/BlueprintPage'

import { LoadingSpinner } from './components/shared/LoadingSpinner'

export default function App() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blueprint/:id" element={<BlueprintPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  )
}
