


import React, { useState, useEffect } from "react";
// import Logo from '../assets/images/Logo.png'
const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [show]);

  const handleNavLinkClick = () => {
    setShow(false); 
  };

  return (
    <nav className="bg- [#CCCACB] bg-gradient-to-r  relative ">
      <div className=" max-w-[1140px] mx-auto px-3">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="">
            {/* <img src={Logo} alt="logo" className=" w-100 h-[100px]" /> */}
            Logo
          </a>
          <div
            className={`flex gap-[45px] items-center max-md:absolute max-md:w-full 
                        max-md:h-screen max-md:top-0 
                        max-md:bg- [#CCCACB] bg-gradient-to-r  max-md:backdrop-blur-xl max-md:items-center z-10 max-md:justify-center 
                        duration-300 max-md:flex-col ${show ? "left-0" : "left-[-100%]"}`}
          >
            <ul className="flex gap-[36px] max-md:flex-col max-md:justify-center max-md:items-center">
              {["Home", "Services", "More Info", "Contact Us"].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[16px] font-medium text-[#0D0D0D] hover:text-[#0D0D0D] duration-300 relative 
                               after:absolute after:bottom-[-1px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] 
                               after:w-0 after:duration-300  after:bg-black after:hover:left-0 
                               after:hover:translate-x-0 after:hover:w-full after:rounded-[10px] font-poppins"
                    onClick={handleNavLinkClick}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
          </div>

          <div
            className="menuicon z-10 cursor-pointer max-md:block hidden"
            onClick={() => setShow(!show)}
            aria-label="Toggle menu"
            role="button"
          >
            <span
              className={`w-[25px] h-[2px] bg-[#0D0D0D] block transition-transform duration-300 ${
                show ? "rotate-45 translate-y-[10px]" : ""
              }`}
            ></span>
            <span
              className={`w-[25px] h-[2px] bg-[#0D0D0D] block my-2 transition-opacity duration-300 ${
                show ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-[25px] h-[2px] bg-[#0D0D0D] block transition-transform duration-300 ${
                show ? "-rotate-45 -translate-y-[10px]" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
