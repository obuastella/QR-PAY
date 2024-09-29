/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {
  ReceiveFundsModalProps,
  UserProfile,
} from '@/components/Dashboard/types/types';
import { IoCopyOutline } from 'react-icons/io5';
import { BiDownload } from 'react-icons/bi';
import axios from 'axios';
import BASE_URL from '@/config/apiconfig';
import { Toaster, toast } from 'sonner';

const ReceiveFundsModal: React.FC<ReceiveFundsModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setError('No token found. Please log in.');
        return;
      }

      toast('Loading profile data...', { duration: 2000 });

      try {
        const response = await axios.get<{ user: UserProfile }>(
          `${BASE_URL}/api/user/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfile(response.data.user);
        toast.success('Profile data loaded successfully!');
      } catch (error) {
        console.error('Error fetching profile:', error);
        toast.error('Error fetching profile data.');
        setError('Error fetching profile data.');
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return toast.error(error);
  }

  if (!profile) {
    return <div className="hidden">Loading...</div>;
  }

  const handleCopyAccountNumber = () => {
    navigator.clipboard.writeText(profile.accountNumber);
    toast.success('Account number copied to clipboard!');
  };

  const downloadQRCode = () => {
    setIsDownloading(true);
    const qrImage = document.getElementById('qrCodeImage') as HTMLImageElement;

    if (qrImage) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const img = new Image();

      img.crossOrigin = 'anonymous';
      img.src = qrImage.src;

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        context?.drawImage(img, 0, 0);

        const pngFile = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = pngFile;
        downloadLink.download = `${profile.firstName} ${profile.lastName} QR-code.png`;
        downloadLink.click();

        setIsDownloading(false);
        toast.success('QR Code downloaded successfully!');
      };

      img.onerror = () => {
        setIsDownloading(false);
        toast.error('Failed to download QR Code.');
      };
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[10000]">
        <Toaster richColors position="top-center" className="z-50" />
        <div className="bg-white sm:rounded-[20px] rounded-none shadow-lg sm:w-auto sm:h-auto h-full w-full p-6 relative justify-center flex flex-col">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl text-gray-600"
          >
            <AiOutlineClose />
          </button>

          <h2 className="text-xl font-semibold text-center mb-3 mt-5">
            Receive Funds
          </h2>

          <div className="flex items-center gap-3 mx-auto mb-5">
            <div className="flex items-center justify-between bg-[#0D1C3121] p-1 rounded-[28px]">
              <div className="rounded-full mr-3">
                <img src="/image/zionLogo.png" alt="Bank" className="w-7 h-7" />
              </div>
              <div>
                <span className="font-medium text-xs">
                  Acc No. {profile.firstName} {profile.lastName}
                </span>
                <span className="text-[#5E5858] font-normal text-xs">
                  {' '}
                  - {profile.accountNumber}
                </span>
              </div>
            </div>
            <IoCopyOutline
              className="text-[#1C274C] cursor-pointer"
              size={20}
              onClick={handleCopyAccountNumber}
            />
          </div>

          <p className="text-center text-[#000000] font-normal text-xs mb-4">
            Let the sender scan the QR Code for you to receive payments
          </p>

          <div id="qrCodeElement" className="flex justify-center mb-9">
            <img
              id="qrCodeImage"
              src={profile.qrCode}
              alt="QR-Code"
              style={{ width: '200px', height: '200px' }}
            />
          </div>

          <button
            onClick={downloadQRCode}
            className={`w-full bg-gradient-to-b from-[#020202] to-[#0E1D33] text-white py-3 rounded-lg font-semibold flex justify-center items-center ${
              isDownloading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
            }`}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <>
                <span className="loader mr-2"></span>
                Downloading...
              </>
            ) : (
              <>
                <BiDownload className="mr-2" size={20} />
                <span>Download QR Code</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default ReceiveFundsModal;
