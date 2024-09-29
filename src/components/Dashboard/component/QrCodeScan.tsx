import { useState, useRef } from 'react';
import { BsQrCodeScan } from 'react-icons/bs';
import CameraToggle from './objects/CameraToggle';
import { AiOutlineClose } from 'react-icons/ai';

const QrCodeScan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cameraToggleRef = useRef<{ stopCamera: () => void } | null>(null);

  // Function to handle QR code result
  const handleQrCodeResult = (result: string | null) => {
    if (result) {
      console.log('QR Code Result:', result);
      // You can do something with the result here, like updating the state or performing an action
    } else {
      console.log('No QR code data found');
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (cameraToggleRef.current) {
      cameraToggleRef.current.stopCamera();
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>
        <div className="sm:w-16 sm:h-16 w-12 h-12 bg-gradient-to-t from-[#020202] to-[#0E1D33] rounded-full flex justify-center items-center shadow-lg">
          <span className="text-white text-3xl">
            <BsQrCodeScan className="sm:text-3xl text-2xl" />
          </span>
        </div>
      </button>

      {isModalOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white sm:rounded-[20px] rounded-none shadow-lg sm:max-w-lg sm:h-auto h-full w-full p-6 relative justify-center flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl text-gray-700 z-10"
              onClick={closeModal}
            >
              <AiOutlineClose />
            </button>
            <CameraToggle 
              isModalOpen={isModalOpen} 
              onQrCodeResult={handleQrCodeResult} 
              ref={cameraToggleRef}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default QrCodeScan;
