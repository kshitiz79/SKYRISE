import React from 'react'

const Content = () => {
  return (
    <>
    <section className="flex flex-col lg:flex-row items-center justify-between bg-orange-50 px-6 py-16 lg:py-24 lg:px-16">
      <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
        <h3 className="text-lg font-semibold text-black mb-2">Overview</h3>
        <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
          Your Home is your Vacation
        </h1>
        <p className="text-gray-700 text-lg mb-6">
        We are a young and passionate team of highly motivated 
        professionals whose experience spans real estate development.
        "SKYRISE DEVELOPERS" is a name synonymous with quality
        and excellence. Driven by a passion for real estate
        and a zeal for innovation, we are value-based builders
        and developers with excellence in quality of construction
        and modern design, with zero tolerance for delay in 
        delivery. With the sole intention of providing good 
        quality dwelling units to the people of Bangalore, we
        keep 100% transparency in the process and communication,
        so that our customers feel confident and delighted at 
        every phase of their dream home journey.


        </p>
     
<button
  className="bg-orange-600 hover:bg-orange-800 text-white font-semibold py-3 px-8 rounded-md mt-20 mb-20 relative z-10"
  onClick={() => {
    const link = document.createElement('a');
    link.href = './file.pdf'; // Path to your PDF file in the public folder
    link.download = 'Project_Plans.pdf'; // Optional: Sets a custom filename for download
    link.target = '_blank'; // Opens the file in a new tab
    link.click();
  }}
>
  DOWNLOAD PLANS
</button>

      </div>
      <div className="lg:w-2/5 h-[40rem] flex justify-center">
        <img
          src="./image3.png"
          alt="Building"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>

    </section>


    <section id="plan2"
  className="relative bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 py-16"
  style={{ backgroundImage: "url('./image4.png')" }}
>
  {/* White overlay */}
  <div className="absolute inset-0 bg-white opacity-60"></div>

  <h2 className="text-3xl lg:text-4xl font-semibold text-orange-900 mb-12 text-center relative z-10">Plans</h2>

  <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-screen-xl mx-auto relative z-10">
    {/* Master Plan */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 w-full md:w-2/3 lg:w-1/2">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Master Plan</h3>
      <div className="flex justify-center">
        <img
          src="./image7.png"
          alt="Master Plan"
          className="w-2/3  rounded-lg"
        />
      </div>
    </div>

    {/* Floor Plan */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 w-full md:w-2/3 lg:w-1/2">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Floor Plan</h3>
      <div className="flex justify-center">
        <img
          src="./image6.png"
          alt="Floor Plan"
          className="w-2/3  rounded-lg"
        />
      </div>
    </div>
  </div>

  {/* Download Plans Button */}
  <button
  className="bg-orange-600 hover:bg-orange-800 text-white font-semibold py-3 px-8 rounded-md mt-20 mb-20 relative z-10"
  onClick={() => {
    const link = document.createElement('a');
    link.href = './file.pdf'; // Path to your PDF file in the public folder
    link.download = 'Project_Plans.pdf'; // Optional: Sets a custom filename for download
    link.target = '_blank'; // Opens the file in a new tab
    link.click();
  }}
>
  DOWNLOAD PLANS
</button>
</section>


    </>
  ) 
}

export default Content