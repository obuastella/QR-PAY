import { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { QrCodeData } from "../../types/types";
import QrCodePaymentModal2 from "./QrCodePaymentModal2";
import ReceiptModal from "./ReceiptModal";
import { useNavigate } from "react-router-dom";
import BASE_URL from "@/config/apiconfig";
import axios from "axios";

interface QrCodePaymentModalProps {
  qrCodeData: QrCodeData | null;
  onClose: () => void;
  stopCamera: () => void;
}

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  accountNumber: string;
  dateOfBirth: string;
  qrCode: string; // This is the base64 string for the QR code image
}

function QrCodePaymentModal({
  qrCodeData,
  onClose,
  stopCamera,
}: QrCodePaymentModalProps) {
  const [amount, setAmount] = useState<string>("");
  const [narration, setNarration] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showReceiptModal, setShowReceiptModal] = useState<boolean>(false);

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // initialize the navigate hook

  const { accountNumber, name } = qrCodeData || {};
  const bankName = "QR-PAY";

  const formatAmount = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = formatAmount(value);
    setAmount(formattedValue);
    setErrorMessage("");
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setShowReceiptModal(true);
  };

  const handleCloseReceiptModal = () => {
    setShowReceiptModal(false);
  };

  const handleNarrationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNarration(e.target.value);
  };

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
        localStorage.removeItem("token");
        navigate("/login");
        console.error("Error fetching profile:", error);
        setError("Error fetching profile data.");
      }
    };

    fetchProfile();

    if (!accountNumber || !name) {
      setErrorMessage("No valid QR-PAY data found. Please try again.");
      onClose();
    } else {
      stopCamera();
    }
  }, [accountNumber, name, onClose, stopCamera]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  const setErrorWithTimer = (message: string) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage("");
    }, 2000);
  };

  const handlePayment = () => {
    if (!amount || parseFloat(amount.replace(/,/g, "")) <= 0) {
      setErrorWithTimer("Please enter a valid amount.");
      return;
    }

    setShowSuccessModal(true);
  };

  const handleNextStep = () => {
    if (!amount || parseFloat(amount.replace(/,/g, "")) <= 0) {
      setErrorWithTimer("Please enter a valid amount to proceed.");
      return;
    }

    setCurrentStep(2);
  };

  if (profile?.accountNumber === accountNumber) {
    console.log("Wrong Scanning");
    // setErrorMessage("This is your account, you can't transfer to your account");
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white sm:rounded-[20px] rounded-none shadow-lg sm:max-w-lg sm:h-auto h-full w-full p-6 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-gray-700 z-10"
          onClick={() => {
            stopCamera();
            onClose();
          }}
        >
          <AiOutlineClose />
        </button>

        <h2 className="font-medium text-xl text-[#000000] text-center mb-6">
          QR-PAY Payment
        </h2>

        {/* Conditional rendering based on current step */}
        {currentStep === 1 && (
          <div>
            <div className="p-4 bg-gradient-to-b from-[#0E1D33] to-[#020202FC] text-white rounded-[10px] mb-4">
              <div className="mb-4">
                <p className="text-xs font-normal">Account Number</p>
                <p className="font-medium sm:text-lg text-base">
                  {accountNumber || "N/A"}
                </p>
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
                    {name || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {profile.accountNumber !== accountNumber && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Enter Amount
                </label>
                <input
                  required
                  type="text"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="Enter amount"
                  className="w-full p-3 border border-[#0D2B78] bg-[#E4E6E8] rounded-xl outline-2 outline-[#0D2B78]"
                />
              </div>
            )}

            {errorMessage && (
              <div className="mb-2 p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl text-sm">
                {errorMessage}
              </div>
            )}

            {profile.accountNumber !== accountNumber && (
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
            )}

            {profile.accountNumber !== accountNumber && (
              <button
                onClick={handleNextStep}
                className="w-full bg-gradient-to-t from-[#020202] to-[#0E1D33] text-white py-3 rounded-lg font-semibold"
              >
                Next
              </button>
            )}
          </div>
        )}

        {currentStep === 2 && (
          <QrCodePaymentModal2
            accountNumber={accountNumber}
            bankName={bankName}
            accountName={name}
            amount={amount}
            narration={narration}
          />
        )}

        {profile.accountNumber === accountNumber && (
          <>
            <div className="mb-4 text-red-700 text-center">
              This is your account, you can't transfer to your account.
            </div>
          </>
        )}

        <div className="flex items-center gap-4">
          {currentStep === 2 && (
            <button
              onClick={() => setCurrentStep(1)}
              className="w-1/2 bg-black hover:bg-gray-400 text-white py-3 rounded-lg font-semibold mr-2"
            >
              Back
            </button>
          )}

          {currentStep === 2 && (
            <button
              onClick={handlePayment}
              className="w-full bg-gradient-to-t from-[#020202] to-[#0E1D33] text-white py-3 rounded-lg font-semibold"
            >
              Confirm Payment
            </button>
          )}
        </div>
      </div>

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
              You’ve successfully transferred ₦{formatAmount(amount)} to {name}{" "}
              - {bankName}
            </p>
            {/* <button
              onClick={() => setShowReceiptModal(true)} // Show receipt modal here
              className="w-full bg-gradient-to-t from-[#020202] to-[#0E1D33] text-white py-2 rounded-lg"
            >
              View Receipt
            </button> */}
          </div>
        </div>
      )}

      {/* Receipt Modal */}
      {showReceiptModal && (
        <ReceiptModal
          onClose={handleCloseReceiptModal}
          amount={amount}
          accountName={name}
          bankName={bankName}
        />
      )}
    </div>
  );
}

export default QrCodePaymentModal;
