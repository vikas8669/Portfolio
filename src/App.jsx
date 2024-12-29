import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParticleBackground from './components/Particle'
import About from './components/About'
import Projects from './components/Projects'

import Contact from './components/Contact'
import Footer from './components/Footer'
import Eduction from './components/Eduction'



const App = () => {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <Eduction />
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
