// Form.js
import React from 'react';

const Form = () => {
  return (
    <div className="bg-white py-6 px-8 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-5/6 mx-auto my-12">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        <input 
          type="text" 
          placeholder="Name" 
          className="border border-gray-300 p-3 rounded-md w-full"
        />
        <input 
          type="tel" 
          placeholder="Number" 
          className="border border-gray-300 p-3 rounded-md w-full"
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="border border-gray-300 p-3 rounded-md w-full"
        />
        <select className="border border-gray-300 p-3 rounded-md w-full">
          <option>Flat Type</option>
          <option>1 BHK</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
        </select>
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition">
        Send
      </button>
    </div>
  );
};

export default Form;
