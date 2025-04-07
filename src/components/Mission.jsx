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
            <p className=''>In our commitment to excellence, we create value across these diverse sectors. In Healthcare, we seek to improve patient outcomes and make healthcare more accessible. In Education, we aim to revolutionize learning experiences, empowering individuals with knowledge. In Finance, we strive to enhance financial services, making them more inclusive and efficient. In Marketing, we harness the power of data and AI to drive innovation and growth.</p>
        </div>
      </div>
    </div>
    </section>

  )
}

export default Mission