import { ReactNode } from "react";

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

