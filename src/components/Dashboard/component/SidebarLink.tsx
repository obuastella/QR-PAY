import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarLinkProps } from '../types/types';

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, label, icon, className, activeClassName }) => (
  <li className={`list-none `}>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `p-3 rounded-lg mb-4 flex items-center gap-3 text-base font-semibold ${className || ''} ${
          isActive ? (activeClassName || 'bg-[#0D2B78] text-white') : ''
        }`
      }
    >
      {icon} {label}
    </NavLink>
  </li>
);

export default SidebarLink;
