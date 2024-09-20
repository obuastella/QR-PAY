import { BsQrCodeScan } from 'react-icons/bs';

const QrCodeScan = () => {

  return (
    <div>
      <button className="">
        <div className="w-16 h-16 bg-gradient-to-t from-[#020202] to-[#0E1D33] rounded-full flex justify-center items-center shadow-lg">
          <span className="text-white text-3xl">
            <BsQrCodeScan />
          </span>
        </div>
      </button>
    </div>
  );
};

export default QrCodeScan;
