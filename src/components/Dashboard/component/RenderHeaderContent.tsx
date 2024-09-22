import { useLocation } from 'react-router-dom';
import { BiSupport } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import FilterComponent from "./FilterComponent";
import { transactionFilterOptions, beneficiaryFilterOptions } from "./objects/FilterIOptions";
import SearchBar from "./Searchbar";
import User from './User';

export const RenderHeaderContent = () => {
  const location = useLocation();

  const handleTransactionFilterSelect = (option: { id: number; label: string }) => {
    console.log('Transaction Selected filter:', option);
  };
  const handleBeneficiaryFilterSelect = (option: { id: number; label: string }) => {
    console.log('Beneficiary Selected filter:', option);
  };

  switch (location.pathname) {
    case '/home':
      return (
        <>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold hidden md:block">
              Overview
            </h1>
            <div className="items-center gap-4 hidden md:flex">
              <BiSupport className="w-10 h-10 rounded-full bg-white p-2 text-[#040428]" />
              <IoMdNotificationsOutline className="w-10 h-10 rounded-full bg-white p-2 text-[#040428]" />
              <User />
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 md:hidden w-full">
            <User />
            <div className="flex items-center gap-4">
              <BiSupport className="sm:w-10 sm:h-10 w-8 h-8 rounded-full bg-white  sm:p-2 p-1 text-[#040428]" />
              <IoMdNotificationsOutline className="sm:w-10 sm:h-10 w-8 h-8 rounded-full bg-white sm:p-2 p-1 text-[#040428]" />
            </div>
          </div>
        </>
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
          <div className="xl:flex xl:flex-row flex-col items-center gap-10 space-y-3 xl:space-y-0 w-full xl:w-auto">
            <h1 className="xl:text-2xl text-xl font-semibold">
              Transactions
            </h1>
            <div className="flex items-center gap-3">
              <SearchBar />
              <FilterComponent
                options={transactionFilterOptions}
                onFilterSelect={handleTransactionFilterSelect}
              />
            </div>
          </div>
          <div className="xl:flex items-center gap-4 hidden">
            <BiSupport className="w-10 h-10 rounded-full bg-white p-2 text-[#040428]" />
            <IoMdNotificationsOutline className="w-10 h-10 rounded-full bg-white p-2 text-[#040428]" />
            <User />
          </div>
        </div>
      );
    case '/beneficiaries':
      return (
        <div className="flex justify-between items-center">
          <div className="xl:flex xl:flex-row flex-col items-center gap-10 space-y-3 xl:space-y-0 w-full xl:w-auto">
            <h1 className="xl:text-2xl text-xl font-semibold">
              Beneficiaries
            </h1>
            <div className="flex items-center gap-3">
              <SearchBar />
              <FilterComponent
                options={beneficiaryFilterOptions}
                onFilterSelect={handleBeneficiaryFilterSelect}
              />
            </div>
          </div>
          <div className="xl:flex items-center gap-4 hidden">
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