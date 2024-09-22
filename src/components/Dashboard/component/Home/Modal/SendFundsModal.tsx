import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { fetchBanks } from '@/components/Dashboard/types/Services/apiService';
import BankList from './BankList';
import { Bank, SendFundsModalProps } from '@/components/Dashboard/types/types';
import axios from 'axios';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { API_URL } from '@/components/Dashboard/types/Services/API';  

const SendFundsModal: React.FC<SendFundsModalProps> = ({ isOpen, onClose }) => {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [accountName, setAccountName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showAccountName, setShowAccountName] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const resetForm = () => {
    setSelectedBank(null);
    setAccountNumber('');
    setAccountName('');
    setShowAccountName(false);
    setErrorMessage('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      fetchBanks()
        .then((data) => setBanks(data))
        .catch((error) => console.error(error));
    }
  }, [isOpen]);

  const showErrorWithTimer = (message: string) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage('');
    }, 2000); 
  };

  const handleSubmit = async () => {
    if (!selectedBank || !accountNumber) {
      showErrorWithTimer('Please select a bank and enter an account number.');
      return;
    }

    setIsLoading(true);
    setShowAccountName(false);

    const postData = {
      bank: selectedBank.code,
      account: accountNumber,
      currency: 'NGN',
    };

    try {
      const response = await axios.post(
        `${API_URL}/misc/banks/resolve`,
        postData
      );

      if (
        response.data &&
        response.data.data &&
        response.data.data.account_name
      ) {
        setAccountName(response.data.data.account_name);
        setShowAccountName(true);
      } else {
        showErrorWithTimer('Account name not found. Please check the details and try again.');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 400) {
          showErrorWithTimer('Invalid account details. Please check and try again.');
        } else if (error.response.status === 404) {
          showErrorWithTimer('Account not found. Please verify the account number.');
        } else {
          showErrorWithTimer('An error occurred. Please try again later.');
        }
      } else {
        showErrorWithTimer('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-[10000]">
      <div className="bg-white sm:rounded-[20px] rounded-none shadow-lg sm:w-auto sm:h-auto h-full w-full p-6 relative justify-center flex flex-col">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-2xl text-gray-700"
        >
          <AiOutlineClose />
        </button>

        <h2 className="text-xl font-semibold text-center mb-2 mt-5">
          Send Funds
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm font-medium">
          Enter receiver's details to make an instant transfer
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <label className="block mb-2 text-sm">Input or select Bank</label>
          <BankList
            banks={banks}
            onBankSelect={(bank) => setSelectedBank(bank)}
          />

          <label className="block mb-2 text-sm">Account Number</label>
          <input
            type="number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter account number"
            className="w-full p-3 border border-[#0D2B78] bg-[#E4E6E8] rounded-xl outline-2 outline-[#0D2B78] mb-4"
          />

          {showAccountName && (
            <div className="flex flex-col mb-6">
              <label className="block mb-2 text-sm">Account Name</label>
              <div className="relative flex items-center">
                <div className="absolute left-3 z-10">
                  <IoMdCheckmarkCircleOutline
                    size={24}
                    className="text-green-700"
                  />
                </div>
                <input
                  type="text"
                  value={accountName}
                  readOnly
                  className="w-full pl-12 pr-3 py-3 font-medium text-sm border border-green-500 bg-green-300 rounded-xl text-black outline-none cursor-not-allowed"
                />
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl text-sm">
              {errorMessage}
            </div>
          )}

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-gradient-to-t from-[#020202] to-[#0E1D33] text-white py-3 rounded-lg font-semibold"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Next'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendFundsModal;