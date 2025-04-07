import React from "react";

const timelineData = [
  {
    title: "Insurance Empanelment",
    description:
      "Join the network of trusted healthcare providers and offer cashless, hassle-free treatment to insured patients.",
    benefits: [
      "Cashless Treatment for Patients",
      "Broaden Patient Base",
      "Timely Reimbursements",
      "Enhanced Credibility",
    ],
  },
  {
    title: "Rohini Registration",
    description:
      "Ensure your healthcare facility meets all regulatory standards with Rohini Registration for credibility and efficiency.",
    benefits: [
      "Regulatory Compliance",
      "Enhanced Credibility",
      "Operational Efficiency",
      "Access to Government Schemes",
    ],
  },
  {
    title: "Staffing & Hospital Credentialing",
    description:
      "Recruit skilled healthcare professionals and ensure credential verification for a highly qualified team.",
    benefits: [
      "Staff Recruitment",
      "Credential Verification",
      "Onboarding & Training",
      "Compliance Management",
    ],
  },
];

const Timeline = () => {
  return (
    <section className="bg-[#CCCACB] bg-gradient-to-r from-[#CCCACB] via-[#c5a9a9] to-[#d6cdcd]">
      <div className="max-w-[1140px] mx-auto px-3 pb-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Healthcare Service 
        </h2>
        <div className="relative">
          
          <div className="absolute md:left-1/2 transform -translate-x-1/2 w-1 bg-black h-full"></div>
          
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between w-full pb-12 md:flex ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } flex-col text-center md:text-left`}
            >
              
              <div className="absolute md:left-1/2 left-[0px] transform -translate-x-1/2 w-6 h-6 bg-black rounded-full"></div>

              
              <div className="w-full md:w-5/12 md:ml-6 p-6 bg-[#CCCACB] bg-gradient-to-r from-[#CCCACB] via-[#c5a9a9] to-[#d6cdcd] shadow-lg rounded-lg hover:shadow-xl transition-all duration-300" data-aos="fade-right">
                <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-700 mt-2">{item.description}</p>
                <ul className="md:list-disc list-inside mt-3 text-gray-700">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="text-gray-600">{benefit}</li>
                  ))}
                </ul>
              </div>

              
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
