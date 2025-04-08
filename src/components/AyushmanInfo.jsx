import React from "react";

import GraphicOne from "../assets/images/GraphicOne.jpeg";
import GraphicTwo from "../assets/images/GraphicTwo.jpeg";

import { FaHospitalAlt, FaIdCard, FaNotesMedical } from "react-icons/fa";
import Counter from "./Counter";

const AyushmanInfo = () => {
  return (
    <section className="bg-gradient-to-r from-[#CCCACB] via-[#c5a9a9] to-[#d6cdcd]">
       
      
      
      
      <div className="max-w-[1140px] mx-auto px-3 pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-purple-700 mb-10">
          Ayushman Bharat Empanelment Highlights
        </h2>

        <div className="">
          <div className="bg-white rounded-2xl  py-10 " >
          <div className="flex flex-row flex-wrap mx-[-12px]">
            <div className="md:w-4/12 sm:w-6/12 w-full px-3 sm:border-r-2 sm:border-solid sm:border-gray-400">
              <div className="flex  items-center flex-col">
                <div className="flex justify-center  mb-2">
                  <div className="bg-red-100 p-3 rounded-full">
                    <FaHospitalAlt className="text-red-500 text-xl" />
                </div>
                </div>
               <div className="flex  items-center">
               <Counter targetNumber={15000} duration={1000}  className="text-2xl font-bold text-gray-900" />
               <h3 className="text-2xl font-bold text-gray-900">+</h3>
               </div>
                <p className="text-gray-600">All India </p>
                <p className="text-gray-600">hospitals empanelled</p>
              </div>
            </div>

            <div className="md:w-4/12 sm:w-6/12 w-full px-3 md:border-r-2 md:border-solid md:border-gray-400 max-sm:pt-10">
            <div className="flex flex-col items-center">
            <div className="flex justify-center mb-2">
                <div className="bg-red-100 p-3 rounded-full">
                  <FaIdCard className="text-red-500 text-xl" />
                </div>
              </div>
             <div className="flex items-center">
             <Counter targetNumber={400} duration={1500} />
             <h3 className="text-2xl font-bold text-gray-900">Cr</h3>
             </div>
              <p className="text-gray-600 text-center">Ayushman cards created - around</p>
            </div>
            </div>

            <div className="md:w-4/12 sm:w-6/12 w-full px-3 max-md:mx-auto max-md:pt-10">
              <div className="flex flex-col items-center">
              <div className="flex justify-center mb-2">
                <div className="bg-red-100 p-3 rounded-full">
                  <FaNotesMedical className="text-red-500 text-xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">PMJAY</h3>
              <p className="text-gray-600 text-center">
                Under Ayushman Bharat Pradhan Mantri Jan Arogya Yojana
              </p>
              </div>
            </div>
          </div>
          </div>

          <div className=" mt-5 sm:py-5 py-2 bg-white rounded-xl  " data-aos="fade-up">
            <img src={GraphicOne} alt="" className="w-full  rounded-lg" />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 mt-5" data-aos="fade-up">
            <div className="mt-4 text-gray-800">
              <p className="font-semibold">MedEmpanel Services:</p>
              <ul className="list-disc ml-5 mt-2">
                <li>Guiding institutions through empanelment</li>
                <li>Smooth and hassle-free registration</li>
                <li>Affordable, quality healthcare to millions</li>
                <li>Fast-tracking approvals & compliance</li>
              </ul>
              <p className="mt-3 text-blue-600 font-medium">
                Contact: +91 89509-60627 |  www.medempanel.com
              </p>
            </div>
          </div>
          <div className=" mt-5 sm:p-6 p-2 bg-white rounded-xl" data-aos="fade-up">
            <img src={GraphicTwo} alt="" className=" rounded-lg w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AyushmanInfo;
