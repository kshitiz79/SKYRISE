import React from 'react'
import { IoCall } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';
export const ContactUs = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-orange-50 p-8 lg:p-16">
    {/* Hero Section */}
    <div className="w-full max-w-5xl text-center mb-12">
      <h1 className="text-4xl font-bold text-teal-800 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700">
        We’d love to hear from you! Reach out to us for more information about SKY SPRING (Sky Rise Developers) and our luxurious apartments located on Sarjapur Road, Bangalore.
      </p>
    </div>

    {/* Contact Information */}
    <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden ">
      <div className="flex flex-col lg:flex-row items-center  ">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col items-center lg:items-start bg-white p-4 lg:w-1/2 rounded-lg  ">
 <div className='lg:ml-32'>
 <div className="flex flex-col items-center lg:items-start bg-white p-6 lg:w-1/2 ">
  <img src="./logo3.png" alt="Property Orbits Logo" className="w-40 mb-4" />
  <h2 className="text-2xl font-semibold text-teal-800 mb-4">Get In Touch</h2>
  <div className="space-y-3">
    <a href="tel:+918095132132" className="flex items-center text-gray-800 hover:text-teal-800 transition-colors duration-200">
      <IoCall className="mr-2 text-teal-600" aria-label="Phone Icon" /> +91 80 95 132 132
    </a>
    <a href="tel:+918095273273" className="flex items-center text-gray-800 hover:text-teal-800 transition-colors duration-200">
      <IoCall className="mr-2 text-teal-600" aria-label="Phone Icon" /> +91 80 95 273 273
    </a>
    <a href="mailto:info@skyrisedevelopers.in" className="flex items-center text-gray-800 hover:text-teal-800 transition-colors duration-200">
      <SiGmail className="mr-2 text-teal-600" aria-label="Email Icon" /> info@skyrisedevelopers.in
    </a>
  </div>
</div>

 </div>
</div>


        {/* Right Side - Map and Address */}
        <div className="lg:w-1/2 p-6 bg-gray-100">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">Our Location</h2>
          <p className="text-lg text-gray-700 mb-6">
            SKY SPRING offers 2 & 3 BHK luxurious apartments at Sarjapur Road, Sampuragate, Bangalore. Enjoy easy access to various landmarks and essential amenities.
          </p>
          <div className="text-gray-700 mb-4">
            <strong>Proximity:</strong><br />
            D MART: 1 KM, ATTIBELE: 10 KM, SARJAPUR: 1.5 KM, WIPRO: 3 KM, DPS: 6 KM, IBO: 2 KM, AZIM PREMJI UNIVERSITY: 1 KM, PRESTIGE CITY: 4 KM, INTERNATIONAL SCHOOL: 5 KM
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1505633771115!2d77.68341781519466!3d12.895257990902843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13836276a3a7%3A0xe8a988660a7a8f98!2sSarjapur%20Rd%2C%20Bengaluru%2C%20Karnataka%2056035%2C%20India!5e0!3m2!1sen!2sin!4v1699594312611!5m2!1sen!2sin"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
            referrerPolicy="no-referrer-when-downgrade"
            title="Project Location Map"
          ></iframe>
        </div>
      </div>
    </div>

    {/* Additional Images Section */}
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
      <img src="./image3.png" alt="Apartment Interior" className="rounded-lg shadow-lg h-96"  />
      <img src="./image4.png" alt="Sky Spring Exterior" className="rounded-lg shadow-lg h-96" />
      <img src="./image5.png" alt="Community Area" className="rounded-lg shadow-lg h-96 w-96" />
    </div>
  </section>
  )
}
