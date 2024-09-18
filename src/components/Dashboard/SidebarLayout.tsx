import { Outlet, useLocation } from 'react-router-dom';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Sidebar from './component/Sidebar';
import SearchBar from './component/Searchbar';
import Calendar from './component/Calendar';
import { BiSupport } from 'react-icons/bi';
import User from './component/User';

const SidebarLayout = () => {
  const location = useLocation();

  const renderHeaderContent = () => {
    switch (location.pathname) {
      case '/home':
        return (
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Overview</h1>
            <div className="flex items-center gap-4">
              <BiSupport className="w-10 h-10 rounded-full bg-white p-2 text-[#040428]" />
              <IoMdNotificationsOutline className="w-10 h-10 rounded-full bg-white p-2 text-[#040428]" />
              <User />
            </div>
          </div>
        );
      case '/notifications':
        return (
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Notifications</h1>
            <div className="flex items-center gap-4">
              <BiSupport className="w-10 h-10 rounded-full bg-white p-2 text-[#040428]" />
              <IoMdNotificationsOutline className="w-10 h-10 rounded-full bg-white p-2 text-[#040428]" />
              <User />
            </div>
          </div>
        );
      case '/transactions':
        return (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-10">
              <h1 className="text-2xl font-semibold">Transactions</h1>
              <div className="flex items-center gap-5">
                <SearchBar />
                <Calendar />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BiSupport className="w-10 h-10 rounded-full bg-white p-2 text-[#040428]" />
              <IoMdNotificationsOutline className="w-10 h-10 rounded-full bg-white p-2 text-[#040428]" />
              <User />
            </div>
          </div>
        );
      case '/beneficiaries':
        return (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-10">
              <h1 className="text-2xl font-semibold">Beneficiaries</h1>
              <SearchBar />
            </div>
            <div className="flex items-center gap-4">
              <BiSupport className="w-10 h-10 rounded-full bg-white p-2 text-[#040428]" />
              <IoMdNotificationsOutline className="w-10 h-10 rounded-full bg-white p-2 text-[#040428]" />
              <User />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-[#040428] flex flex-col pr-3 pb-3">
          <header className="text-white py-7 px-6">
            {renderHeaderContent()}
          </header>
          <div className="flex-1 bg-white p-6 rounded-[24px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;
