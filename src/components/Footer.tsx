import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green sm:px-16 lg:px-24 flex flex-col gap-9 text-white pt-10 pb-4">

      <div className="container flex flex-col md:flex-row items-center mx-auto px-4 md:flex md:justify-between">
        <div className="mb-8 md:mb-0">
          <h2 className="logo-image mb-4 md:mb-8"><img src="../assets/logo_white.png" alt="logo" className=""/></h2>
          <p className="text-xl mb-4 md:mb-12 font-medium">
            Empowering Rural Lives with Health<br /> and Education
          </p>
          <Link to="/donate" className="text-xl bg-white text-green py-2 px-10 rounded-[0.5rem] tracking-wider" style={{fontFamily: 'Bebas Neue'}}>
            DONATE
          </Link>
        </div>
        <div className="flex gap-16 lg:gap-32 xl:gap-48">
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-semibold mb-4 md:mb-8">Connect</h3>
            <ul className="text-xl">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Reach Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-4 md:mb-8">Company</h3>
            <ul className="text-xl">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Blogs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Campaigns
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Affiliated Partners
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white mt-8 px-4 pt-4 text-center">
        <p>© 2024 iTraction. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
