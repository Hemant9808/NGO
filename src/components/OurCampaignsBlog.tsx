function OurCampaignsBlog() {
  return (
    <div 
      className="flex flex-col m-6 lg:mx-40 lg:mt-12 lg:mb-32 gap-10 "
      style={{
        backgroundImage: `url("../assets/background.png")`,
        minHeight: "80vh",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
       }}>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 flex justify-center lg:justify-start">
          <img src="../assets/campaings_blog1.png" alt="Campaings Blog" className="pl-10 lg:pl-20 w-[450px] h-[400px] lg:w-[500px] lg:h-[425px]" />
        </div>
        <div className="md:w-1/2 flex flex-col lg:w-1/2 items-start justify-center px-10 lg:px-20">
          <p className="text-base lg:text-xl pt-4 lg:pt-0 pb-5 text-justify">
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <button className="text-base lg:text-xl border-2 border-green hover:border-2 text-white hover:text-green bg-green hover:bg-transparent px-5 lg:px-10 py-2 rounded-lg tracking-wider ">Read More</button>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 flex flex-col items-start justify-center px-10 lg:px-20">
            <p className="text-base lg:text-xl pt-4 lg:pt-0 pb-5 text-justify">
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <button className="text-base lg:text-xl border-2 border-green hover:border-2 text-white hover:text-green bg-green hover:bg-transparent  px-5 lg:px-10 py-2 rounded-lg tracking-wider ">Read More</button>
        </div>
        <div className="md:w-1/2 flex justify-center lg:justify-end">
          <img src="../assets/campaings_blog2.png" alt="Campaings Blog" className="pr-10 lg:pr-20 w-[450px] h-[400px] lg:w-[500px] lg:h-[425px]" />
        </div>
      </div>
    </div>
  );
}

export default OurCampaignsBlog;
