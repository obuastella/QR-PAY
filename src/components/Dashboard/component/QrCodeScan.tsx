import { BsQrCodeScan } from 'react-icons/bs';

const QrCodeScan = () => {

  return (
    <div>
      <button className="">
        <div className="sm:w-16 sm:h-16 w-12 h-12 bg-gradient-to-t from-[#020202] to-[#0E1D33] rounded-full flex justify-center items-center shadow-lg">
          <span className="text-white text-3xl">
            <BsQrCodeScan className='sm:text-3xl text-2xl'/>
          </span>
        </div>
      </button>
    </div>
  );
};

export default QrCodeScan;
