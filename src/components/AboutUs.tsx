const AboutUs = () => {
  return (
    <section className=" w-[100%] flex justify-center py-[7rem]">
      <div>
        <div className="sm:px-[5rem]  px-[2rem] flex flex-col items-center">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-7xl font-normal">
              WHO ARE <span className="text-green">WE?</span>
            </h2>
            <p className="mt-8 lg:mt-16 text-xl">
              The Rabindranath Institute of Healthcare Management is committed
              to improving the lives of people in remote areas. We provide
              essential healthcare, education, and social services to
              underserved communities. Our goal is to help these communities
              grow, thrive, and become self-sufficient. By offering these vital
              services, we aim to create a healthier, more educated, and
              empowered society.
            </p>
          </div>

          {/* <div className='flex sm:w-[70%] w-[100%] ' >
        <div className=' flex-1 flex flex-col  h-[100vh]'>
            <div className='  bg-green w-[100%] h-[60%] mb-[3rem]'></div>
            <div className='  bg-yellow w-[100%] h-[35%]'></div>
        </div>
        <div className='flex-1 flex flex-col mt-[4rem]   h-[100vh]'>
          <div className='  bg-yellow w-[100%] h-[35%] mb-[3rem]'></div>
          <div className=' bg-green w-[100%] h-[60%]   '></div>
        </div>
      </div> */}
          <div className="flex w-[100%] justify-center">
            <div className="sm:w-[70%] w-[100%]">
              <div className="flex flex-wrap w-full">
                <div className="flex-1  sm:min-w-[400px] min-w-[300px] flex flex-col h-screen sm:h-auto">
                  <div className="bg-[#D8D5CE] w-full h-[60vh] sm:h-[60vh] mb-12"></div>
                  <div className="bg-green w-full h-[35vh] sm:h-[30vh]"></div>
                </div>
                <div className="flex-1 mt-[4rem] sm:min-w-[400px] min-w-[300px] flex flex-col   h-screen sm:h-auto">
                  <div className="bg-green w-full h-[35vh] sm:h-[30vh] mb-12"></div>
                  <div className="bg-green w-full h-[60vh] sm:h-[60vh]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
