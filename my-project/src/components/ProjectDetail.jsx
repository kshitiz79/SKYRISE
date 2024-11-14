import React from 'react';

const ProjectDetails = () => {
  return (
    <section id="plan" className="flex flex-col items-center py-16 bg-orange-50 px-4">
      <h2 className="text-2xl font-semibold text-orange-950 mb-2 text-center">Project Details</h2>
      <div className="w-16 h-0.5 bg-orange-950 mb-8"></div>
      
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-10 mt-7">
        <button className="border border-orange-400 text-orange-950 px-4 py-2 rounded-md font-semibold hover:bg-orange-200 transition">
          SPECIFICATION
        </button>
        <button className="border border-orange-400 text-orange-950 px-4 py-2 rounded-md font-semibold hover:bg-orange-200 transition">
          AMENITIES
        </button>
      </div>

      {/* Icon Grid - Only Adjust for Phone Screens */}
      <div className="grid grid-cols-2 gap-8 mt-10 sm:grid-cols-3 md:grid-cols-5 lg:gap-14">
        {/* Bedroom Icon */}
        <div className="flex flex-col items-center">
          <img src="./Flat1.png" alt="Bedroom" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
          <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">Bedroom</p>
        </div>
        
        {/* Living Room Icon */}
        <div className="flex flex-col items-center">
          <img src="./Flat2.png" alt="Living Room" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
          <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">Living Room</p>
        </div>
        
        {/* Toilet Icon */}
        <div className="flex flex-col items-center">
          <img src="./Flat3.png" alt="Toilet" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
          <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">Toilet</p>
        </div>
        
        {/* Kitchen Icon */}
        <div className="flex flex-col items-center">
          <img src="./Flat4.png" alt="Kitchen" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
          <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">Kitchen</p>
        </div>
        
        {/* Common Area Icon */}
        <div className="flex flex-col items-center">
          <img src="./Flat5.png" alt="Common Area" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
          <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">Common Area</p>
        </div>

        {/* Additional Icons */}
        <div className="flex flex-col items-center">
          <img src="./Flat61.png" alt="Bedroom" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
          <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">Bedroom</p>
        </div>
        
        <div className="flex flex-col items-center">
          <img src="./Flat62.png" alt="Living Room" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
          <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">Living Room</p>
        </div>
        
        <div className="flex flex-col items-center">
          <img src="./Flat63.png" alt="Toilet" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
          <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">Toilet</p>
        </div>
        
        <div className="flex flex-col items-center">
          <img src="./Flat64.png" alt="Kitchen" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
          <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">Kitchen</p>
        </div>
        
        <div className="flex flex-col items-center">
          <img src="./Flat65.png" alt="Common Area" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
          <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">Common Area</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
