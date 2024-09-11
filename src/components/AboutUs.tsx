const AboutUs = () => {
  return (
    <section className="w-[100%] flex justify-center pt-16 sm:pb-28 lg:py-28 bg-[#F5F5F5]">
      <div>
        <div className="px-4 sm:px-20 flex flex-col items-center">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-7xl font-normal">
              WHO ARE <span className="text-green">WE?</span>
            </h2>
            <p className="mt-8 lg:mt-16 text-xl">
              The Rabindranath HM Foundation is committed to improving the lives of people in remote areas. We provide
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
            <div className="w-full md:w-[80%] lg:w-[70%] xl:w-fu;l 2xl:w-[80%]">
              <div className="flex flex-wrap w-full">
                <div className="flex-1  sm:min-w-[400px] min-w-[300px] flex flex-col h-screen sm:h-auto">
                  {/* About Us 1 */}
                  <div className="flex bg-[#D8D5CE] w-full h-[65vh] sm:h-[70vh] mb-12">
                    <div className=" w-1/2">
                      <img
                        src="../assets/aboutus_1.png"
                        alt="about"
                        className="h-[100%] w-[100%]"
                      />
                    </div>
                    <div className="w-1/2 px-4 flex flex-col justify-center">
                      <img
                        src="../assets/heart.png"
                        alt="about"
                        className="mb-2 lg:mb-4 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                      />
                      <h1 className="text-xl sm:text-2xl sm:mb-2 lg:mb-8 xl:mb-0 2xl:mb-4">
                        Enhancing Healthcare Access in Remote Areas
                      </h1>
                      <p className="text-sm sm:text-base mb-2 sm:mb-10 lg:mb-16 text-justify">
                        we are dedicated to improving healthcare access in
                        remote communities. By setting up mobile clinics and
                        training local health workers, we ensure that even the
                        most isolated populations receive essential medical care
                      </p>
                      <button className="text-green border border-green rounded-2xl py-2 w-[100px]">
                        <p className="text-sm sm:text-base ">View</p>
                      </button>
                    </div>
                  </div>

                  {/* About Us 2 */}
                  <div className="w-full h-[25vh] sm:h-[30vh]">
  <img
    src="../assets/team3.jpg"
    alt="about"
    className="w-full h-full object-cover"
  />
</div>
                </div>


                <div className="flex-1 py-8 sm:mt-8 md:mt-16 sm:min-w-[400px] min-w-[300px] flex flex-col h-screen sm:h-auto">

                  {/* About Us 3 */}
                  <div className="w-full h-[25vh] sm:h-[30vh] mb-12">
                    <img
                      src="../assets/aboutus_3.png"
                      alt="about"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* About Us 4 */}
                  <div className="flex flex-col items-center justify-center bg-green w-full h-[60vh] sm:h-[60vh]">
                    <h1 className="text-xl sm:text-2xl text-white mb-4 sm:mb-6 lg:mb-12">
                      Empowering Minds Through Education
                    </h1>
                    <p className="text-sm sm:text-base text-white mb-8 md:mb-12 lg:mb-20 px-12 sm:px-20 text-justify">
                      We believe that education is the foundation for a better
                      future. Our initiatives focus on providing educational
                      resources and training to underserved areas, helping
                      individuals gain the skills and knowledge needed to
                      thrive. By empowering minds, we create pathways to
                      sustainable development and brighter futures for all.
                    </p>
                    <button className="text-white border border-white rounded-2xl py-2 w-[100px]">
                      <p className="text-sm sm:text-base ">View</p>
                    </button>
                  </div>
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
