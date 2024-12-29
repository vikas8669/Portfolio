import React from 'react'
import Navbar from './components/Navbar'
import ParticleBackground from './components/Particle'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Eduction from './components/Eduction'
import Contact from './Components/Contact'
import Hero from "./Components/Hero"


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
