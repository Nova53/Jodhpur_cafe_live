// import React, { useEffect, useRef } from "react";

// interface DarkStyledMapProps {
//   lat: number;
//   lng: number;
//   locationName: string;
//   address: string;
// }

// const DarkStyledMap: React.FC<DarkStyledMapProps> = ({
//   lat,
//   lng,
//   locationName,
//   address,
// }) => {
//   const mapRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!window.google || !mapRef.current) return;

//     const map = new window.google.maps.Map(mapRef.current, {
//       center: { lat, lng },
//       zoom: 15,
//       styles: [
//         { elementType: "geometry", stylers: [{ color: "#212121" }] },
//         { elementType: "labels.icon", stylers: [{ visibility: "on" }] },
//         { elementType: "labels.text.fill", stylers: [{ color: "#ffffff" }] },
//         { elementType: "labels.text.stroke", stylers: [{ color: "#000000" }] },
//         {
//           featureType: "administrative",
//           elementType: "geometry",
//           stylers: [{ color: "#757575" }],
//         },
//         { featureType: "poi", elementType: "geometry", stylers: [{ color: "#2c2c2c" }] },
//         { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#181818" }] },
//         { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#2c2c2c" }] },
//         { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#1a1a1a" }] },
//         { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }] },
//         { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }] },
//       ],
//       disableDefaultUI: false,
//     });

//     new window.google.maps.Marker({
//       position: { lat, lng },
//       map,
//       title: locationName,
//     });
//   }, [lat, lng, locationName]);

//   return (
//     <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg h-80 overflow-hidden shadow-lg">
//       <div ref={mapRef} className="h-full w-full rounded-lg" />

//       {/* Location Overlay */}
//       <div className="absolute top-2 right-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-2 shadow-md">
//         <div className="text-xs text-gray-700 dark:text-gray-300">
//           <div className="font-medium">📍 {locationName}</div>
//           <div className="text-gray-500 dark:text-gray-400">{address}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DarkStyledMap;
