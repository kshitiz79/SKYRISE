import React from 'react';

const ProjectLocation = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-orange-50 px-4 py-16 lg:px-16">
      {/* Map Section */}
      <div className="w-full lg:w-1/2 h-[30rem] mb-8 lg:mb-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1505633771115!2d77.68341781519466!3d12.895257990902843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13836276a3a7%3A0xe8a988660a7a8f98!2sSarjapur%20Rd%2C%20Bengaluru%2C%20Karnataka%2056035%2C%20India!5e0!3m2!1sen!2sin!4v1699594312611!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-lg"
          referrerPolicy="no-referrer-when-downgrade"
          title="Project Location Map"
        ></iframe>
      </div>

      {/* Address Section */}
      <div id="location" className="w-full lg:w-1/2 text-center lg:text-left px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-teal-800 mb-4">Project Location</h2>
        <p className="text-lg font-medium text-gray-700 mb-6">
          SKY SPRING (Sky Rise Developers) offers 2 & 3 BHK luxurious apartments located at Sarjapur Road, Sampuragate, Bangalore, India. Enjoy easy access to various landmarks and essential amenities.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold">Proximity:</span><br />
          - D MART: 1 KM<br />
          - ATTIBELE: 10 KM<br />
          - SARJAPUR: 1.5 KM<br />
          - WIPRO: 3 KM<br />
          - DPS: 6 KM<br />
          - IBO: 2 KM<br />
          - AZIM PREMJI UNIVERSITY: 1 KM<br />
          - PRESTIGE CITY: 4 KM<br />
          - INTERNATIONAL SCHOOL: 5 KM
        </p>
        <p className="text-lg font-medium text-gray-700">
          <span className="font-semibold">Contact Us:</span> +91 80 95 132 132 / +91 80 95 273 273 / +91 81 97 480 003
        </p>
      </div>
    </section>
  );
};

export default ProjectLocation;
