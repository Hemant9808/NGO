function ContactUs() {
    return (
      <div
        className="min-h-[85vh] m-12"
        style={{
          backgroundImage: `url("../assets/background.png")`,
          backgroundSize: "cover", // Ensures the background covers the entire container
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      >
        
        <div className="sm:px-10 w-full lg:w-3/5">
          <h1 className="text-5xl md:text-6xl lg:text-7xl pt-12 pb-4 text-center lg:text-left">
            Join Us in Making a <span className="text-green">Difference</span>
          </h1>
          <p className="text-[#979595] text-base sm:text-lg md:text-xl text-justify">
            Join the Rabindranath Healthcare Management Foundation to bring
            vital healthcare, education, and support to remote communities.
            Together, we can empower and uplift lives for a brighter future.
          </p>
        </div>
  
        <div className="contactus-form flex flex-col lg:flex-row pt-10 sm:p-10 items-center lg:items-stretch">
          <form className="w-full sm:w-[100%] lg:w-1/2">
            <div className="py-4 lg:py-6">
              <p className="text-xl lg:text-2xl font-medium">Name*</p>
              <input
                className="appearance-none bg-transparent border-b border-black w-full pt-4 leading-normal text-xl focus:outline-none"
                type="text"
                placeholder=""
                aria-label="Full name"
              />
            </div>
  
            <div className="py-4 lg:py-6">
              <p className="text-xl lg:text-2xl font-medium">Email-ID*</p>
              <input
                className="appearance-none bg-transparent border-b border-black w-full pt-4 leading-normal text-xl focus:outline-none"
                type="e-mail"
                placeholder=""
                aria-label="E-mail"
              />
            </div>
  
            <div className="py-4 lg:py-6">
              <p className="text-xl lg:text-2xl font-medium">Message*</p>
              <textarea
                className="appearance-none bg-transparent border-b border-black w-full pt-4 leading-normal text-xl focus:outline-none lg:min-h-28 "
                typeof="message"
                placeholder=""
                aria-label="message"
              />
            </div>
  
            <div className="flex justify-center lg:justify-start pt-10">
              <button className="text-base lg:text-xl border-2 border-green hover:border-2 text-white hover:text-green bg-green hover:bg-transparent  px-5 lg:px-10 py-2 rounded-lg tracking-wider ">
                Submit
              </button>
            </div>
          </form>
  
          <div className="flex justify-center lg:w-1/2">
            <img
              src="../assets/contactus.png"
              alt="Contact Us"
              className="w-full sm:w-[70%] lg:w-[90%]"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactUs;
  