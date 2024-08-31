
const data = [
    { id: 1, content: "Story 1", src: "../assets/story_1.png" },
    { id: 2, content: "Story 2", src: "../assets/story_2.png" },
    { id: 3, content: "Story 3", src: "../assets/story_3.png" },
    { id: 4, content: "Story 4", src: "../assets/story_1.png" },
    { id: 5, content: "Story 5", src: "../assets/story_2.png" },
    { id: 6, content: "Story 6", src: "../assets/story_3.png" },
  ];

// export default Carousel;


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

function Carousel() {
    const sliderRef = useRef<Slider | null>(null); // Create a ref to access slider methods

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className='w-[90%] m-auto'>
      <div className="mt-20 relative">
        <Slider ref={sliderRef} {...settings}>
        {data.map((story) => (
                  <div
                    key={story.id}
                    className="flex-shrink-0 w-full sm:w-1/3 h-80 sm:h-80 lg:h-[30rem] bg-green mx-2"
                  >
                    <img src={story.src} alt={story.content} className="w-full lg:h-[30rem] object-cover" / >
                  </div>
                ))}
        </Slider>

        {/* Custom buttons */}
        <div className="relative    flex justify-center items-center gap-4">
            <div className="">
          <button 
            onClick={handlePrev} 
            className="bg-indigo-500 text-white px-4 py-2 rounded-xl"
          >
            Previous
          </button>
          <button 
            onClick={handleNext} 
            className="bg-indigo-500 text-white px-4 py-2 rounded-xl"
          >
            Next
          </button>
          </div>
        </div>
        
      </div>
    
    </div>
  );
}

export default Carousel;
