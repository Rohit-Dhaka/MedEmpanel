import React from 'react'
import Misson from '../assets/images/Misson.jpg'

const Mission = () => {
  return (
    <section className="bg-[#C CCACB] bg-gradient-to-r from-[#CCCACB] via-[#c5a9a9] to-[#d6cdcd]  w-full"  id='about'>
    <div className="max-w-[1140px] px-3 mx-auto">
      <div className="flex flex-wrap flex-row mx-[-12px] py-24 items-center">
        <div className=" md:w-6/12  px-3 " data-aos="fade-up">
        <div className=" rounded-xl overflow-hidden">

        <img src={Misson} alt="" />
        </div>
        </div>
        <div className=" md:w-6/12  px-3 " data-aos="fade-up">
            <h2 className='text-[32px] font-semibold '>Our Mission</h2>
            <p className=''>Our mission is to provide compassionate, high-quality, and accessible healthcare to our community. We are committed to promoting wellness, preventing illness, and restoring health by delivering patient-centered care through innovation, integrity, and excellence. We strive to treat every individual with dignity and respect, ensuring a safe and healing environment for patients, families, and staff alike</p>
        </div>
      </div>
    </div>
    </section>

  )
}

export default Mission