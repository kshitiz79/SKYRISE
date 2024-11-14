import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative items-center justify-center bg-gray-100">
      {/* Hero Image */}
      <div className="relative lg:h-[45rem] w-full h-[19rem] flex justify-center bg-orange-50 ">
        <img 
          src="./banner.jpg" 
          alt="Hero" 
          className="rounded-lg lg:max-w-full    object-cover w-full h-[20rem] sm:h-auto  "
        />

        {/* Form Overlay */}
       
      </div>
    </section>
  );
};

export default HeroSection;
