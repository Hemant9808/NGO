function DonateUs() {
  return (
    <div
      className="donateus min-h-[85vh] mx-6 my-10 sm:m-12 text-center"
      style={{
        backgroundImage: `url("../assets/background.png")`,
        backgroundSize: "cover", // Ensures the background covers the entire container
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      {/* Heading */}
      <div className="mb-12">
        <h1
          className="text-6xl lg:text-7xl text-center"
          style={{ fontFamily: "Bebas Neue" }}
        >
          Make a Donation
        </h1>
      </div>

      {/* Donation Amount */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 mb-10">
        <div className="flex flex-col">
          <h1 className="text-2xl text-center mb-6">Choose an Amount</h1>
          <div className="flex space-x-6">
            {[10, 20, 50, 70, 100].map((amount) => (
              <button
                key={amount}
                className="p-2 hover:bg-[#D9D9D9]"
              >{`$${amount}`}</button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl mx-4 font-bold">OR</h1>
          <div className="line border-l border-black h-16 hidden lg:block"></div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl text-center mb-5 text-[#8B8B8B]">
            Enter your Own
          </h1>
          <input
            type="number"
            placeholder="$1000000"
            className="border border-[#8B8B8B] px-4 py-2 md:w-80"
          />
        </div>
      </div>

      {/* Card Details */}
      <div className="flex flex-col lg:flex-row justify-center sm:gap-[5rem] items-center bg-[#EBEBEB] mx-auto p-4 sm:p-8 shadow-md rounded">
        {/* Left */}
        <div className="text-left">
          <h1 className="text-2xl font-semibold">Card Details</h1>
          <p className="text-sm text-[#888888] uppercase">(Required)</p>
          <div className="flex flex-col w-full sm:w-96 mt-5">
            <input
              type="text"
              placeholder="NAME OF CARDHOLDER"
              className="bg-[#D9D9D9] my-3 py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="number"
              placeholder="CARD NUMBER"
              className="bg-[#D9D9D9] my-3 py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="flex space-x-4">
              <input
                type="number"
                placeholder="CVV"
                className="w-1/3 bg-[#D9D9D9] my-3 py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="EXPIRY DATE"
                className="w-2/3 bg-[#D9D9D9] my-3 py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div className="flex items-center my-3">
            <input type="checkbox" id="saveCard" className="h-5 w-5" />
            <label htmlFor="saveCard" className="ml-2 text-lg text-[#8B8B8B]">
              Save my card for future payments
            </label>
          </div>

          

        </div>
        <div className="w-[1px]  bg-gray-400 h-52 hidden lg:block"></div>

        {/* Right */}
        <div className=" text-left mt-5 lg:mt-0">
          <div className="lg:w-[80%] md:gap-[rem]">
          <div>
            <h1 className="text-2xl font-semibold">Enter your Email Address</h1>
            <p className="text-sm text-[#888888] uppercase">(Required)</p>
            <form
              action=""
              className="flex flex-col w-full sm:w-96 my-5 lg:my-"
            >
              <input
                type="Email "
                placeholder="EMAIL"
                aria-label="Email"
                className="bg-[#D9D9D9] py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </form>
          </div>
          
          <div className="flex flex-col items-start mt-2 mb-3">
            <h1 className="text-xl md:text-3xl font-semibold">Gift Card</h1>
            <div className="flex my- sm:w-96">
            <input type="checkbox" id="giftCard" className="h-5 w-5" />
            <label htmlFor="giftCard" className="ml-2 text-lg text-[#8B8B8B]">
              Gift with a purpose—send a gift card along with a donation to make
              a difference today!
            </label>
            </div>
          </div>

          {/* Payment button */}
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-2">
            <button className="text-base lg:text-md border-2 border-[#D9D9D9] hover:border-green text-black hover:text-white bg-[#D9D9D9] hover:bg-green px-3 py-2 rounded-lg uppercase font-semibold">
              Cancel Payment
            </button>
            <button className="text-base lg:text-md border-2 border-green hover:border-[#D9D9D9] text-white hover:text-black bg-green hover:bg-[#D9D9D9] px-14 lg:px-6 py-2 rounded-lg uppercase font-semibold">
              Pay Now
            </button>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DonateUs;
