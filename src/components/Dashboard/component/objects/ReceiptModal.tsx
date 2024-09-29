import { AiOutlineClose } from "react-icons/ai";
import { jsPDF } from 'jspdf';

interface ReceiptProps {
  onClose: () => void;
  amount: string;
  accountName?: string;
  bankName: string;
}

const ReceiptModal: React.FC<ReceiptProps> = ({
  onClose,
  amount,
  accountName,
  bankName,
}) => {
  const handleDownloadReceipt = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Receipt', 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Amount: ₦${formatAmount(amount)}`, 20, 40);
    doc.text(`Account Name: ${accountName}`, 20, 50);
    doc.text(`Bank: ${bankName}`, 20, 60);
    
    // Save the PDF
    doc.save('receipt.pdf');
  };

  const formatAmount = (value: string) => {
    return Number(value.replace(/,/g, '')).toLocaleString('en-NG', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10002]">
      <div className="bg-white sm:rounded-[20px] rounded-none shadow-lg sm:w-auto sm:h-auto h-full w-full p-6 relative justify-center flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-700"
        >
          <AiOutlineClose />
        </button>
        <h2 className="text-2xl font-semibold text-center mb-4">Receipt</h2>
        <div className="mb-4">
          <p className="text-sm font-medium">Amount:</p>
          <p className="text-lg">₦{formatAmount(amount)}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium">Account Name:</p>
          <p className="text-lg">{accountName}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium">Bank:</p>
          <p className="text-lg">{bankName}</p>
        </div>
        <div className="mt-6">
          <button
            onClick={handleDownloadReceipt}
            className="w-full bg-gradient-to-t from-[#020202] to-[#0E1D33] text-white py-2 rounded-lg"
          >
            Download Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptModal;
