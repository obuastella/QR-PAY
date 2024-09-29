import { CiLogout } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { ProfileMenuProps } from "../types/types";
import { useNavigate } from "react-router-dom";

const ProfileMenu: React.FC<ProfileMenuProps> = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className={`py-3 rounded-[20px] w-auto h-auto transition-all duration-300 ease-in-out transform backdrop-blur-md bg-[#0a0a3b99] border border-[#ffffff33] shadow-lg ${
        isOpen
          ? "scale-100 opacity-100"
          : "scale-90 opacity-0 pointer-events-none"
      }`}
      style={{ transformOrigin: "top right" }}
    >
      <div className="flex gap-x-3 items-center border-b border-[#ffffff33] py-3 cursor-pointer hover:bg-[#6868d299] transition-colors duration-200 rounded-md px-5">
        <FaRegUserCircle className="text-[#FFFFFF] w-5 h-5" />
        <span className="text-white font-medium whitespace-nowrap">
          Profile Information
        </span>
      </div>
      <div className="flex gap-x-3 items-center border-b border-[#ffffff33] py-3 cursor-pointer hover:bg-[#6868d299] transition-colors duration-200 rounded-md px-5">
        <IoMdNotificationsOutline className="text-[#FFFFFF] w-5 h-5" />
        <span className="text-white font-medium whitespace-nowrap">
          Notification Preference
        </span>
      </div>
      <div className="flex gap-x-3 items-center border-b border-[#ffffff33] py-3 cursor-pointer hover:bg-[#6868d299] transition-colors duration-200 rounded-md px-5">
        <FiSettings className="text-[#FFFFFF] w-5 h-5" />
        <span className="text-white font-medium whitespace-nowrap">
          Settings
        </span>
      </div>
      <button
        className="flex gap-x-3 items-center py-3 text-red-500 w-full hover:bg-[#6868d299] transition-colors duration-200 rounded-md px-5"
        onClick={handleLogout}
      >
        <CiLogout className="text-red-500 w-5 h-5 font-medium" />
        <span className="text-red-500 font-bold">Logout</span>
      </button>
    </div>
  );
};

export default ProfileMenu;
