import { ReactNode } from 'react';

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
  accountName: string;
  accountNumber: string;
}