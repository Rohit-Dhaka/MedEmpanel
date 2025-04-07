import React from "react";
import Qualtiycare from "../assets/images/Qualtiycare.webp";
import HealthcareStandards from "../assets/images/HealthcareStandards.webp";
import ExcellenceinHealthcare from "../assets/images/ExcellenceinHealthcare.webp";




const Empower = () => {
  return (
    <section className="bg- [#CCCACB] bg-gradient-to-r from-[#CCCACB] via-[#c5a9a9] to-[#d6cdcd]"  id="services">
      <div className="max-w-[1140px] mx-auto px-3 ">        
       <div className="flex flex-col items-center pt-12" data-aos="fade-up">
       <h2 className="text-[#0D0D0D] pt-4 pb-6 sm:text-[48px] text-[32px] font-semibold text-center max-w-[900px]">
          Comprehensive Healthcare Solutions for Your Needs
        </h2>
        <h6 className="text-[#0D0D0D] text-center max-w-[900px]">
          We specialize in Ayushman Empanelment and NABH Accreditation, ensuring
          your healthcare facility meets the highest standards. Our services
          streamline Insurance and TPA Empanelment, making the process efficient
          and hassle-free.
        </h6>
       </div>

        <div className="flex flex-row flex-wrap-reverse mx-[-12px] py-18 items-center">
          <div className="md:w-6/12 px-3 max-md:pt-4" data-aos="fade-right">
            <h2 className="text-[24px] font-semibold text-[#0D0D0D] ">
              Ayushman Empanelment: Partner with Us to Provide Quality
              Healthcare
            </h2>
            <p className="text-gray-700 py-4">
              Join the Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)
              network and offer cashless, paperless treatment to eligible
              beneficiaries. Empaneling with Ayushman Bharat allows healthcare
              providers to deliver high-quality services while ensuring timely
              government reimbursements.
            </p>

            <h3 className="font-semibold text-[#0D0D0D]">
              Benefits of Empanelment:
            </h3>
            <ul className="list-disc  pl-4 text-gray-700">
              <li>Access to a large pool of beneficiaries</li>
              <li>Cashless treatment for patients</li>
              <li>Government-backed reimbursement for services</li>
              <li>Enhanced credibility and increased patient footfall</li>
            </ul>
          </div>
          <div className="md:w-6/12 px-3" data-aos="fade-left">
            <div className=" rounded-lg overflow-hidden">
              <img src={Qualtiycare} alt="Qualtiycare" className="w-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap mx-[-12px] py-18 items-center ">
        <div className="md:w-6/12 px-3">
            <div className=" rounded-lg overflow-hidden" data-aos="fade-right">
              <img src={HealthcareStandards} alt="HealthcareStandards" className="w-full" />
            </div>
          </div>
          <div className="md:w-6/12 px-3 max-md:pt-4" data-aos="fade-left">
            <h2 className="text-[24px] font-semibold text-[#0D0D0D] ">
              Entry-Level NABH Certification: Elevate Your Healthcare Standards
            </h2>
            <p className="text-gray-700 py-4">
              Achieve excellence in healthcare with Entry-Level NABH
              Certification, designed for hospitals and healthcare facilities
              aiming to enhance patient safety and quality of care. This
              certification serves as the first step towards full NABH
              accreditation, helping your facility adopt best practices and
              improve service delivery.
            </p>

            <h3 className="font-semibold text-[#0D0D0D]">
              Benefits of Empanelment:
            </h3>
            <ul className="list-disc  pl-4 text-gray-700">
              <li>Enhanced patient safety and care quality</li>
              <li>Standardized processes and procedures</li>
              <li>Increased credibility and trust among patients</li>
              <li>Foundation for full NABH accreditation</li>
            </ul>
          </div>        
        </div>
        <div className="flex flex-row flex-wrap-reverse mx-[-12px] py-18 items-center">
          <div className="md:w-6/12 px-3 max-md:pt-4" data-aos="fade-right">
            <h2 className="text-[24px] font-semibold text-[#0D0D0D] ">
              Full NABH Certification: Commit to Excellence in Healthcare
            </h2>
            <p className="text-gray-700 py-4">
              Achieve the highest standards in healthcare with Full NABH
              Certification, a mark of quality and patient safety for hospitals
              and healthcare facilities. This accreditation ensures your
              facility meets comprehensive national benchmarks for healthcare
              delivery, enhancing patient care and organizational efficiency.
            </p>

            <h3 className="font-semibold text-[#0D0D0D]">
              Benefits of Empanelment:
            </h3>
            <ul className="list-disc  pl-4 text-gray-700">
              <li>Assurance of high-quality patient care and safety</li>
              <li>
                Compliance with national and international healthcare standards
              </li>
              <li>Enhanced credibility and patient trust</li>
              <li>Improved operational efficiency and staff performance</li>
            </ul>
          </div>
          <div className="md:w-6/12 px-3" data-aos="fade-left">
            <div className=" rounded-lg overflow-hidden">
              <img src={ExcellenceinHealthcare} alt="ExcellenceinHealthcare" className="w-full" />
            </div>
          </div>
        </div>
      </div>


      
    </section>
    
  );
};

export default Empower;
