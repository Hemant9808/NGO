// function OurCampaignsBlog() {
//   return (
//     <div 
//       className="flex flex-col mt-6 mb-16 sm:mb-32 lg:mx-40 lg:mt-12 gap-10 "
//       style={{
//         backgroundImage: `url("../assets/background.png")`,
//         minHeight: "80vh",
//         objectFit: "cover",
//         backgroundRepeat: "no-repeat",
//        }}>

//       <div className="flex flex-col md:flex-row">
//         <div className="md:w-1/2 flex justify-center lg:justify-start">
//           <img src="https://my.stripo.email/content/guids/bank-images/images/19651540298246843.png"/>
//         </div>
//         <div className="md:w-1/2 flex flex-col lg:w-1/2 items-start justify-center px-6 sm:px-10 lg:px-20">
//           <p className="text-base lg:text-xl pt-4 lg:pt-0 pb-5 text-justify">
//             Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
//             vulputate libero et velit interdum, ac aliquet odio mattis.
//           </p>
//           <button className="text-base lg:text-xl border-2 border-green hover:border-2 text-white hover:text-green bg-green hover:bg-transparent px-5 lg:px-10 py-2 rounded-lg tracking-wider ">Read More</button>
//         </div>
//       </div>

//       <div className="flex flex-col-reverse md:flex-row">
//         <div className="md:w-1/2 flex flex-col items-start justify-center px-6 sm:px-10 lg:px-20">
//             <p className="text-base lg:text-xl pt-4 lg:pt-0 pb-5 text-justify">
//             Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
//             vulputate libero et velit interdum, ac aliquet odio mattis.
//             </p>
//             <button className="text-base lg:text-xl border-2 border-green hover:border-2 text-white hover:text-green bg-green hover:bg-transparent  px-5 lg:px-10 py-2 rounded-lg tracking-wider ">Read More</button>
//         </div>
//         <div className="md:w-1/2 flex justify-center lg:justify-end">
//           <img src="../assets/campaings_blog2.png" alt="Campaings Blog" className="md:pr-10 lg:pr-20 w-[450px] h-[400px] lg:w-[500px] lg:h-[425px]" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OurCampaignsBlog;



import  { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';


// import blogbg from '../../assets/blogbg.jpg';
// import loader from '../../assets/loader.gif';
// import blogpage from '../../assets/blogpage.png';



// type event = {
//   _id: string;
//   title: string;
//   description: string;
//   imageUrl?: string;
//   createdAt : string ;
// };

const inputClasses = 'pl-10 pr-4 py-3 shadow-md text-md rounded-lg';
const hrClasses = 'flex-1 border-zinc-300';

const Blog = () => {
 
  const shouldAnimate = window.innerWidth <= 768;

  
  const [events, setevents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchevents = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get('https://ngo-backend-u2dt.onrender.com/getAllPost');
        setevents(response.data.sort((a:any, b:any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchevents();
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const filteredPosts = useMemo(() => {
    return events.filter(post => {
      return post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [events, searchQuery]);

  const pageCount = useMemo(() => Math.ceil(filteredPosts.length / itemsPerPage), [filteredPosts.length]);
  const paginatedPosts = useMemo(() => filteredPosts.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage), [filteredPosts, currentPage, itemsPerPage]);

  const extractFirst20Words = (text: string): string => {
    const words = text.split(' ');
    const first20Words = words.slice(0, 20);
    return first20Words.join(' ') + (words.length > 20 ? '...' : '');
  };

  if (loading) {
    // return <div className='w-full h-screen flex justify-center items-center'><img className='w-8' src={loader} alt="" /></div>;
  }

  if (!events.length) {
    return <div>No posts found</div>;
  }
  

  return (
    <div className="relative w-screen  flex justify-center shadow-md " >
      {/* <img className="absolute opacity-20 -z-1 object-cover w-full h-full -z-0" src={blogbg} alt="background" /> */}
      <div className=" lg:w-[60%] md:w-[80%] w-[95%] p-5 z-[5] flex flex-col justify-center md:mt-[17vh] ">
        <div className="mb-6 md:flex justify-between items-center">
          <h1 data-aos={shouldAnimate ? 'slide-right' : ''} className="text-[clamp(35px,3.5vw,5rem)] font-Mont font-bold">
            Latest<span className="text-blue-900 ml-3">Events</span>
          </h1>
          <div data-aos={shouldAnimate ? 'slide-left' : ''} className="flex items-center gap-2 mt-2">
            <hr className={hrClasses} />
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder='Search'
                className={inputClasses}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="w-4 h-4 absolute left-3 flex items-center"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {paginatedPosts.map((post: any) => (
            <div key={post._id} className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 md:w-2/5">
                <Link to={`/event/${post._id}`}>
                  <img src={post.imageUrl} alt={post.title} className="rounded-lg object-cover w-[400px] " />
                </Link>
              </div>
              <div className="flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-black mb-2">
                  <Link to={`/event/${post._id}`} className="hover:text-blue-900">
                    {post.title}
                  </Link>
                </h2>
                <p className="relative text-gray-700 max-h-[100px] overflow-hidden md:max-h-none md:overflow-visible">
                  {extractFirst20Words(post.description)}
                  <span className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent md:hidden"></span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row mt-6">
          <div className="flex justify-center  flex-wrap gap-2 space-x-2">
            <button
              onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 0))}
              className="bg-blue-300 hover:bg-blue-600 text-white py-2 rounded-md w-[90px]"
              disabled={currentPage === 0}
            >
              Previous
            </button>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index)}
                className={`px-4 py-2 rounded-md ${currentPage === index ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, pageCount - 1))}
              className="bg-blue-300 hover:bg-blue-600 text-white py-2 w-[90px] rounded-md"
              disabled={currentPage === pageCount - 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
