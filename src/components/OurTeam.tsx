const teamMembers = [
  {
    id: 1,
    name: "Anurag Pathak",
    position: "Founder & CEO",
    image: "../assets/team_1.png",
    socialMedia: "../assets/social_media_icons.png",
  },
  {
    id: 2,
    name: "John Doe",
    position: "CTO",
    image: "../assets/team_2.png",
    socialMedia: "../assets/social_media_icons.png",
  },
  {
    id: 3,
    name: "Jane Smith",
    position: "COO",
    image: "../assets/team_3.png",
    socialMedia: "../assets/social_media_icons.png",
  },
  // Add more team members as needed
];

function OurTeam() {
  return (
    <div
      className="min-h-[85vh] m-4 sm:m-12"
      
    >
      <div className="text-center">
        <h1 className="text-5xl lg:text-7xl py-12 lg:py-8">
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

      <div className="flex flex-col md:flex-row flex-wrap gap-8 items-center justify-center mt-20 lg:mt-40 mb-24">
        {teamMembers.map((membar) => (
          <div key={membar.id} className="relative">
            <div className="absolute w-[350px] h-[250px] sm:w-[450px] sm:h-[300px] flex justify-center">
              <img src={membar.image} alt={membar.name} />
            </div>
            <div
              className="flex flex-col justify-center items-center bg-gradient-to-b from-[#EAFFDE] to-[#77C04F] rounded-[50px] w-[350px] h-[250px] sm:w-[450px] sm:h-[300px] mt-36 sm:mt-44"
              style={{ fontFamily: "Poppins" }}
            >
              <h1 className="text-3xl pt-24 font-semibold">{membar.name}</h1>
              <p className="text-base">{membar.position}</p>
              <img
                src={membar.socialMedia}
                alt="Social Media Icons"
                className="w-64 pt-5"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
