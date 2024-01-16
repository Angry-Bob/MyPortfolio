import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {


  return (
    <>
    <Nav />
    <About />
    <Projects />
    <Skills />
    <Contact />
    </>
  )
}

export default App
