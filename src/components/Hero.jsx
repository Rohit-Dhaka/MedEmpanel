import React from 'react'
import HeroImg from '../assets/images/Hero.webp'
import Header from './Header'


const Hero = () => {
  return (
    <header className='bg- [#CCCACB] bg-gradient-to-r from-[#CCCACB] via-[#c5a9a9] to-[#d6cdcd] relative overflow-hidden'>
        <div className="max-w-[1140px]  mx-auto px-3">
        <Header/>
          <div className=" flex flex-col  items-center pb-20 pt-20" id='home' data-aos="fade-up">
            <h1 className='text-[#0D0D0D]  font-bold  sm:text-[64px] text-[48px] text-center max-w-[900px]'>Empowering Healthcare <span className='text-[#074ba5]'>Solutions for Your Needs</span></h1>
            <h6 className='text-[#0D0D0D] text-center  pt-6 max-w-[768px]'>Discover a range of comprehensive healthcare services designed to enhance patient care and streamline hospital operations. From insurance and TPA empanelment to staffing solutions, we are here to support your healthcare journey.</h6>
          </div>
          <div className=" shadow-2xl" data-aos="fade-up">
            <img src={HeroImg} alt="HeroImg" className='w-full' />
          </div>


        </div>
    </header>
  )
}

export default Hero