// import React from 'react'

// const Header = () => {
//   return (
//     <div className='flex items-center justify-between bg-[url(./image.jpg)] h-[5em] p-[2em]'>
//       <div className=''>
//         <ul className='flex items-center justify-between gap-5'>
//           <li className='text-white hover:text-[#F5652F] active:text-[#F5652F]'>HOME</li>
//           <li className='text-white hover:text-[#F5652F] active:text-[#F5652F]'>ABOUT US</li>
//           <li className='text-white hover:text-[#F5652F] active:text-[#F5652F]'>CATRING</li>
//           <li className='text-white hover:text-[#F5652F] active:text-[#F5652F]'>LOACTION</li>
//         </ul>
//       </div>
//       <div className='flex items-center justify-center '>
//         <img src='./jclogo.png' className='h-[50px]'/>
//       </div>
//       <div className='flex items-center justify-between gap-5'>
//        <button className='bg-[#F5652F] text-white rounded-[12px] py-[12px] px-[20px] text-[.8em]'>BOOK A TABLE</button>
//        <button className='bg-[] text-[#F5652F] border border-[#F5652F] rounded-[12px] py-[12px] px-[20px] text-[.8em] hover:text-white hover:bg-[#F5652F]'>ORDER NOW</button>
//       </div>
//     </div>
//   )
// }

// export default Header

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[url(./image.jpg)] bg-cover bg-center">
      <div className="flex items-center justify-between h-[5em] px-4 sm:px-[2em]">
        {/* Left: Nav Links (Desktop) */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-5">
            <li className="text-white hover:text-[#F5652F]">HOME</li>
            <li className="text-white hover:text-[#F5652F]">ABOUT US</li>
            <li className="text-white hover:text-[#F5652F]">CATERING</li>
            <li className="text-white hover:text-[#F5652F]">LOCATION</li>
          </ul>
        </nav>

        {/* Center: Logo */}
        <div>
          <img src="./jclogo.png" className="h-[50px]" alt="Logo" />
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

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 p-4 space-y-4">
          <ul className="flex flex-col gap-4">
            <li className="text-white hover:text-[#F5652F]">HOME</li>
            <li className="text-white hover:text-[#F5652F]">ABOUT US</li>
            <li className="text-white hover:text-[#F5652F]">CATERING</li>
            <li className="text-white hover:text-[#F5652F]">LOCATION</li>
          </ul>
          <div className="flex flex-col gap-3 mt-4">
            <button className="bg-[#F5652F] text-white rounded-[12px] py-[12px] px-[20px] text-[.8em]">
              BOOK A TABLE
            </button>
            <button className="text-[#F5652F] border border-[#F5652F] rounded-[12px] py-[12px] px-[20px] text-[.8em] hover:text-white hover:bg-[#F5652F]">
              ORDER NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
