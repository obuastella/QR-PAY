import { FaUserFriends } from 'react-icons/fa';
import { BsQrCodeScan } from 'react-icons/bs';
import SidebarLink from './SidebarLink';
import { AiFillHome } from 'react-icons/ai';
import { RiExchangeBoxFill } from 'react-icons/ri';
import { ImUser } from 'react-icons/im';

function MobileSidebar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0px_-4px_10px_rgba(95,92,92,0.25)] flex xl:hidden justify-between items-center h-[80px] z-50 rounded-tl-[40px] rounded-tr-[40px] px-5">
      <SidebarLink
        to="/home"
        icon={<AiFillHome className="w-6 h-6" />}
        label="Home"
        className="flex flex-col items-center gap-1 font-normal md:text-base text-xs"
        activeClassName="text-[#052283] bg-none"
      />

      <SidebarLink
        to="/transactions"
        icon={<RiExchangeBoxFill className="w-6 h-6" />}
        label="Transactions"
        className="flex flex-col items-center gap-1 font-normal md:text-base text-xs"
        activeClassName="text-[#052283] bg-none"
      />

      <button className="">
        <div className="w-16 h-16 bg-gradient-to-t from-[#020202] to-[#0E1D33] rounded-full flex justify-center items-center shadow-lg">
          <span className="text-white text-3xl">
            <BsQrCodeScan />
          </span>
        </div>
      </button>

      <SidebarLink
        to="/beneficiaries"
        icon={<FaUserFriends className="w-6 h-6" />}
        label="Beneficiaries"
        className="flex flex-col items-center gap-1 font-normal md:text-base text-xs"
        activeClassName="text-[#052283] bg-none"
      />

      <SidebarLink
        to="/profile"
        icon={<ImUser className="w-6 h-6" />}
        label="Profile"
        className="flex flex-col items-center gap-1 font-normal md:text-base text-xs"
        activeClassName="text-[#052283] bg-none"
      />
    </div>
  );
}

export default MobileSidebar;
