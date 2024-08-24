function OurTeam() {
  return (
    <div
      className="min-h-[85vh] m-12"
      style={{ backgroundImage: `url("../assets/background.png")` }}
    >
      <div className="text-center">
        <h1 className="text-5xl lg:text-7xl py-12">
          Meet Our <span className="text-green">Team</span>
        </h1>
        <p className="text-black text-xl text-justify px-5">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
          condimentum ac, vestibulum eu nisl.
        </p>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap gap-8 items-center justify-center mt-40 mb-24">
        <div className="relative">
          <div className="absolute w-[450px] h-[300px] flex justify-center">
            <img src="../assets/team_1.png" alt="team" />
          </div>
          <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#EAFFDE] to-[#77C04F] rounded-[50px] w-[450px] h-[300px] mt-44">
            <h1 className="text-3xl pt-24">Anurag Pathak</h1>
            <p className="text-base">Founder & CEO</p>
            <img src="../assets/social_media_icons.png" alt="Social Media Icons" className="w-64 pt-5" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute w-[450px] h-[300px] flex justify-center">
            <img src="../assets/team_2.png" alt="team" />
          </div>
          <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#EAFFDE] to-[#77C04F] rounded-[50px] w-[450px] h-[300px] mt-44">
            <h1 className="text-3xl pt-24">Anurag Pathak</h1>
            <p className="text-base">Founder & CEO</p>
            <img src="../assets/social_media_icons.png" alt="Social Media Icons" className="w-64 pt-5" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute w-[450px] h-[300px] flex justify-center">
            <img src="../assets/team_3.png" alt="team" />
          </div>
          <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#EAFFDE] to-[#77C04F] rounded-[50px] w-[450px] h-[300px] mt-44">
            <h1 className="text-3xl pt-24">Anurag Pathak</h1>
            <p className="text-base">Founder & CEO</p>
            <img src="../assets/social_media_icons.png" alt="Social Media Icons" className="w-64 pt-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
