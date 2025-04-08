import './App.css'
import Empower from './components/Empower'
import Footer from './components/Footer'

import Hero from './components/Hero'
import ThreeBox from './components/ThreeBox'
import Timeline from './components/Timeline'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Mission from './components/Mission'
import AyushmanInfo from './components/AyushmanInfo'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once
    });
  }, []);
  

  return (
    <>    
      
    <Hero/>
    <Mission/>
    <Empower/>
    <ThreeBox/>
    <Timeline/>
    <AyushmanInfo/>
    
    <Footer/>
    
      
    </>
  )
}

export default App
