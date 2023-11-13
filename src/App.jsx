import React from 'react'
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Analytics } from './components/Analytics'
import { NewsLetter } from './components/NewsLetter'
import { PricePanel } from './components/PricePanel'
import { Footer } from './components/Footer'

export const App = () => {
  return (
  
    <div>
      <NavBar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <PricePanel />
      <Footer />
    </div>

  )
}
