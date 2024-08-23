const AboutUs = () => {
  return (
    <section className=" w-[100%] flex justify-center py-[7rem]">
      <div>
        <div className="sm:px-[5rem] px-[2rem] flex flex-col items-center">
          <div className="text-center mb-12">
            <h2 className="text-5xl lg:text-7xl font-normal">
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
                  <div className="flex bg-[#D8D5CE] w-full h-[60vh] sm:h-[70vh] mb-12">
                    <div className="">
                      <img src="../assets/aboutus_1.png" alt="about" className="w-fit min-h-fit"/>
                    </div>
                    <div >
                        <img src="../assets/heart.png" alt="about" className="mb-4"/>
                        <h1 className="mb-8">Enhancing Healthcare Access in Remote Areas</h1>
                        <p className="mb-36">we are dedicated to improving healthcare access in remote communities. By setting up mobile clinics and training local health workers, we ensure that even the most isolated populations receive essential medical care</p>
                        <button className="text-green border border-green rounded-2xl px-8 py-2"><p>View</p></button>
                    </div>
                  </div>
                  <div className="bg-slate-400 w-full h-[35vh] sm:h-[30vh]">
                  <img src="../assets/aboutus_2.png" alt="about" className="w-fit min-h-fit"/>
                  </div>
                </div>
                <div className="flex-1 mt-[4rem] sm:min-w-[400px] min-w-[300px] flex flex-col h-screen sm:h-auto">
                  <div className="bg-green w-full h-[35vh] sm:h-[30vh] mb-12">
                  <img src="../assets/aboutus_3.png" alt="about" className="w-fit min-h-fit"/>
                  </div>
                  <div className="flex flex-col items-center  bg-gray-600 w-full h-[60vh] sm:h-[60vh]">
                    <h1 className="text-white mb-20">Empowering Minds Through Education</h1>
                    <p className="text-white mb-36 px-28">We believe that education is the foundation for a better future. Our initiatives focus on providing educational resources and training to underserved areas, helping individuals gain the skills and knowledge needed to thrive. By empowering minds, we create pathways to sustainable development and brighter futures for all.</p>
                    <button className="text-white border border-white rounded-2xl px-8 py-2"><p>View</p></button>
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
