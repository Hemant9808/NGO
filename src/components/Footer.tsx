

const Footer = () => {
  return (
    <footer className="bg-green sm:px-[6rem]  flex flex-col gap-9 text-white py-10">
      <div className="container mx-auto px-4 md:flex md:justify-between">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">LOGO</h2>
          <p className="mb-4 ">Empowering Rural Lives with Health and Education</p>
          <button className="bg-white text-green font-semibold py-2 px-4 rounded-[0.5rem]">DONATE</button>
        </div >
        <div className='flex gap-[12rem]'>
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Connect</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Reach Us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Twitter</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">LinkedIn</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Blogs</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Campaigns</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Affiliated Partners</a></li>
          </ul>
        </div>
        </div>
      </div>
      <div className="border-t border-white mt-8 pt-4 text-center">
        <p>© 2024 Ifaaction. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
