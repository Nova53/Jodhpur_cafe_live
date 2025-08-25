import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-[url('/images/nav_bg.jpg')] bg-cover bg-center">
      <div className="flex items-center justify-between h-[5em] px-4 sm:px-[2em]">
        {/* Left: Nav Links (Desktop) */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-5">
            <li className="text-white hover:text-[#F5652F]">
              <Link to="/">HOME</Link>
            </li>
            <li className="text-white hover:text-[#F5652F]">
              <Link to="/">ABOUT US</Link>
            </li>
            <li className="text-white hover:text-[#F5652F]">
              <Link to="/">CATERING</Link>
            </li>
            <li className="text-white hover:text-[#F5652F]">
              <Link to="/">LOCATION</Link>
            </li>
          </ul>
        </nav>

        {/* Center: Logo */}
        <div className="flex items-center justify-center">
          <img 
            src="/images/jodhpur.webp" 
            className="h-[130px] w-auto object-contain" 
            alt="Jodhpur Cafe Logo" 
            onError={(e) => {
              console.error('Logo failed to load:', e);
              e.currentTarget.style.display = 'none';
            }}
            onLoad={() => console.log('Logo loaded successfully')}
          />
        </div>

        {/* Right: Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <button className="bg-[#F5652F] text-white rounded-[12px] py-[12px] px-[20px] text-[.8em]">
            BOOK A TABLE
          </button>
          <button className="text-[#F5652F] border border-[#F5652F] rounded-[12px] py-[12px] px-[20px] text-[.8em] hover:text-white hover:bg-[#F5652F]">
            ORDER NOW
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700">
          {/* Decorative background patterns */}
          <div className="absolute inset-0 top-[20%] ">
             <img src="/images/Group2.webp" alt="" className="h-[300px] w-[170px]"/>
          </div>

          <div className="absolute bottom-3 right-0 ">
             <img src="/images/Group1.webp" alt="" className="h-[200px] w-[150px]"/>
          </div>

          {/* Header with logo and close button */}
          <div className="flex items-center justify-between p-4 h-[5em] relative">
          <div className="flex items-center justify-center">
          <img 
            src="/images/jodhpur.webp" 
            className="h-[130px] w-auto object-contain" 
            alt="Jodhpur Cafe Logo" 
            onError={(e) => {
              console.error('Logo failed to load:', e);
              e.currentTarget.style.display = 'none';
            }}
            onLoad={() => console.log('Logo loaded successfully')}
          />
        </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl cursor-pointer z-50"
            >
              <IoCloseOutline />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col items-end justify-start h-full mt-10 pr-8 space-y-8 relative">
            <div className="text-right">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-medium uppercase tracking-wider block ${
                  isActive("/") ? "text-[#F5652F]" : "text-white"
                }`}
              >
                HOME
              </Link>
              <div
                className={`w-16 h-0.5 mt-2 ml-auto ${
                  isActive("/") ? "bg-[#F5652F]" : "bg-white"
                }`}
              ></div>
            </div>

            <div className="text-right">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl font-medium uppercase tracking-wider block"
              >
                ABOUT US
              </Link>
              <div className="w-16 h-0.5 bg-white mt-2 ml-auto"></div>
            </div>

            <div className="text-right">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl font-medium uppercase tracking-wider block"
              >
                CATERING
              </Link>
              <div className="w-16 h-0.5 bg-white mt-2 ml-auto"></div>
            </div>

            <div className="text-right">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl font-medium uppercase tracking-wider block"
              >
                LOCATION
              </Link>
              <div className="w-16 h-0.5 bg-white mt-2 ml-auto"></div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
