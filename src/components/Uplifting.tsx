const UpliftingLives = () => {
  return (
    <section className=" w-[100%] flex justify-center bg-[#F5F5F5]">
      <div className="w-[92%] pb-16 sm:py-16 md:px-8 flex flex-col lg:flex-row items-center">
        <div 
          className="relative bg-green-300 min-h-[25rem] sm:h-[35rem] w-[100%] flex-[3] flex justify-center items-center mb-8 md:mb-0"
          >
            <img src="../assets/uplifting.png" alt="Uplifting" className="w-full h-[60%] sm:h-[80%] md:h-[90%] lg:w-[100%] 2xl:w-[90%] lg:h-[60%] xl:h-[70%]" />
          {/* Circle Divs in place of images */}
          {/* <div className="relative  w-64 h-64 rounded-full bg-green">
          <div className="absolute -top-12 -left-16 w-32 h-32 rounded-full bg-green"></div>
          <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-green"></div>
          <div className="absolute bottom-6 left-12 w-16 h-16 rounded-full bg-green"></div>
        </div> */}
        </div>

        <div className="flex-[2] items-center text-center md:text-left md:ml-8">
          <div className="border-4 border-green rounded w-1/4 mb-8"></div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-normal">
            UPLIFTING <span className="text-green">PEOPLE</span>
            <br />
            TRANSFORMING <span className="text-green">LIVES</span>
          </h2>
          <p className="mt-6 text-xl">
            At Rabindranath HM Foundation , we ensure
            everyone in remote areas gets vital healthcare, education, and
            social support. We believe every individual should have basic
            healthcare facilities and access to education. We aim to bring
            change and help people grow and shape a better future for them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpliftingLives;
