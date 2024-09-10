

import { useEffect, useRef, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";


const StoriesCarousel = () => {
  // const stories = [
  //   { id: 1, content: "Story 1" },
  //   { id: 2, content: "Story 2" },
  //   { id: 3, content: "Story 3" },
  //   { id: 4, content: "Story 4" },
  //   { id: 5, content: "Story 5" },
  //   { id: 6, content: "Story 6" },
  // ];





  const sliderRef = useRef<Slider | null>(null); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1524, // For large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800, // For mobile devices
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

  const [events,setEvents] = useState<any>();
  const [loading,setLoading]= useState<boolean>();
console.log(loading);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`https://ngo-backend-u2dt.onrender.com/getAllPost`, {  
      });
      console.log(response);
      
       setEvents(response.data);
      console.log("events",events);
      
    } catch (error) {
      console.error("Error fetching blog post:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log("events",events);
useEffect(()=>{
  fetchEvents();
},[])

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + '...';
  }
  return text;
};

  return (
    <div className="bg-white  w-[100%] py-12 sm:px-8 lg:px-8 ">
    <div className="sm:px-4  ">
      <div className="  text-center">
        <h2 className="text-5xl lg:text-7xl font-normal">
          OUR <span className="text-green">CAMPAIGNS</span>
        </h2>
        <div className="mt-16  relative ">
        <Slider ref={sliderRef} {...settings}>
      {events?.map((event:any) => (
                <div
                key={event._id}
                className="flex-shrink-0 w-[90%]  sm:w-1/3 sm:min-w-[24rem] h-48 lg:h-60 p-4 lg:p-8 rounded-[1rem] bg-[#363636]  text-white  mx-2"
              >
                 <Link to={`/event/${event._id}`}>
                 
                


                <div className="flex gap-4">
                  <div className="w-[4rem] h-[4rem] rounded-full bg-gray-400">
                    <img
                      src="../assets/profile.png"
                      alt="profile"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between">
                    <p className="text-xl font-semibold">
                      Sherl Robertson
                    </p>
                    <img
                      src="../assets/stars.png"
                      alt="stars"
                      className=""
                    />
                  </div>
                </div>
                <div className="text-left mt-6 tracking-wide">
                  <p className="text-lg font-semibold">
                 { truncateText(event.description,100) }
                  </p>
                   {/* <p className="text-md"  dangerouslySetInnerHTML={{ __html: event.content }}> 
                  
                   </p> */}
                </div>
                </Link>
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




