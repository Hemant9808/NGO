function OurCampaigns() {
  return (
    <div
      className="text-center mt-10 lg:my-10"
      style={{
        backgroundImage: `url("../assets/background.png")`,
        // marginLeft: "50px",
        // marginRight: "50px",
        minHeight: "80vh",
        objectFit: "cover",
       }}
    >
      <h1 className="text-5xl lg:text-7xl py-5 lg:py-10">
        Our <span className="text-green">Campaings</span>
      </h1>
      <img src="../assets/campaings_bg.png" alt="campaings" className="h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] w-full"/>
      <p className="text-black text-base lg:text-xl sm:px-8 lg:px-20 py-10 text-justify mx-6 sm:mx-12 lg:mx-0">
        Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
        efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum
        eu nisl.Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        vulputate libero et velit interdum, ac aliquet .
      </p>
    </div>
  );
}

export default OurCampaigns;
