import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ReceiveFundsModalProps } from "@/components/Dashboard/types/types";
import { IoCopyOutline } from "react-icons/io5";
import { BiDownload } from "react-icons/bi";
import axios from "axios";
import BASE_URL from "@/config/apiconfig";

// Define a type for the user profile data
interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  accountNumber: string;
  qrCode: string; // This is the base64 string for the QR code image
}

const ReceiveFundsModal: React.FC<ReceiveFundsModalProps> = ({
  isOpen,
  onClose,
  // accountName,
  accountNumber,
}) => {
  if (!isOpen) return null;

  const handleCopyAccountNumber = () => {
    navigator.clipboard.writeText(accountNumber);
    alert("Account number copied to clipboard!");
  };

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("No token found. Please log in.");
        return;
      }

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
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Error fetching profile data.");
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!profile) {
    return <div className="hidden">Loading...</div>;
  }

  const downloadQRCode = () => {
    const svg = document.getElementById("qrCodeElement");
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.download = "qr_code.png";
        downloadLink.href = pngFile;
        downloadLink.click();
      };
      img.src = "data:image/svg+xml;base64," + btoa(svgData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[10000]">
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
                {" "}
                - {profile.accountNumber}
              </span>
            </div>
          </div>
          <IoCopyOutline
            className="text-[#1C274C]"
            size={20}
            onClick={handleCopyAccountNumber}
          />
        </div>

        <p className="text-center text-[#000000] font-normal text-xs mb-4">
          Let the sender scan the QR Code for you to receive payments
        </p>

        <div className="flex justify-center mb-9">
          {/* Render the QR code image */}
          <img
            src={profile.qrCode}
            alt="QR Code"
            style={{ width: "200px", height: "200px" }}
          />
        </div>

        <button
          onClick={downloadQRCode}
          className="w-full bg-gradient-to-b from-[#020202] to-[#0E1D33] text-white py-3 rounded-lg font-semibold flex justify-center items-center"
        >
          <BiDownload className="mr-2" size={20} />
          <span>Download QR Code</span>
        </button>
      </div>
    </div>
  );
};

export default ReceiveFundsModal;
