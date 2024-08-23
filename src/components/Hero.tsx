// import Layout from "./Layout"; 

function Hero() {
  return (
    <div>
      {/* <Layout /> */}
      {/* Main Content Section */}
      <main className="flex flex-grow md:flex-row flex-col gap-9 items-center text-center mt-10 px-4 lg:px-24 min-h-[85vh]" style={{backgroundImage: `url("../assets/background.png")`,
      }}>
        <div className="md:w-[50%] w-[90%] flex flex-col items-start gap-9">
          <div className="text-5xl lg:text-7xl text-start font-normal">
            <h1>Empowering <span className="text-green">RURAL</span> Lives with{" "}
            <span className="text-green">HEALTH</span> and{" "}
            <span className="text-green">EDUCATION</span></h1>
          </div>
          <p className="text-start text-black text-xl max-w-2xl">
            Providing Essential Medical Support to Every Village and Urban
            Heart, Ensuring Health and Well-being for All Communities.
          </p>
          <button className="text-xl border-2 border-green text-green hover:text-white bg-transparent hover:bg-green px-10 py-2 rounded-lg tracking-wider">
            EXPLORE
          </button>
        </div>

        {/* Background Image Replacement */}
        <div className="md:w-[50%] w-[90%]">
          <img className="" src="../assets/hero.png" alt="hero" />
        </div>
      </main>
    </div>
  );
}

export default Hero;
