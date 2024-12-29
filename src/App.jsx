import React from 'react'
import ParticleBackground from './Components/Particle'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Eduction from './Components/Eduction'
import Contact from './Components/Contact'
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"


const App = () => {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <Eduction />
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
