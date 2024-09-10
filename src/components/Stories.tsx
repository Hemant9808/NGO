import { useRef } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const StoriesCarousel = () => {
 
  const stories = [
    { id: 1, content: "Story 1", src: "../assets/story1.jpg" },
    { id: 2, content: "Story 2", src: "../assets/story2.jpg" },
    { id: 3, content: "Story 3", src: "../assets/story3.jpg" },
    { id: 4, content: "Story 4", src: "../assets/story4.jpg" },
    { id: 5, content: "Story 5", src: "../assets/story5.jpg" },
    { id: 6, content: "Story 6", src: "../assets/story6.jpg" },
    { id: 7, content: "Story 1", src: "../assets/story7.jpg" },
    { id: 8, content: "Story 2", src: "../assets/story8.jpg" },
    { id: 9, content: "Story 3", src: "../assets/story9.jpg" },
    { id: 10, content: "Story 4", src: "../assets/story10.jpg" },
    { id: 11, content: "Story 5", src: "../assets/story11.jpg" },
  ];


  const sliderRef = useRef<Slider | null>(null); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024, // For large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
    <div className="bg-white w-[100%] py-12 sm:px-8 lg:px-8">
      <div className="sm:px-4">
        <div className=" mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl font-normal">
            OUR <span className="text-green">GALLERY</span>
          </h2>
          <div className="mt-16 relative">
          <Slider ref={sliderRef} {...settings}>
        {stories.map((story) => (
                  <div
                    key={story.id}
                    className="flex-shrink-0 w-full sm:w-1/3   mx-2"
                  >
                    <img src={story.src} alt={story.content} className="w-full lg:h-[30rem] h-full object-cover" / >
                  </div>
                ))}
        </Slider>
           

            <div className=" inset-x-0 bottom-0 mt-4 flex justify-center gap-4 items-center p-4">
              <button
                onClick={handlePrev}
                className="text-stone-900 hover:text-gray-800"
              >
                <ArrowBackIosIcon fontSize="large" />
              </button>
              <button
                onClick={handleNext}
                className="text-stone-900 hover:text-gray-800"
              >
                <ArrowForwardIosIcon fontSize="large" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesCarousel;
