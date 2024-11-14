import React from "react";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";


const Footer = () => {
  return (
    <>
      <div className="bg-white text-black">
        <div className="flex flex-col md:flex-row items-center md:justify-between p-4 max-w-screen  mx-auto">
          {/* Left Side */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 lg:px-16">
            <img src="./logo3.png" alt="Property Orbits Logo" className="w-48 mb-4" />
            <div className="text-center md:text-left space-y-2">
             
             
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center md:items-end space-y-2 lg:px-16">
            <span className="font-semibold text-lg">Address:</span>
            <p className="text-center md:text-right text-sm ">
            SKY SPRING <br /> 2 & 3 BHK Luxurious Apartments<br />
            Sarjapura road,  Sompura gate <br/>  Bangalore, India


            </p>
            {/* <a href="/privacy-policy" className="text-white font-semibold mt-4 hover:underline">
              Privacy & Policy
            </a> */}
             <a href="mailto:sales@propertyorbits.com" className="flex items-center text-black hover:underline">
                <SiGmail className="mr-2" aria-label="Email Icon" /> info@skyrisedevelopers.in
              </a>
              <a href="tel:+919873961111" className="flex items-center text-black hover:underline">
                <IoCall className="mr-2" aria-label="Phone Icon" /> +91 8095132132
              </a>
          </div>
        </div>
      </div>

      <div className="bg-white text-black font-bold flex flex-col md:flex-row items-center md:justify-between h-auto md:h-12 px-4 md:px-20 py-4 md:py-0">
  <a
    // href="https://propertyorbits.com/"
    className="text-center hover:underline sm:mb-2 "
    target="_blank"
    rel="noopener noreferrer"
  >
    © 2024 Skyrise Developers
    <br  /> 
    <span>All Rights Reserved</span>
  </a>
  <a
    href="https://rbshstudio.com"
    className="flex items-center hover:underline   md:mt-0"
    target="_blank"
    rel="noopener noreferrer"
  >
    Powered by RBSH Studio
    {/* Uncomment if you want to add an icon */}
    {/* <img src={shareIcon} alt="Share Icon" className="w-5 h-5 ml-2" /> */}
  </a>
</div>

    </>
  );
};

export default Footer;
