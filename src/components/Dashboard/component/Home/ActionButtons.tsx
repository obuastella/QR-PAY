import { FiDownload } from 'react-icons/fi';
import { TbTransfer } from 'react-icons/tb';

export const ActionButtons = () => {
  return (
    <div className="flex md:flex-col flex-row md:gap-y-5 gap-x-5 justify-center">
      <button className="bg-[#040428] text-white p-2 pr-3 rounded-[100px] flex items-center gap-3 md:w-auto w-full">
        <div className="bg-gradient-to-t from-[#020202] to-[#0E1D33] rounded-full p-3 text-white text-lg">
          <TbTransfer />
        </div>
        <span className="font-medium text-base whitespace-nowrap">Send Funds</span>
      </button>
      <button className="bg-[#040428] text-white p-2 pr-3 rounded-[100px] flex items-center gap-3 md:w-auto w-full">
        <div className="bg-gradient-to-t from-[#020202] to-[#0E1D33] rounded-full p-3 text-white text-lg">
          <FiDownload />
        </div>
        <span className="font-medium text-base whitespace-nowrap">Receive Funds</span>
      </button>
    </div>
  );
};
