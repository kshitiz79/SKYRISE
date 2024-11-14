import React from 'react';

const PlanSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-orange-50 px-6 py-16 lg:px-16">
      {/* Text Section */}
      <div  className="lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-3xl font-semibold text-orange-950 mb-8 text-center lg:text-center">
          Project Amenities & Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto p-6">
  {/* Amenities */}
  <div className="bg-orange-200 shadow-gray-800 shadow-lg rounded-lg p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Amenities</h3>
    <ul className="text-black space-y-2 list-inside list-disc">
      <li>Party Hall</li>
      <li>Gymnasium</li>
      <li>Power Back Up</li>
      <li>Passenger/Service Lift</li>
      <li>24/7 Security</li>
      <li>Rainwater Harvesting</li>
      <li>CCTV Cameras</li>
      <li>Children Play Area</li>
    </ul>
  </div>

  {/* Highlights/Proximity */}
  <div className="bg-orange-200 shadow-gray-800 shadow-lg rounded-lg p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Highlights/Proximity</h3>
    <ul className="text-black space-y-2 list-inside list-disc ">
    <li>Azim Premji University 1.5 KM</li>
    <li>Proposed Wipro Office 0.5 KM</li>
      <li>Prime Location at Sarjapur</li>
    
      <li>Other Office Within 2 Km</li>
     
     
      
      <li>Hospitals within 2 KM</li>
      <li>D MART within 1.5 KM</li>
      <li>Schools within 1 KM</li>
      <li>Malls within 2 Km</li>
     
    </ul>
  </div>
</div>

      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="./plan.png"
          alt="Floor Plan"
          className="rounded-lg shadow-2xl w-3/6 h-auto"
        />
      </div>
    </section>
  );
};

export default PlanSection;
