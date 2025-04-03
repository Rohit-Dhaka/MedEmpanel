import React from "react";


const Footer = () => {
  return (
   <footer className="bg-black">
    
    <div className="max-w-[1140px] mx-auto px-3">
    <ul className="flex gap-8 justify-center  py-20 flex-wrap">
              {["Home", "Our Services", "More Info", "Contact Us"].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[16px] font-medium text-white  "
                    
                  >
                    {item}
                  </a>
                </li>
              ))}
              
            </ul>
            
            <div className="w-full h-[1px] bg-[#AFAFAF]"></div>      
            <div className="flex justify-center">
              <h6 className="text-white  py-6 text-center">© 2025 HealthCare. All rights reserved.</h6>
            </div>
    </div>

   </footer>
  );
};

export default Footer;
