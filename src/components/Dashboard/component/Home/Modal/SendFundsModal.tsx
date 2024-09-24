/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { fetchBanks } from '@/components/Dashboard/types/Services/apiService';
import BankList from './BankList';
import { Bank, SendFundsModalProps } from '@/components/Dashboard/types/types';
import axios from 'axios';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { API_URL } from '@/components/Dashboard/types/Services/API';
import SendFunds2 from './SendFunds2';
import SendFunds3 from './SendFunds3';
import ReceiptModal from './ReceiptModal';

const SendFundsModal: React.FC<SendFundsModalProps> = ({ isOpen, onClose }) => {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [accountName, setAccountName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showAccountName, setShowAccountName] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
   
  const [, setFormCompleted] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>('');
  const [narration, setNarration] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const [isStep2DataValid, setIsStep2DataValid] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [pin, setPin] = useState<string[]>(['', '', '', '']);
  const [showReceiptModal, setShowReceiptModal] = useState<boolean>(false);

  const formatAmount = (value: string) => {
    return Number(value).toLocaleString('en-NG', {
      // minimumFractionDigits: 2,
      // maximumFractionDigits: 2,
    });
  };

  const resetForm = () => {
    setSelectedBank(null);
    setAccountNumber('');
    setAccountName('');
    setAmount('');
    setNarration('');
    setShowAccountName(false);
    setErrorMessage('');
    setFormCompleted(false);
    setStep(1);
  };

  const handleStep2DataChange = (newAmount: string, newNarration: string) => {
    setAmount(newAmount);
    setNarration(newNarration);
    setIsStep2DataValid(!!newAmount);
  };

  const handleContinueToStep3 = () => {
    if (isStep2DataValid) {
      setStep(3);
    }
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

  useEffect(() => {
    if (showReceiptModal) {
      setShowSuccessModal(false);
  
      setStep(1);
    }
  }, [showReceiptModal]);
  

  const handleCloseReceiptModal = () => {
    setShowReceiptModal(false);
    handleCloseSuccessModal();
  }
  

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
        setFormCompleted(true);
        setStep(2);
      } else {
        showErrorWithTimer(
          'Account name not found. Please check the details and try again.'
        );
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 400) {
          showErrorWithTimer(
            'Invalid account details. Please check and try again.'
          );
        } else if (error.response.status === 404) {
          showErrorWithTimer(
            'Account not found. Please verify the account number.'
          );
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

  const handleConfirm = () => {
    console.log('Send Funds Details: ', {
      accountNumber,
      bankName: selectedBank?.name,
      accountName,
      amount,
      narration,
      pin,
    });

    setShowSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[10000]">
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

        {step === 1 && (
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
              className={`w-full bg-gradient-to-t from-[#020202] to-[#0E1D33] text-white py-3 rounded-lg font-semibold ${isLoading? "cursor-wait" : "cursor-pointer"}`}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Next'}
            </button>
          </form>
        )}

        {step === 2 && (
          <>
            <SendFunds2
              bankName={selectedBank?.name || ''}
              accountNumber={accountNumber}
              accountName={accountName}
              onDataChange={handleStep2DataChange}
            />
            <div className="mt-4 flex items-center gap-4">
              <button
                className="w-1/2 bg-gray-500 hover:bg-gray-400 text-white py-3 rounded-lg font-semibold mr-2"
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button
                className="w-full bg-gradient-to-t from-[#020202] to-[#0E1D33] text-white py-3 rounded-lg font-semibold"
                onClick={handleContinueToStep3}
                disabled={!isStep2DataValid}
              >
                Continue
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <SendFunds3
              bankName={selectedBank?.name || ''}
              accountNumber={accountNumber}
              accountName={accountName}
              amount={amount}
              narration={narration}
              setPin={setPin}
              onPinEnter={function (_pin: string): void {
                throw new Error('Function not implemented.');
              }}
            />
            <div className="mt-4 flex items-center gap-4">
              <button
                className="w-1/2 bg-gray-500 hover:bg-gray-400 text-white py-3 rounded-lg font-semibold mr-2"
                onClick={() => setStep(2)}
              >
                Back
              </button>
              <button
                className="w-full bg-gradient-to-t from-[#020202] to-[#0E1D33] text-white py-3 rounded-lg font-semibold"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </>
        )}

        {showSuccessModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10001]">
            <div className="bg-white sm:rounded-[20px] rounded-none shadow-lg sm:w-auto sm:h-auto h-full w-full p-6 relative justify-center flex flex-col">
              <button
                className="absolute top-4 right-4 mb-4 text-2xl text-gray-700"
                onClick={handleCloseSuccessModal}
              >
                <AiOutlineClose />
              </button>
              <img
                src="image/successful.png"
                alt="successful"
                className="mx-auto"
              />
              <h3 className="sm:text-2xl text-lg font-medium text-center mb-5">
                Transfer Successful
              </h3>
              <p className="text-center text-base font-medium mb-10">
                You’ve successfully transferred ₦{formatAmount(amount)} to{' '}
                {accountName} - {selectedBank?.name}
              </p>
              <button
                onClick={() => setShowReceiptModal(true)}
                className="w-full bg-gradient-to-t from-[#020202] to-[#0E1D33] text-white py-2 rounded-lg"
              >
                View Receipt
              </button>
            </div>
          </div>
        )}

        {showReceiptModal && (
          <ReceiptModal
            onClose={handleCloseReceiptModal}
            amount={amount}
            accountName={accountName}
            bankName={selectedBank?.name || ''}
          />
        )}
      </div>
    </div>
  );
};

export default SendFundsModal;
