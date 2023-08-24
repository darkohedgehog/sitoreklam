import React from 'react';
import { About, Contact, Experience, Footer, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const Home = () => {
  return (
    <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer />         
        </div>
      </div>      
  )
}

export default Home;