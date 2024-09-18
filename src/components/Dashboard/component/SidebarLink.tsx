import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarLinkProps } from '../types/SidebarLink';

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, label, icon }) => (
  <li className='list-none'>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `p-3 rounded-lg mb-4 flex items-center gap-3 text-base font-semibold ${isActive ? 'bg-[#0D2B78]' : ''}`
      }
    >
      {icon} {label}
    </NavLink>
  </li>
);

export default SidebarLink;
