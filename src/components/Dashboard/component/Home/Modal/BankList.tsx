/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from 'react';
import { BankListProps } from '@/components/Dashboard/types/types';
import { MdClear } from 'react-icons/md';

const BankList: React.FC<BankListProps> = ({ banks, onBankSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const filteredBanks = searchTerm
    ? banks.filter((bank) =>
        bank.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : banks;

  const handleBankSelect = (bank: any) => {
    setSearchTerm(bank.name);
    setIsFocused(false);
    onBankSelect(bank);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      filterRef.current &&
      !filterRef.current.contains(event.target as Node)
    ) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full relative z-[1000]" ref={filterRef}>
      <div className="relative w-full">
        <input
          required
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Search for a bank"
          className="w-full p-3 border border-[#0D2B78] bg-[#E4E6E8] rounded-xl outline-2 outline-[#0D2B78] mb-2"
          title="Search for a bank"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm('')}
            className="absolute right-3 top-1/2 transform -translate-y-2/3 text-gray-500 hover:text-gray-700"
          >
            <MdClear />
          </button>
        )}
      </div>

      {isFocused && (
        <div className="absolute w-full bg-gray-200 max-h-52 overflow-y-auto border border-gray-400 rounded-lg">
          {filteredBanks.length > 0 ? (
            filteredBanks.map((bank) => (
              <div
                key={bank.code}
                className="p-2 hover:bg-gray-100 cursor-pointer text-[#0D2B78] font-normal"
                onClick={() => handleBankSelect(bank)}
              >
                {bank.name}
              </div>
            ))
          ) : searchTerm ? (
            <div className="p-2">No banks found</div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default BankList;
