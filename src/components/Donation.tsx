import Footer from "./Footer";

const DonationForm = () => {
  return (
    <>
      <div className=" mb-[4rem] w-[100%]  flex flex-col items-center justify-start py-10 md:py-0 md:mt-[2rem] px-4 sm:0 ">
        <h1 className="text-[4rem]  text-center text-black mb-8">
          MAKE A DONATION
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center md:gap-[2rem] mb-8">
          <div className="flex flex-col">
            <div className="text-center mb-2 text-[1.2rem] font-[200] text-gray-800">
              Choose an amount
            </div>
            <div className="flex space-x-4">
              {[10, 20, 50, 70, 100].map((amount) => (
                <button
                  key={amount}
                  className="border border-gray-300 rounded py-2 px-4 text-gray-700 hover:bg-gray-200"
                >{`$${amount}`}</button>
              ))}
            </div>  
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="mx-4 text-gray-800 font-thin text-[1.5rem] ">
              OR{" "}
            </div>
            <div className="bg-gray-500 w-[0.5px] h-[4rem] hidden md:block"></div>
          </div>
          <div className="flex flex-col">
            <div className="text-center mb-2 text-[1.2rem] font-[200] text-gray-500">
              {" "}
              Enter an amount
            </div>
            <input
              type="text"
              className="border border-gray-300 rounded py-2 px-4 md:w-[21rem] text-center text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="$1000000"
            />
          </div>
        </div>

        <div className=" relative w-[100%] mx-auto flex justify-center items-center  bg-[#EBEBEB] shadow-md rounded-lg p-8">
          <div className=" relative w-[80%] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[18rem]">
            <div className="">
              <h2 className="text-xl  text-gray-800 mb-2 normal-case">
                Card Details <br /> <span className="text-gray-500 text-sm font-thin ">(REQUIRED)</span>
              </h2>
              <input
                type="text"
                placeholder="NAME OF CARDHOLDER"
                className="w-full mb-4 border bg-[#D9D9D9] rounded-md border-gray-300  py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="CARD NUMBER"
                className="w-full mb-4 border bg-[#D9D9D9] rounded-md border-gray-300  py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="flex space-x-4 mb-4">
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/3 border bg-[#D9D9D9] rounded-md border-gray-300  py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  placeholder="EXPIRY DATE"
                  className="w-2/3 border bg-[#D9D9D9] rounded-md border-gray-300  py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="saveCard" className="mr-2" />
                <label htmlFor="saveCard" className="text-gray-700 text-[10px] normal-case">
                  Save my card for future payments
                </label>
              </div>
            </div>

            <div className="bg-gray-400 left-[50%] absolute w-[0.5px] h-[100%] hidden md:block"></div>


            <div>
              <h2 className="text-xl font-thin text-gray-800 mb-4">
                Enter your email address{" "} <br />
                <span className="text-gray-500 text-sm font-thin">(REQUIRED)</span>
              </h2>
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full bg-[#D9D9D9] rounded-md mb-4 border border-gray-300  py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <h2 className="text-xl  text-gray-800  normal-case mb-4">
                Gift Card
              </h2>
              <div className="flex items-center mb-8">
                <input type="checkbox" id="giftCard" className="mr-2" />
                <label htmlFor="giftCard" className="text-gray-700 text-[10pxx  ]">
                  Gift with a purpose—send a gift card along with a donation to
                  make a difference today!
                </label>
              </div>

              <div className="flex space-x-4">
                <button className="border bg-[#D9D9D9]  text-gray-700 rounded-md py-2 px-4  ">
                  CANCEL PAYMENT
                </button>
                <button className="bg-green font-thin text-white rounded py-2 px-4 hover:bg-green-700">
                  PAY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default DonationForm;
