import  { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const StoriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stories = [
    { id: 1, content: 'Story 1' },
    { id: 2, content: 'Story 2' },
    { id: 3, content: 'Story 3' },
    { id: 4, content: 'Story 4' },
    { id: 5, content: 'Story 5' },
    { id: 6, content: 'Story 6' },
  ];

  const slideLength = 3; // Number of items shown in one slide
  const totalSlides = stories.length;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - slideLength : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalSlides - slideLength ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-white w-[100%]  py-12 sm:px-8 lg:px-8">
        <div className='sm:px-[4rem]'>
      <div className=" mx-auto text-center">
        <h2 className="text-4xl lg:text-7xl font-normal text-black">
          OUR <span className="text-green">Testimonials</span>
        </h2>
        <div className="mt-16 relative">
          <div className="flex overflow-hidden">
            <div
              className="flex w-[100%]  transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slideLength)}%)` }}
            >
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="flex-shrink-0 w-[100%] sm:w-1/3 sm:min-w-[24rem] h-40 sm:h-40 lg:h-40 rounded-[1rem] bg-[#363636] mx-2 py-4 px-6"
                >
                  <div className='flex gap-4'>
                    <div className='w-[4rem] h-[4rem] rounded-full bg-gray-400'></div>
                    <div className='flex items-center'>
                        <h1 className='text-xl text-green font-semibold'>Sherl Robertson</h1>
                    </div>
                  </div>
                  <div className='text-left mt-4 text-white tracking-wide'>Sherl said : Journeying through the world, Chillhum always with me</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className=" inset-x-0 bottom-0 flex justify-center gap-4 items-center p-4">
            <button onClick={prevSlide} className="text-stone-900 hover:text-gray-800">
              <ArrowBackIosIcon fontSize="large" />
            </button>
            <button onClick={nextSlide} className="text-stone-900 hover:text-gray-800">
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
