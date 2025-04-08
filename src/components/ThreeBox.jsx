import React from "react";

import { ShieldCheck, Users, CreditCard, CheckCircle } from "lucide-react";
import { Server, Activity, FileText, BarChart3 } from "lucide-react";
import { Microscope, Globe, BarChart } from "lucide-react";
import Healthinsurance from "../assets/images/Healthinsurance.webp";
import Lab from "../assets/images/Lab.webp";
import Hospitalsoftware from "../assets/images/Hospitalsoftware.webp";
const ThreeBox = () => {
  return (
    <section className="bg-[#C CCACB] bg-gradient-to-r from-[#CCCACB] via-[#c5a9a9] to-[#d6cdcd]  w-full " id="services">
      <div className="max-w-[1140px] px-3 mx-auto">
      <h2 className="text-4xl font-bold text-center py-18 text-gray-900">
      Healthcare Facility
        </h2>
        <div className="flex flex-wrap flex-row mx-[-12px] pb-24">
          <div className="lg:w-4/12 sm:w-6/12  px-3 " data-aos="fade-right">
            <div className=" px-4 py-6  bg-[#CCCACB] hover:bg-[#d6cdcd] duration-300 ease-linear hover:-translate-y-2  group  rounded-2xl shadow-xl h-full ">
              <div className=" rounded-lg overflow-hidden">
                <img src={Healthinsurance} alt="Healthinsurance" className="w-full group-hover:scale-105 duration-300" />
              </div>
              <div className="flex items-center space-x-3 pt-4">
                <ShieldCheck className="text-blue-600 w-10 h-10" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  TPA Empanelment
                </h2>
              </div>
              <p className="text-gray-600 mt-2">
                Become a trusted provider with Third-Party Administrators (TPAs)
                and offer seamless, cashless treatment for insured patients.
              </p>

              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <Users className="text-blue-500 w-5 h-5 mr-2" />
                  <span>Access to more insured patients</span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="text-blue-500 w-5 h-5 mr-2" />
                  <span>Cashless & paperless treatment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-blue-500 w-5 h-5 mr-2" />
                  <span>Faster claim settlements</span>
                </div>
                
              </div>
            </div>
          </div>

          <div className="lg:w-4/12 sm:w-6/12  px-3 sm:pt-0 pt-6" data-aos="fade-up">
            <div className="  px-4 py-6  bg-[#CCCACB] hover:bg-[#d6cdcd] duration-300 ease-linear hover:-translate-y-2  group  rounded-2xl shadow-xl h-full ">
              <div className=" rounded-lg overflow-hidden">
                <img src={Lab} alt="lab" className="w-full group-hover:scale-105 duration-300" />
              </div>
              <div className="flex items-center space-x-3 pt-4">
                <Microscope className="text-green-600 w-10 h-10" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  NABL Accreditation
                </h2>
              </div>
              <p className="text-gray-600 mt-2">
                Elevate your laboratory's credibility by adhering to the highest
                testing and calibration standards with NABL accreditation.
              </p>

              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <Globe className="text-green-500 w-5 h-5 mr-2" />
                  <span>International compliance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                  <span>High-quality and accurate testing</span>
                </div>
                <div className="flex items-center">
                  <BarChart className="text-green-500 w-5 h-5 mr-2" />
                  <span>Improved lab processes</span>
                </div>
              </div>

             
            </div>
          </div>

          <div className="lg:w-4/12 sm:w-6/12  px-3  mx-auto lg:pt-0 pt-6" data-aos="fade-left">
            <div className=" px-4 py-6  bg-[#CCCACB] hover:bg-[#d6cdcd] duration-300 ease-linear hover:-translate-y-2  group  rounded-2xl shadow-xl h-full ">
              <div className=" rounded-lg overflow-hidden">
                <img src={Hospitalsoftware} alt="Hospitalsoftware" className="w-full group-hover:scale-105 duration-300" />
              </div>
              <div className="flex items-center space-x-3 pt-4">
                <Server className="text-purple-600 w-10 h-10" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Hospital Software
                </h2>
              </div>
              <p className="text-gray-600 mt-2">
                Transform hospital operations with cutting-edge software for
                patient management, billing, and analytics.
              </p>

              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <Activity className="text-purple-500 w-5 h-5 mr-2" />
                  <span>Seamless patient management</span>
                </div>
                <div className="flex items-center">
                  <FileText className="text-purple-500 w-5 h-5 mr-2" />
                  <span>Automated billing & insurance</span>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="text-purple-500 w-5 h-5 mr-2" />
                  <span>Advanced analytics & reporting</span>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeBox;
