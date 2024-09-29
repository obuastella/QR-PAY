import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { QrCodePaymentModal2Props } from "../../types/types";
import { useEffect, useRef, useState } from "react";

function QrCodePaymentModal2({
  accountNumber,
  bankName,
  accountName,
  amount,
  narration
}: QrCodePaymentModal2Props) {
  const [pin, setLocalPin] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const formatAmount = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === '') {
      const newPin = [...pin];
      newPin[index] = value;
      setLocalPin(newPin);
      // setPin(newPin);

      if (value !== '' && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  return (
    <>
      <div className="p-4 bg-gradient-to-b from-[#0E1D33] to-[#020202FC] text-white rounded-[10px] mb-4">
        <div className="mb-4">
          <p className="text-xs font-normal">Account Number</p>
          <p className="font-medium sm:text-lg text-base">{accountNumber || "N/A"}</p>
        </div>
        <div className="mb-4">
          <p className="text-xs font-normal">Bank</p>
          <p className="font-medium sm:text-lg text-base">{bankName}</p>
        </div>
        <div className="mb-4">
          <p className="text-xs font-normal mb-1">Account Name</p>
          <div className="relative flex items-center">
            <div className="absolute left-3 z-10">
              <IoMdCheckmarkCircleOutline
                size={24}
                className="text-green-700"
              />
            </div>
            <p className="w-full pl-10 py-3 font-medium text-sm border border-green-500 bg-green-300 rounded-xl text-black outline-none cursor-not-allowed">
              {accountName || "N/A"}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs font-normal">Amount</p>
          <p className="font-medium sm:text-lg text-base">
            ₦ {formatAmount(amount)}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-xs font-normal">Narration</p>
          <p className="font-medium sm:text-lg text-base">
            {narration || 'No narration provided'}
          </p>
        </div>
      </div>

      {/* Add your pin input functionality here if needed */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-2">Enter Your Pin</p>
        <div className="flex gap-5">
          {pin.map((digit, index) => (
            <div key={index} className="relative w-10 h-10">
              <input
                ref={(el) => (inputRefs.current[index] = el)}
                type="password"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handlePinChange(e, index)}
                className="w-full h-full text-center text-4xl font-bold border-2 border-[#D3D8DD] rounded-xl outline-none focus:border-[#0D2B78] focus:ring-0.5 focus:ring-[#0D2B78] transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default QrCodePaymentModal2;
