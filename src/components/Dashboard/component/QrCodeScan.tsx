// import { useState } from 'react';
// import { BsQrCodeScan } from 'react-icons/bs';

// const QrCodeScan = () => {
//   const [isCameraOn, setIsCameraOn] = useState(false);

//   const toggleCamera = () => {
//     setIsCameraOn(!isCameraOn);
//   };

//   return (
//     <div>
//       <button onClick={toggleCamera} className="">
//         <div className="w-16 h-16 bg-gradient-to-t from-[#020202] to-[#0E1D33] rounded-full flex justify-center items-center shadow-lg">
//           <span className="text-white text-3xl">
//             <BsQrCodeScan />
//           </span>
//         </div>
//       </button>

//       {/* Camera area */}
//       {isCameraOn && (
//         <div className="mt-4 p-4 border rounded-lg bg-gray-100">
//           <p className="text-center">Camera is now ON. Place QR code here for scanning.</p>
//           <div className="w-full h-[200px] bg-black">
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QrCodeScan;
