// import Gallery from "../../components/Gallary";
// import JodhpurMap from "../../components/Layout/Map";
// const images = [
//   "./gimg.png",
//   "./gimg2.png",
//   "./gimg3.png",
//   "./gimg4.png",
//   "./gimg5.png",
//   "./img6.png",
//   "./img6.png",
//   "./img8.png",
// ];
// // const Leeds = () => {
// //   return (
// //     <div>
// //       <div className="bg-[url(./mainImage.png)] bg-black opacity-95 bg-cover bg-center bg-no-repeat h-[500px] p-0 m-0 flex flex-col justify-center items-center text-center">
// //         <p className="text-[32px] text-[#ffffff]">नमस्ते</p>
// //         <p className="text-[#F26632] text-[4em]">Leeds</p>
// //       </div>
// //       <div className="p-[2em]">
// //         <div className="flex items-center justify-center gap-5">
// //           <button className="btn1 group">
// //             <span className="btn1text">LEEDS</span>
// //           </button>
// //           <button className="btn2 group">
// //             <span className="btn2text">HARROAGTE</span>
// //           </button>
// //         </div>
// //         <p className="mt-4 ">
// //           we can usually get you seated pretty quickly, so please feel free to
// //           just turn up. if you'd rather book a table or <br />
// //           there's a larger group of you, that's great, too!
// //         </p>
// //       </div>
// //       <div className=" p-[2em] flex justify-between">
// //         <div className="w-[40%]">
// //           <div>
// //             <h2 className="text-[#F26632] text-[1.5em]">Opening Time</h2>
// //             <div className="flex gap-10">
// //               <div>
// //                 <p>MON - THURS</p>
// //                 <p className="text-[#12A1CE]">11:30:am to 10pm</p>
// //               </div>
// //               <div>
// //                 <p>FRI - SAT</p>
// //                 <p className="text-[#12A1CE]">11:30:am to 11pm</p>
// //               </div>
// //               <div>
// //                 <p>SUNDAY</p>
// //                 <p className="text-[#12A1CE]">11:30:am to 10pm</p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="mt-10">
// //             <h2 className="text-[#F26632] text-[1.5em]">Contact</h2>
// //             <div className="flex justify-start gap-11">
// //               <div>
// //                 <p>Call Us On</p>
// //                 <p className="text-[#12A1CE]">+441423550792</p>
// //               </div>
// //               <div>
// //                 <p>Email Us On</p>
// //                 <p className="text-[#12A1CE]">jodhpur@gmail.com</p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="flex mt-10 gap-5">
// //             <button className="btn1 group">
// //               <span className="btn1text text-uppercase">LUNCH MENU</span>
// //             </button>
// //             <button className="btn2 group">
// //               <span className="btn2text text-uppercase">DINNER MENU</span>
// //             </button>
// //           </div>
// //         </div>

// //         <div className="w-[70%] ml-8 ">
// //           <JodhpurMap />
// //         </div>
// //       </div>
// //       <div className="text-center p-[2em]">
// //         <h2 className="text-4xl text-[#F5652F] font-bold font-[Poppins]">
// //           Visual of Leeds
// //         </h2>
// //       </div>
// //       <Gallery />
// //       <div className="text-center p-[2em]">
// //         <h2 className="text-4xl text-[#F5652F] font-bold font-[Poppins]">
// //           Connect with Jodhpur
// //         </h2>
// //       </div>
// //       <div className="grid grid-cols-4 px-[14em] justify-center ">
// //         <img className="h-[95%] w-[95%]" src={images[0]} />
// //         <img className="h-[95%] w-[95%]" src={images[1]} />
// //         <img className="h-[95%] w-[95%]" src={images[2]} />
// //         <img className="h-[95%] w-[95%]" src={images[3]} />
// //         <img className="h-[95%] w-[95%]" src={images[4]} />
// //         <img className="h-[95%] w-[95%]" src={images[5]} />
// //         <img className="h-[95%] w-[95%]" src={images[6]} />
// //         <img className="h-[95%] w-[95%]" src={images[7]} />
// //       </div>
// //       <div className="flex justify-center items-center">
// //         <button className="btn1 group">
// //           <span className="btn1text text-uppercase flex gap-2 justify-center items-center">
// //             Follow Us <img src="./instagram.png" />
// //           </span>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Leeds;

// import { useState, type Key } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// // import JodhpurMap from "./Map";
// // import Gallery from "./Gallery";

// export default function LocationPage() {
//     const locations: Record<LocationKeyType, { bg: string; title: string }> = {
//         LEEDS: {
//           bg: "./leedsImage.png",
//           title: "Leeds"
//         },
//         HARROGATE: {
//           bg: "./harrogateImage.png",
//           title: "Harrogate"
//         }
//       };
//   const [selected, setSelected] = useState("LEEDS");

//   const fadeVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//     exit: { opacity: 0 },
//   };
  

//   return (
//     <div>
//         <div className="bg-[url(./mainImage.png)] bg-black opacity-95 bg-cover bg-center bg-no-repeat h-[500px] p-0 m-0 flex flex-col justify-center items-center text-center">
//          <p className="text-[32px] text-[#ffffff]">नमस्ते</p>
//          <p className="text-[#F26632] text-[4em]">{locations[selected].title}</p>
//     </div>
//       {/* Buttons */}
//       <div className="flex items-center justify-center gap-5 my-8">
//         <button
//           onClick={() => setSelected("LEEDS")}
//           className={`btn1 group ${
//             selected === "LEEDS" ? "bg-[#F26632] text-white" : "bg-[#FFFFFF] text-[#F26632] border-2 border-[#F26632]"
//           }`}
//         >
//           LEEDS
//         </button>
//         <button
//           onClick={() => setSelected("HARROGATE")}
//           className={`btn2 group ${
//             selected === "HARROGATE" ? "bg-[#F26632] text-white" : "bg-[#FFFFFF] text-[#F26632] border-2 border-[#F26632]"
//           }`}
//         >
//           HARROGATE
//         </button>
//       </div>

//       {/* Animated Section */}
//       <AnimatePresence mode="wait">
//         {selected === "LEEDS" && (
//           <motion.div
//             key="leeds"
//             variants={fadeVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             transition={{ duration: 0.4 }}
//           >
//             {/* Leeds Section */}
//             <div className="p-[2em] flex justify-between">
//               <div className="w-[40%]">
//                 <div>
//                   <h2 className="text-[#F26632] text-[1.5em]">Opening Time</h2>
//                   <div className="flex gap-10">
//                     <div>
//                       <p>MON - THURS</p>
//                       <p className="text-[#12A1CE]">11:30:am to 10pm</p>
//                     </div>
//                     <div>
//                       <p>FRI - SAT</p>
//                       <p className="text-[#12A1CE]">11:30:am to 11pm</p>
//                     </div>
//                     <div>
//                       <p>SUNDAY</p>
//                       <p className="text-[#12A1CE]">11:30:am to 10pm</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <h2 className="text-[#F26632] text-[1.5em]">Contact</h2>
//                   <div className="flex justify-start gap-11">
//                     <div>
//                       <p>Call Us On</p>
//                       <p className="text-[#12A1CE]">+441423550792</p>
//                     </div>
//                     <div>
//                       <p>Email Us On</p>
//                       <p className="text-[#12A1CE]">jodhpur@gmail.com</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex mt-10 gap-5">
//                   <button className="btn1 group">
//                     <span className="btn1text">LUNCH MENU</span>
//                   </button>
//                   <button className="btn2 group">
//                     <span className="btn2text">DINNER MENU</span>
//                   </button>
//                 </div>
//               </div>
//               <div className="w-[70%] ml-8">
//                 <JodhpurMap />
//               </div>
//             </div>

//             <div className="text-center p-[2em]">
//               <h2 className="text-4xl text-[#F5652F] font-bold font-[Poppins]">
//                 Visual of Leeds
//               </h2>
//             </div>
//             <Gallery />
//             <div className="text-center p-[2em]">
//               <h2 className="text-4xl text-[#F5652F] font-bold font-[Poppins]">
//                 Connect with Jodhpur
//               </h2>
//             </div>
//             <div className="grid grid-cols-4 px-[14em] justify-center">
//               {images.map((img, i) => (
//                 <img key={i} className="h-[95%] w-[95%]" src={img} />
//               ))}
//             </div>
//             <div className="flex justify-center items-center">
//               <button className="btn1 group">
//                 <span className="btn1text flex gap-2 justify-center items-center">
//                   Follow Us <img src="./instagram.png" />
//                 </span>
//               </button>
//             </div>
//           </motion.div>
//         )}

//         {selected === "HARROGATE" && (
//           <motion.div
//             key="harrogate"
//             variants={fadeVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             transition={{ duration: 0.4 }}
//           >
//             {/* Harrogate Section (same structure, just different title) */}
//             <div className="p-[2em] flex justify-between">
//               <div className="w-[40%]">
//                 <div>
//                   <h2 className="text-[#F26632] text-[1.5em]">Opening Time</h2>
//                   <div className="flex gap-10">
//                     <div>
//                       <p>MON - THURS</p>
//                       <p className="text-[#12A1CE]">11:30:am to 10pm</p>
//                     </div>
//                     <div>
//                       <p>FRI - SAT</p>
//                       <p className="text-[#12A1CE]">11:30:am to 11pm</p>
//                     </div>
//                     <div>
//                       <p>SUNDAY</p>
//                       <p className="text-[#12A1CE]">11:30:am to 10pm</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <h2 className="text-[#F26632] text-[1.5em]">Contact</h2>
//                   <div className="flex justify-start gap-11">
//                     <div>
//                       <p>Call Us On</p>
//                       <p className="text-[#12A1CE]">+441423550792</p>
//                     </div>
//                     <div>
//                       <p>Email Us On</p>
//                       <p className="text-[#12A1CE]">jodhpur@gmail.com</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex mt-10 gap-5">
//                   <button className="btn1 group">
//                     <span className="btn1text">LUNCH MENU</span>
//                   </button>
//                   <button className="btn2 group">
//                     <span className="btn2text">DINNER MENU</span>
//                   </button>
//                 </div>
//               </div>
//               <div className="w-[70%] ml-8">
//                 <JodhpurMap />
//               </div>
//             </div>

//             <div className="text-center p-[2em]">
//               <h2 className="text-4xl text-[#F5652F] font-bold font-[Poppins]">
//                 Visual of Harrogate
//               </h2>
//             </div>
//             <Gallery />
//             <div className="text-center p-[2em]">
//               <h2 className="text-4xl text-[#F5652F] font-bold font-[Poppins]">
//                 Connect with Jodhpur
//               </h2>
//             </div>
//             <div className="grid grid-cols-4 px-[14em] justify-center">
//               {images.map((img: string | undefined, i: Key | null | undefined) => (
//                 <img key={i} className="h-[95%] w-[95%]" src={img} />
//               ))}
//             </div>
//             <div className="flex justify-center items-center">
//               <button className="btn1 group">
//                 <span className="btn1text flex gap-2 justify-center items-center">
//                   Follow Us <img src="./instagram.png" />
//                 </span>
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


import { useState, type Key } from "react";
import { motion, AnimatePresence } from "framer-motion";
import JodhpurMap from "../../components/Layout/Map";
import Gallery from "../../components/Gallary";

const images = [
  "./gimg.png",
  "./gimg2.png",
  "./gimg3.png",
  "./gimg4.png",
  "./gimg5.png",
  "./img6.png",
  "./img6.png",
  "./img8.png",
];

export default function LocationPage() {
  const locations: Record<string, { bg: string; title: string }> = {
    LEEDS: { bg: "./leedsImage.png", title: "Leeds" },
    HARROGATE: { bg: "./harrogateImage.png", title: "Harrogate" },
  };

  const [selected, setSelected] = useState("LEEDS");

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-[url(./mainImage.png)] bg-black opacity-95 bg-cover bg-center bg-no-repeat h-[400px] sm:h-[500px] flex flex-col justify-center items-center text-center">
        <p className="text-[28px] sm:text-[32px] text-white">नमस्ते</p>
        <p className="text-[#F26632] text-[2.5em] sm:text-[4em] font-bold">
          {locations[selected].title}
        </p>
      </div>

      {/* Location Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 my-6 sm:my-8 px-4">
        <button
          onClick={() => setSelected("LEEDS")}
          className={`px-6 py-2 rounded-md ${
            selected === "LEEDS"
              ? "bg-[#F26632] text-white"
              : "bg-white text-[#F26632] border-2 border-[#F26632]"
          }`}
        >
          LEEDS
        </button>
        <button
          onClick={() => setSelected("HARROGATE")}
          className={`px-6 py-2 rounded-md ${
            selected === "HARROGATE"
              ? "bg-[#F26632] text-white"
              : "bg-white text-[#F26632] border-2 border-[#F26632]"
          }`}
        >
          HARROGATE
        </button>
      </div>

      {/* Animated Sections */}
      <AnimatePresence mode="wait">
        {["LEEDS", "HARROGATE"].map(
          (loc) =>
            selected === loc && (
              <motion.div
                key={loc}
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                {/* Info + Map */}
                <div className="p-4 sm:p-[2em] flex flex-col md:flex-row justify-between gap-6 md:gap-8">
                  {/* Info Section */}
                  <div className="w-full md:w-[40%]">
                    {/* Opening Time */}
                    <h2 className="text-[#F26632] text-xl sm:text-[1.5em]">
                      Opening Time
                    </h2>
                    <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-10 mt-2">
                      <div>
                        <p>MON - THURS</p>
                        <p className="text-[#12A1CE]">11:30am to 10pm</p>
                      </div>
                      <div>
                        <p>FRI - SAT</p>
                        <p className="text-[#12A1CE]">11:30am to 11pm</p>
                      </div>
                      <div>
                        <p>SUNDAY</p>
                        <p className="text-[#12A1CE]">11:30am to 10pm</p>
                      </div>
                    </div>

                    {/* Contact */}
                    <h2 className="text-[#F26632] text-xl sm:text-[1.5em] mt-8">
                      Contact
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-11 mt-2">
                      <div>
                        <p>Call Us On</p>
                        <p className="text-[#12A1CE]">+441423550792</p>
                      </div>
                      <div>
                        <p>Email Us On</p>
                        <p className="text-[#12A1CE]">jodhpur@gmail.com</p>
                      </div>
                    </div>

                    {/* Menu Buttons */}
                    <div className="flex flex-wrap gap-4 mt-8">
                      <button className="px-4 py-2 bg-[#F26632] text-white rounded-md">
                        LUNCH MENU
                      </button>
                      <button className="px-4 py-2 border-2 border-[#F26632] text-[#F26632] rounded-md">
                        DINNER MENU
                      </button>
                    </div>
                  </div>

                  {/* Map Section */}
                  <div className="w-full md:w-[60%]">
                    <JodhpurMap />
                  </div>
                </div>

                {/* Visual Section */}
                <div className="text-center px-4 sm:px-[2em] mt-6">
                  <h2 className="text-2xl sm:text-4xl text-[#F5652F] font-bold font-[Poppins]">
                    Visual of {locations[loc].title}
                  </h2>
                </div>
                <Gallery />

                {/* Connect Section */}
                <div className="text-center px-4 sm:px-[2em] mt-8">
                  <h2 className="text-2xl sm:text-4xl text-[#F5652F] font-bold font-[Poppins]">
                    Connect with Jodhpur
                  </h2>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 sm:px-12 md:px-[14em] mt-6">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      className="h-auto w-full object-cover rounded-md"
                      src={img}
                      alt={`gallery-${i}`}
                    />
                  ))}
                </div>

                {/* Follow Us Button */}
                <div className="flex justify-center items-center mt-6 mb-8">
                  <button className="px-6 py-2 bg-[#F26632] text-white rounded-md flex items-center gap-2">
                    Follow Us <img src="./instagram.png" alt="Instagram" />
                  </button>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
}
