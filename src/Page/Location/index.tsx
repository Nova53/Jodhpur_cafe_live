// import { Link } from "react-router-dom";
// import Gallery from "../../components/Gallary";
// import ContactForm from "../../components/Layout/Contactform";
// import AutoCarousel from "../../components/Layout/Contactimg";

// const Location = () => {
//   return (
//     <div className="m-0 p-0">
//       <div className="bg-[url(./headerBanner.png)] bg-cover bg-center bg-no-repeat h-[500px] p-0 m-0 flex flex-col justify-center items-center text-center">
//         <p className="text-[48px] text-[#ffffff]">
//           “Find Jodhpur Flavours
//           <br /> near you.”
//         </p>
//         <p className="text-[#ffffff] text-[24px]">
//           “Bringing the royal taste of Rajasthan to your city.”
//         </p>
//       </div>
//       <div className="p-[2em]">
//         <div className="flex items-center justify-center gap-5">
//           <button className="btn1 group">
//             <span className="btn1text">LEEDS</span>
//           </button>
//           <button className="btn2 group">
//             <span className="btn2text">HARROAGTE</span>
//           </button>
//         </div>
//       </div>
//       <div className="flex w-[1440px] overflow-hidden">
//         <div className="w-[30%] flex justify-center items-center gap-6 p-[2em]">
//           <div className="pb-[11em]">
//             <img src="./icon.png" />
//           </div>
//           <div>
//             <p className="text-[#F5652F] text-2xl">नमस्ते,</p>
//             <p className="text-[#F5652F] text-3xl">Leeds</p>
//             <p className="py-[1em]">
//               352-354 Kirkstall Rd,
//               <br /> Burley, Leeds LS4 2HQ,
//               <br /> United Kingdom
//             </p>
//             <div className="flex items-center justify-center gap-5">
//               <button className="btn1 group">
//                 <Link to="/leeds">
//                 <span className="btn1text">MORE INFO</span>
//                 </Link>
//               </button>
//               <button className="btn2 group">
//                 <span className="btn2text">VIEW MENU</span>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="flex w-[70%] gap-4 justify-center">
//           <img className="h-[520px] mb-5" src="./img1.jpg" />
//           <img className="h-[520px] mt-5" src="./img2.png" />
//         </div>
//       </div>
//       <div className="text-center p-[2em]">
//         <h2 className="text-4xl text-[#F5652F] font-bold font-[Poppins]">Jodhpur’s Gallery</h2>
//       </div>
//       <Gallery/>
//       <div className="flex justify-center ">
//         <div className=" bg-[url(./bg.jpg)] bg-cover bg-center bg-no-repeat w-[50%] p-[2em] ">
//           <ContactForm/>
//         </div>
//         <div className="w-[50%] ">
//           <AutoCarousel/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Location;
import { Link } from "react-router-dom";
import Gallery from "../../components/Gallary";
import ContactForm from "../../components/Layout/Contactform";
import AutoCarousel from "../../components/Layout/Contactimg";

const Location = () => {
  return (
    <div className="m-0 p-0">
      {/* Banner */}
      <div className="bg-[url(./headerBanner.png)] bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] lg:h-[500px] flex flex-col justify-center items-center text-center px-4">
        <p className="text-2xl sm:text-3xl lg:text-[48px] text-white leading-snug">
          “Find Jodhpur Flavours
          <br /> near you.”
        </p>
        <p className="text-white text-base sm:text-lg lg:text-[24px] mt-2">
          “Bringing the royal taste of Rajasthan to your city.”
        </p>
      </div>

      {/* Location Buttons */}
      <div className="p-4 sm:p-[2em]">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <button className="btn1 group">
            <span className="btn1text">LEEDS</span>
          </button>
          <button className="btn2 group">
            <span className="btn2text">HARROGATE</span>
          </button>
        </div>
      </div>

      {/* Location Info */}
      <div className="flex flex-col lg:flex-row w-full overflow-hidden">
        {/* Left Column */}
        <div className="w-full lg:w-[30%] flex justify-center items-center gap-6 p-4 sm:p-[2em]">
          <div className="hidden sm:block pb-0 sm:pb-[11em]">
            <img src="./icon.png" alt="Location Icon" />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-[#F5652F] text-xl sm:text-2xl">नमस्ते,</p>
            <p className="text-[#F5652F] text-2xl sm:text-3xl">Leeds</p>
            <p className="py-4 text-sm sm:text-base">
              352-354 Kirkstall Rd,
              <br /> Burley, Leeds LS4 2HQ,
              <br /> United Kingdom
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <button className="btn1 group">
                <Link to="/leeds">
                  <span className="btn1text">MORE INFO</span>
                </Link>
              </button>
              <button className="btn2 group">
                <span className="btn2text">VIEW MENU</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col sm:flex-row w-full lg:w-[70%] gap-4 justify-center p-4">
          <img
            className="w-full sm:w-1/2 h-auto object-cover mb-2 sm:mb-5"
            src="./img1.jpg"
            alt="Location Image 1"
          />
          <img
            className="w-full sm:w-1/2 h-auto object-cover mt-2 sm:mt-5"
            src="./img2.png"
            alt="Location Image 2"
          />
        </div>
      </div>

      {/* Gallery Title */}
      <div className="text-center p-4 sm:p-[2em]">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#F5652F] font-bold font-[Poppins]">
          Jodhpur’s Gallery
        </h2>
      </div>

      {/* Gallery */}
      <Gallery />

      {/* Contact + Carousel */}
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="bg-[url(./bg.jpg)] bg-cover bg-center bg-no-repeat w-full lg:w-1/2 p-4 sm:p-[2em]">
          <ContactForm />
        </div>
        <div className="w-full lg:w-1/2">
          <AutoCarousel />
        </div>
      </div>
    </div>
  );
};

export default Location;
