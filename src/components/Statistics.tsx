import NumberTicker from "./NumberTicker";


const ImpactSummary = () => {
  return (
    <div className=" w-[100%] py-12 px-4 sm:px-[2rem] lg:px-[2rem]">
      <div className="  text-center">
        <h2 className="text-5xl lg:text-7xl font-normal text-black">OUR <span className="text-green">IMPACT</span></h2>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* <div>
            <h1 className="text-6xl lg:text-8xl font-normal text-green"> <NumberTicker className='' value={1 || 0} />+</h1>
            <h1 className="text-4xl font-medium text-green">LAC</h1>
            <p className="mt-2 text-black text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div> */}
          <div>
        <h1 className="text-6xl lg:text-8xl font-normal text-green"><NumberTicker className='' value={1000 || 0} />+</h1>
            <h1 className="text-4xl font-medium text-green">VILLAGES</h1>
            {/* <p className="mt-2 text-black text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </div>
          <div>
            <h1 className="text-6xl lg:text-8xl font-normal text-green"><NumberTicker className='' value={500 || 0} />+</h1>
            <h1 className="text-4xl font-medium text-green">CAMPAIGNS</h1>
            {/* <p className="mt-2 text-black text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </div>
          <div>
            <h1 className="text-6xl lg:text-8xl font-normal text-green"><NumberTicker className='' value={25 || 0} />+</h1>
            <h1 className="text-4xl font-medium text-green">CITIES</h1>
            {/* <p className="mt-2 text-black text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImpactSummary;
