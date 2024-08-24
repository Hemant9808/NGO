

const ContactFormSection = () => {
  return (
    <section className="w-[100%] h-full py-[4rem]">
      <div className=" mx-auto w-[90%] md:w-[75%] px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Text and Form */}
        <div className="w-full  md:w-1/2 ">
          <h2 className="text-5xl  text-gray-900">
            JOIN US IN MAKING A <span className="text-[#6caf48]">DIFFERENCE</span>
          </h2>
          <p className="text-gray-700 mt-4">
            Join The Rabindranath Institute Of Healthcare Management To Bring Vital Healthcare Education And Support To Remote Communities. Together, We Can Empower And Uplift Lives For A Brighter Future.
          </p>
          <form className="mt-6 space-y-4">
            <div>
            <p  className="block text-md font-medium text-black ">
                name*
              </p>
              <input
                type="text"
                id="name"
                className="mt-1 block w-[90%] border-b border-gray-400 focus:border-[#6caf48] focus:outline-none"
                required 
              />
            </div>
            <div>
            <p  className="block text-md font-medium text-black ">
                email id*
              </p>
              <input
                type="email"
                id="email"
                className="mt-1 block w-[90%] border-b border-gray-400 focus:border-[#6caf48] focus:outline-none"
                required
              />
            </div>
            <div>
            <p  className="block text-md font-medium text-black " >
                message*
              </p>
              <textarea
                id="message"
                
                className="mt-1 block w-[90%] border-b border-gray-400 focus:border-[#6caf48] focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green font-thin text-white py-2 px-8 rounded-lg hover:bg-green-600"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="w-full   md:w-1/2 mt-[8rem] md:mt-0  flex items-center justify-center">
          <img src="https://s3-alpha-sig.figma.com/img/5cc6/5aef/f38a1079ecd97992e496a7f2585d9d2e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KlzV2nULfTPCbl-eYf4KhRzJaMYW2FZFL7GPTlW-zt96QvfoNcWyTGPuTCYQDtqT3QCLjOIkuC7vZb0R5-OqwtrbGmvASl3sy5xtZnYZiwVd6xIm6gCVpjCwhm2V4meJY-8AqZlp046Ccy0~EJJv0CfNjuFaQ0zo2OtcUssL7UOxQ9VSEektW-0RY0tugAjmPAIey1G7QwdKa3cu7px2YuQX5VWd1-f7azdPAYO4TY7J2scH1XHs7gm768RlHIGuqr67ZXu5Wai1kBMWSDZ8C~oj0VmrcS7emaO2MK1nMEq5ntNQbJlh3B9OlANMJ6gSuNjfwg5UjpahghHHJ0-s9g__" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
