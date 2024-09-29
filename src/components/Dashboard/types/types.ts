import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface SidebarLinkProps {
  to: string;
  label: string;
  icon: ReactNode;
  className?: string;
  activeClassName?: string;
}

export interface FilterOption {
  id: number;
  label: string;
}

export interface WeeklyActivityDataPoint {
  day: string;
  sent: number;
  received: number;
}

export interface SendFundsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface Bank {
  code: string;
  name: string;
}

export interface BankListProps {
  banks: Bank[];
  onBankSelect: (bank: Bank) => void;
}

export interface ReceiveFundsModalProps {
  isOpen: boolean;
  onClose: () => void;
  // accountName: string;
  // accountNumber: string;
}

// type OnSendFunds = (amount: string, narration: string) => void;

export interface SendFunds2Props {
  bankName: string;
  accountNumber: string;
  accountName: string;
  // onSendFunds: OnSendFunds;
}

export interface SendFunds3Props {
  bankName: string;
  accountNumber: string;
  accountName: string;
  amount: string;
  narration: string;
  setPin: Dispatch<SetStateAction<string[]>>;
}
 export interface ExtendedSendFunds2Props extends SendFunds2Props {
  onDataChange: (amount: string, narration: string) => void;
}

export interface receiptProps {
  onClose: () => void;
  amount: string;
  accountName: string;
  bankName: string;
}

// type CloseModalFunction = () => void;

export interface CameraToggleProps {
  isModalOpen: boolean;
  onQrCodeResult: (result: string | null) => void;
  // closeModal: CloseModalFunction;
}

export interface ProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  accountNumber: string;
  qrCode: string;
}

export interface QrCodeData {
  accountNumber: string;
  name: string;
}

export interface QrCodePaymentModal2Props {
  accountNumber: string | undefined;
  bankName: string;
  accountName: string | undefined;
  amount: string;
  narration: string;
}