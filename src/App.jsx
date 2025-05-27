import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Element } from 'react-scroll';

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
          <div
            className="absolute top-0 h-screen w-screen -z-10 
                 bg-neutral-950 
                 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="w-full p-5 sm:p-0">
          <Navbar />
          <HeroSection />
          <Element name='skills'><Technologies /></Element>
          <Element name='projects'><Projects /></Element>
          <Element name='contact'><Contact /></Element>
          <Footer />
        </div>
      </div>

    </>
  )
}

export default App
