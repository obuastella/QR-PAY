import SidebarLink from "./SidebarLink";
import { BiSupport } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import MobileSidebar from "./MobileSidebar";
import { AiFillHome } from "react-icons/ai";
import { RiExchangeBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom"; // import useNavigate hook for navigation

const Sidebar = () => {
  const navigate = useNavigate(); // initialize the navigate hook

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");
    // Redirect to login page
    navigate("/login");
  };

  return (
    <>
      <aside className="w-[232px] min-h-screen xl:flex flex-col text-white bg-[#040428] hidden">
        <div className="flex items-center justify-center gap-4 py-9">
          <img src="image/zionLogo.png" alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold">QR Pay</span>
        </div>

        <div className="flex-grow px-3 pr-5">
          <nav>
            <ul>
              <SidebarLink
                to="/home"
                icon={<AiFillHome className="w-5 h-5" />}
                label="Home"
              />
              <SidebarLink
                to="/transactions"
                icon={<RiExchangeBoxFill className="w-5 h-5 " />}
                label="Transactions"
              />
              <SidebarLink
                to="/beneficiaries"
                icon={<FaUserFriends className="w-5 h-5 " />}
                label="Beneficiaries"
              />
              <SidebarLink
                to="/notifications"
                icon={<IoMdNotificationsOutline className="w-5 h-5 " />}
                label="Notifications"
              />
            </ul>
          </nav>
        </div>

        <div className="border-t border-white pt-3 mx-3 mr-5 mb-3">
          <SidebarLink
            to="/settings"
            icon={<FiSettings className="w-5 h-5 " />}
            label="Settings"
          />
          <SidebarLink
            to="/support"
            icon={<BiSupport className="w-5 h-5 " />}
            label="Support"
          />
          <div className="flex items-center mt-4 p-3 gap-3">
            <CiLogout className="w-5 h-5 text-red-500" />
            <button className="text-red-500 block" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </aside>
      <MobileSidebar />
    </>
  );
};

export default Sidebar;
