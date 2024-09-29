import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { TbTransfer } from 'react-icons/tb';
import SendFundsModal from './Modal/SendFundsModal';
import ReceiveFundsModal from './Modal/ReceiveFundsModal';

export const ActionButtons = () => {
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex md:flex-col flex-row md:gap-y-5 sm:gap-x-5 gap-x-3 justify-center px-3">
      <button
        onClick={() => setIsSendModalOpen(true)}
        className="bg-[#040428] text-white py-2 sm:px-2 sm:pr-3 px-0 pr-0 rounded-[100px] flex justify-center md:justify-start items-center sm:gap-3 gap-1 md:w-auto w-full cursor-pointer"
      >
        <div className="bg-gradient-to-t from-[#020202] to-[#0E1D33] rounded-full p-3 text-white text-lg">
          <TbTransfer />
        </div>
        <span className="font-medium sm:text-base text-sm whitespace-nowrap">
          Send Funds
        </span>
      </button>
      <SendFundsModal
        isOpen={isSendModalOpen}
        onClose={() => setIsSendModalOpen(false)}
      />

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#040428] text-white py-2 sm:px-2 sm:pr-3 px-0 pr-0 rounded-[100px] flex justify-center md:justify-start items-center sm:gap-3 gap-1 md:w-auto w-full"
      >
        <div className="bg-gradient-to-t from-[#020202] to-[#0E1D33] rounded-full p-3 text-white text-lg">
          <FiDownload />
        </div>
        <span className="font-medium sm:text-base text-sm whitespace-nowrap">
          Receive Funds
        </span>
      </button>
      <ReceiveFundsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
