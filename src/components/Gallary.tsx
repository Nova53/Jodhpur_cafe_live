import { useState } from "react";

interface GalleryImage {
  src: string;
  mobileHeight: string;
  tabletHeight: string;
}

const leftColumnImages: GalleryImage[] = [
  { src: "./images/Gallaryimg1.webp", mobileHeight: "h-[150px]", tabletHeight: "sm:h-[422px]" },
  { src: "./images/Gallaryimg2.webp", mobileHeight: "h-[100px]", tabletHeight: "sm:h-[221px]" },
  { src: "./images/Gallaryimg5.webp", mobileHeight: "h-[150px]", tabletHeight: "sm:h-[422px]" },
  { src: "./images/Gallaryimg6.webp", mobileHeight: "h-[100px]", tabletHeight: "sm:h-[221px]" },
];

const rightColumnImages: GalleryImage[] = [
  { src: "./images/Gallaryimg3.webp", mobileHeight: "h-[100px]", tabletHeight: "sm:h-[221px]" },
  { src: "./images/Gallaryimg4.webp", mobileHeight: "h-[150px]", tabletHeight: "sm:h-[422px]" },
  { src: "./images/Gallaryimg7.webp", mobileHeight: "h-[100px]", tabletHeight: "sm:h-[221px]" },
  { src: "./images/Gallaryimg8.webp", mobileHeight: "h-[150px]", tabletHeight: "sm:h-[422px]" },
];

const allImages = [
  "./images/Gallaryimg1.webp",
  "./images/Gallaryimg2.webp",
  "./images/Gallaryimg3.webp",
  "./images/Gallaryimg4.webp",
  "./images/Gallaryimg5.webp",
  "./images/Gallaryimg6.webp",
  "./images/Gallaryimg7.webp",
  "./images/Gallaryimg8.webp",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="mx-8 lg:mx-[60px] mt-10">
      {/* Mobile & Tablet Layout */}
      <div className="block lg:hidden">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-4">
            {leftColumnImages.map((img, idx) => (
              <div
                key={`left-${idx}`}
                className={`overflow-hidden rounded-xl cursor-pointer ${img.mobileHeight} ${img.tabletHeight}`}
                onClick={() => setSelectedImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={`Gallery Left ${idx}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex-1 flex flex-col gap-4">
            {rightColumnImages.map((img, idx) => (
              <div
                key={`right-${idx}`}
                className={`overflow-hidden rounded-xl cursor-pointer ${img.mobileHeight} ${img.tabletHeight}`}
                onClick={() => setSelectedImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={`Gallery Right ${idx}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Masonry Layout */}
      <div className="hidden lg:block">
        <div className="columns-4 gap-4">
          {allImages.map((src, idx) => (
            <div
              key={idx}
              className="mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery ${idx}`}
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-3xl max-h-[90vh] rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
