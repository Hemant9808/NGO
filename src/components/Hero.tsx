import React from 'react'

function Hero() {
  return (
    <div>
    
      {/* Main Content Section */}
      <main className="flex flex-grow md:flex-row flex-col gap-9  items-center text-center mt-10 px-4 lg:px-24">
      <div  className='w-[50%] flex flex-col items-start gap-9   '>
      <div className="text-4xl   lg:text-5xl text-start   font-bold ">
          Empowering <span className="text-green-500">RURAL</span> Lives with{" "}
          <span className="text-green-500">HEALTH</span> and{" "}
          <span className="text-green-500">EDUCATION</span>
        </div>
        <p className="text-start  text-gray-600 max-w-2xl">
          Providing Essential Medical Support to Every Village and Urban Heart, Ensuring Health and Well-being for All Communities.
        </p>
        <button className=" bg-green-500 text-white px-6 py-3 rounded">
          EXPLORE
        </button>
      </div>
        
        
        {/* Background Image Replacement */}
        <div className="mt-12 w-[50%]   h-96 bg-blue-500"></div>
      </main>
    </div>
  )
}

export default Hero
