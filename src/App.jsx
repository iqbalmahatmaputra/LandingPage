import { useState } from 'react'
import './App.css'
import CallToAction from './components/CTA'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Facility from './components/Facility'
import ActivitySchool from './components/ActivitySchool'
function App() {

  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Facility/>
      {/* <ActivitySchool/> */}
       <CallToAction />
    </>
  )
}

export default App
