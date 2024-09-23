import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import React, { useState, useEffect } from 'react';
import { ExtendedSendFunds2Props } from '@/components/Dashboard/types/types';


const SendFunds2: React.FC<ExtendedSendFunds2Props> = ({
  bankName,
  accountNumber,
  accountName,
  onDataChange,
}) => {
  const [amount, setAmount] = useState<string>('');
  const [narration, setNarration] = useState<string>('');

  const formatAmount = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = formatAmount(value);
    setAmount(formattedValue);
  };

  const handleNarrationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNarration(e.target.value);
  };

  useEffect(() => {
    const amountWithoutCommas = amount.replace(/,/g, '');
    onDataChange(amountWithoutCommas, narration);
  }, [amount, narration, onDataChange]);

  return (
    <>
      <div className="p-4 bg-gradient-to-b from-[#0E1D33] to-[#020202FC] text-white rounded-[10px] mb-4">
        <div className="mb-4">
          <p className="text-xs font-normal">Account Number</p>
          <p className="font-medium sm:text-lg text-base">{accountNumber}</p>
        </div>
        <div className="mb-4">
          <p className="text-xs font-normal">Bank</p>
          <p className="font-medium sm:text-lg text-base">{bankName}</p>
        </div>

        <div className="">
          <p className="text-xs font-normal mb-1">Account Name</p>
          <div className="relative flex items-center">
            <div className="absolute left-3 z-10">
              <IoMdCheckmarkCircleOutline
                size={24}
                className="text-green-700"
              />
            </div>
            <p className="w-full pl-10 py-3 font-medium text-sm border border-green-500 bg-green-300 rounded-xl text-black outline-none">
              {accountName}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Enter Amount</label>
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
          className="w-full p-3 border border-[#0D2B78] bg-[#E4E6E8] rounded-xl outline-2 outline-[#0D2B78]"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Narration (Optional)
        </label>
        <textarea
          value={narration}
          onChange={handleNarrationChange}
          className="w-full p-3 border border-[#0D2B78] bg-[#E4E6E8] rounded-xl outline-2 outline-[#0D2B78]"
          placeholder="Enter narration"
        ></textarea>
      </div>
    </>
  );
};

export default SendFunds2;