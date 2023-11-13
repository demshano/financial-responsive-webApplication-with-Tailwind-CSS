import React from 'react'
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Analytics } from './components/Analytics'
import { NewsLetter } from './components/NewsLetter'
import { PricePanel } from './components/PricePanel'

export const App = () => {
  return (
  
    <div>
      <NavBar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <PricePanel />
    </div>

  )
}
