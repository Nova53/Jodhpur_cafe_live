import { useState, useEffect } from "react";
import Gallery from "../../components/Gallary";
import { BsInstagram } from "react-icons/bs";
import ContactForm from "../../components/Layout/Contactform";
import AutoCarousel from "../../components/Layout/Contactimg";
import Button from "../../components/common/Button";

const Location = () => {
  const [activeTab, setActiveTab] = useState("leeds");
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  // Scroll to top when showMoreInfo changes
  useEffect(() => {
    if (showMoreInfo) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showMoreInfo]);

  const locationData = {
    leeds: {
      name: "Leeds",
      address: "352-354 Kirkstall Rd, Burley, Leeds LS4 2HQ, United Kingdom",
      openingHours: {
        "MON - THURS": "11:30am to 10pm",
        "FRI - SAT": "11:30am to 11pm",
        SUNDAY: "11:30am to 10pm",
      },
      contact: {
        phone: "+441423550792",
        email: "jodhpur@gmail.com",
      },
      description:
        "We can usually get you seated pretty quickly, so please feel free to just turn up. If you'd rather book a table or have a larger group of you, that's great, too!",
    },
    harrogate: {
      name: "Harrogate",
      address: "12 Parliament St, Harrogate HG1 2RB, United Kingdom",
      openingHours: {
        "MON - THURS": "11:30am to 10pm",
        "FRI - SAT": "11:30am to 11pm",
        SUNDAY: "11:30am to 10pm",
      },
      contact: {
        phone: "+441423550792",
        email: "jodhpur@gmail.com",
      },
      description:
        "We can usually get you seated pretty quickly, so please feel free to just turn up. If you'd rather book a table or have a larger group of you, that's great, too!",
    },
  };

  const currentLocation = locationData[activeTab as keyof typeof locationData];

  // If showing more info, display the detailed location page
  if (showMoreInfo) {
    return (
      <div className="m-0 p-0">
        {/* Hero Section with नमस्ते */}
        <div className="relative h-[500px] sm:h-[580px] w-full flex flex-col justify-center items-center text-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
            style={{ backgroundImage: "url('./images/headerBanner2.webp')" }}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          {/* Content */}
          <p className="text-[48px] text-white z-10 font-semibold">नमस्ते</p> 
          <p className="text-[#F26632] text-[64px] z-10 font-bold" style={{fontFamily: 'alNevrada'}}>
            {currentLocation.name}
          </p>
        </div>

        <div className="bg-gradient-to-b from-[#F5F5DC] to-white flex flex-col gap-7 sm:gap-15 px-[20px] sm:px-[32px] md:px-[60px]">
          {/* Location Information Section with Light Beige Background */}
          <div className="">
            <div className="container">
              {/* Location Selection Buttons */}
              <div className="flex items-center justify-center gap-5 mb-6 sm:mb-10">
                <Button
                  variant={activeTab === "leeds" ? "primary" : "secondary"}
                  onClick={() => setActiveTab("leeds")}
                  className="w-full sm:w-fit"
                >
                  LEEDS
                </Button>

                <Button
                  variant={activeTab === "harrogate" ? "primary" : "secondary"}
                  onClick={() => setActiveTab("harrogate")}
                    className="w-full sm:w-fit"
                > 
                  HARROGATE
                </Button>
              </div>

              {/* Introductory Text */}
              <div className="text-left mb-6 sm:mb-10">
                <p className="text-lg text-left text-gray-700">
                  {currentLocation.description}
                </p>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Contact & Hours */}
                <div className=" space-y-5 sm:space-y-8">
                  {/* Opening Hours */}
                  <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#F5652F] mb-4">

                      Opening Time
                    </h3>
                    <div className="space-y-3 flex justify-between flex-wrap gap-2  sm:gap-4">
                      {Object.entries(currentLocation.openingHours).map(
                        ([day, hours]) => (
                          <div
                            key={day}
                            className="flex flex-col max-w-[210px]"
                          >
                            <span className="font-medium text-[16px] md:text-[20px] text-[var(--quaternary-color)]">
                              {day}
                            </span>
                            <span className="text-[#12A1CE] text-[16px] md:text-[20px] font-normal">
                              {hours}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#F5652F] mb-4">
                      Contact
                    </h3>
                    <div className="space-y-3 flex justify-between">
                      <div className="flex flex-col w-[210px]">
                        <span className="font-medium text-[16px] md:text-[20px] text-gray-700">
                          Call us on:
                        </span>
                        <span className="text-[#12A1CE] text-[16px] md:text-[20px] font-normal">
                          {currentLocation.contact.phone}
                        </span>
                      </div>
                      <div className="flex flex-col text-[16px] md:text-[20px] w-[210px]">
                        <span className="font-medium text-gray-700">
                          Email us on:
                        </span>
                        <span className="text-[#12A1CE] text-[16px] md:text-[20px] font-normal">
                          {currentLocation.contact.email}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary">LUNCH MENU</Button>
                    <Button variant="secondary">DINNER MENU</Button>
                  </div>
                </div>

                {/* Right Column - Map */}
                <div className="bg-gray-100 rounded-lg h-80 overflow-hidden shadow-lg">
                  <div className="relative h-full">
                    <iframe
                      src={
                        activeTab === "leeds"
                          ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.1234567890123!2d-1.5678!3d53.8123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDQ4JzQ0LjMiTiAxwrAzNCcwNC4xIlc!5e0!3m2!1sen!2suk!4v1234567890123"
                          : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.1234567890123!2d-1.4789!3d53.9945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zNTPCsDU5JzQwLjIiTiAxwrAyOCc0MC4wIlc!5e0!3m2!1sen!2suk!4v1234567890123"
                      }
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Jodhpur Cafe ${currentLocation.name} Location`}
                      className="rounded-lg shadow-md"
                    />

                    {/* Map overlay with location info */}
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-md">
                      <div className="text-xs text-gray-700">
                        <div className="font-medium">
                          📍 {currentLocation.name}
                        </div>
                        <div className="text-gray-500">
                          {activeTab === "leeds"
                            ? "Kirkstall Road"
                            : "Parliament Street"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            {/* Visual Of Leeds/Harrogate Section */}
            <div className="text-center ">
              <h2 className="text-2xl sm:text-4xl text-[#F5652F] font-bold font-[Poppins]">
                Visual Of {currentLocation.name}
              </h2>
            </div>
            <div className="mt-10">
              {/* Top Row - Responsive */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                <div className="md:col-span-2 overflow-hidden rounded-lg">
                  <img
                    src="./images/leads/leed1.webp"
                    alt="Restaurant Interior - Wide Shot"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />
                </div>
                <div className="md:col-span-3 overflow-hidden rounded-lg">
                  <img
                    src="./images/leads/leed4.webp"
                    alt="Jodhpur Logo - Dark Background"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Bottom Row - Responsive */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="./images/leads/leed3.webp"
                    alt="Namaste Gesture"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="./images/leads/leed2.webp"
                    alt="Outdoor Dining with Thali"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="./images/leads/leed5.webp"
                    alt="Food Thali Close-up"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Connect With Jodhpur Section */}
          <div className="flex flex-col items-center pb-20">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-4xl text-[#F5652F] font-bold font-[Poppins]">
                Connect With Jodhpur
              </h2>
            </div>
            <div className="mt-10">
              {/* First Row - 4 images */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className="overflow-hidden rounded-xl h-[150px] w-[150px] sm:h-[196px] sm:w-[204px]"
                  >
                    <img
                      src={`./images/Gallaryimg${num}.webp`}
                      alt={`Gallery Image ${num}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              {/* Second Row - 4 images */}
              <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[5, 6, 7, 8].map((num) => (
                  <div
                    key={num}
                    className="overflow-hidden rounded-xl h-[196px] w-[204px]"
                  >
                    <img
                      src={`./images/Gallaryimg${num}.webp`}
                      alt={`Gallery Image ${num}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              {/* Follow Us Button with Instagram Icon */}
              <div className="text-center flex justify-center">
                <button className="btn1 group flex items-center justify-center gap-2">
                  <span className="btn1text">Follow Us</span>
                  <BsInstagram className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main location page
  return (
    <div className="m-0 p-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('images/bg_img.jpg')" }}>
      <div className="bg-[url('./images/headerBanner.webp')] bg-cover bg-center bg-no-repeat h-[500px] p-0 m-0 flex flex-col justify-center items-center text-center">
        <p className="text-[48px] text-[#ffffff]">
          "Find Jodhpur Flavours
          <br /> near you."
        </p>
        <p className="text-[#ffffff] text-[24px]">
          "Bringing the royal taste of Rajasthan to your city."
        </p>
      </div>

      {/* Location Tabs */}
      <div className="container">
        <div className="flex items-center justify-center gap-5 mb-10">
          <Button
            variant={activeTab === "leeds" ? "primary" : "secondary"}
            onClick={() => setActiveTab("leeds")}
          >
            LEEDS
          </Button>

          <Button
            variant={activeTab === "harrogate" ? "primary" : "secondary"}
            onClick={() => setActiveTab("harrogate")}
          >
            HARROGATE
          </Button>
        </div>

        {/* Location Content */}
        <div className="flex flex-col-reverse sm:flex-row md:justify-between items-start sm:items-end md:items-center gap-6 sm:gap-12 mx-[32px] lg:mx-[60px]">
          <div className="flex justify-center items-start gap-8">
            <div className="hidden md:flex h-6 w-6 lg:h-10 lg:w-10">
              <img src="./images/icon.webp" alt="Jodhpur Icon" />
            </div>
            <div>
              <p className="text-[#F5652F] text-2xl">नमस्ते,</p>
              <p className="text-[#F5652F] text-3xl">{currentLocation.name}</p>
              <p className="py-[1em]">
                {currentLocation.address.split(", ").map((line, index) => (
                  <span key={index} className="text-xl">
                    {line}
                    {index < currentLocation.address.split(", ").length - 1 && (
                      <br />
                    )}
                  </span>
                ))}
              </p>
              <div className="flex items-center justify-center gap-5">
                <Button onClick={() => setShowMoreInfo(true)}>MORE INFO</Button>
                <Button
                  variant="secondary"
                  onClick={() => setShowMoreInfo(true)}
                >
                  VIEW MORE
                </Button>
              </div>
            </div>
          </div>
          <div className="flex gap-6 justify-center">
            <div className="overflow-hidden rounded-lg mb-5">
              <img
                className="max-h-[520px] w-[363px] object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                src="./images/img1.webp"
                alt="Restaurant Interior 1"
              />
            </div>
            <div className="overflow-hidden rounded-lg mt-5">
              <img
                className="max-h-[520px] w-[363px] hover:scale-105 transition-transform duration-500 cursor-pointer"
                src="./images/img2.webp"
                alt="Restaurant Interior 2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="text-center ">
          <h2 className="text-4xl text-[#F5652F] font-bold font-[Poppins]">
            Jodhpur's Gallery
          </h2>
        </div>
        <Gallery />
      </div>
      
      <div className="flex flex-col-reverse lg:flex-row justify-center">
        <div className="bg-[url('/images/bg.webp')] bg-cover bg-center bg-no-repeat w-full lg:w-1/2 p-4 sm:p-[2em] flex flex-col justify-center">
          <ContactForm />
        </div>
        <div className="hidden lg:flex w-full lg:w-1/2">
          <AutoCarousel />
        </div>
      </div>
    </div>
  );
};

export default Location;
