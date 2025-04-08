import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-[1140px] mx-auto px-3">
        <div className="flex flex-wrap flex-row mx-[-12px] py-20">
          <div className="lg:w-3/12 px-3">
            <h5 className="text-white text-[25px] font-semibold">
              ClaimMantra
            </h5>
            <h6 className="text-white pt-8">
              ClaimMantra is renowned for its services, offering NABH/NABL/ISI
              Certification & Training. We ensure efficient, timely and
              cost-effective Quality services to clients across India.
            </h6>
          </div>
          <div className="lg:w-4/12 md:w-4/12 px-3  lg:pt-0 pt-12">
            <h5 className="text-white text-[25px] font-semibold">Services</h5>
            <ul className="pt-8">
              <li className="pt-1"><a href="" className="text-white  text-[16px]">Ayushman empanelment </a></li>
              <li className="pt-1"><a href="" className="text-white  text-[16px]">Entry level nabh </a></li>
              <li className="pt-1"><a href="" className="text-white  text-[16px]"> Full nabh </a></li>
              <li className="pt-1"><a href="" className="text-white  text-[16px]">Insurance empanelment  </a></li>
              <li className="pt-1"><a href="" className="text-white  text-[16px]"> TPA empanelment </a></li>
              <li className="pt-1"><a href="" className="text-white  text-[16px]">NABL </a></li>
              <li className="pt-1"><a href="" className="text-white  text-[16px]">Hospital Software </a></li>
              <li className="pt-1"><a href="" className="text-white  text-[16px]">Rohini registration  </a></li>
              <li className="pt-1"><a href="" className="text-white  text-[16px]"> Staffing & Hospital crediantial setup information</a></li>
            </ul>
          </div>
          <div className="lg:w-2/12 md:w-4/12 px-3 lg:pt-0 pt-12">
            <h5 className="text-white text-[25px] font-semibold">
              Company
            </h5>
            <div className="text-white pt-8">
            <ul className="flex flex-col gap-4">
            {["Home", "Our Services", "More Info", "Contact Us"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[16px] font-medium text-white  "
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
            </div>
          </div>

          <div className="lg:w-3/12 md:w-4/12 px-3 lg:pt-0 pt-12">
            <h5 className="text-white text-[25px] font-semibold">Contact Us</h5>
            <div className="pt-10 flex flex-col gap-4">
              <div className="flex gap-5 items-center">
                <a
                  href="https://www.facebook.com/people/MedEmpanel/61574535964668/?rdid=wMi0Iz0NYa0c3TX3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15p2KXqEPM%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl transition-transform transform hover:scale-125 hover:text-blue-500 duration-300 bg-white rounded-full h-[40px] w-[40px]  flex items-center justify-center"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/people/MedEmpanel/61574535964668/?rdid=wMi0Iz0NYa0c3TX3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15p2KXqEPM%2F"
                  className="text-white text-[20px]"
                >
                  Fackbook
                </a>
              </div>

              <div className="flex gap-5 items-center">
                <a
                  href="https://www.instagram.com/medempanel?igsh=cW14c29zdDZxOGJx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl transition-transform transform hover:scale-125 hover:text-pink-500 duration-300 bg-white rounded-full  h-[40px] w-[40px]  flex items-center justify-center"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.instagram.com/medempanel?igsh=cW14c29zdDZxOGJx"
                  target="_blank"
                  className="text-white text-[20px]"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
