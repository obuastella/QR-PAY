import { BiSearch } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const location = useLocation();

  const getPlaceholder = () => {
    if (location.pathname === '/transactions') {
      return 'Search Transactions';
    } else if (location.pathname === '/beneficiaries') {
      return 'Search Beneficiaries';
    }
    return 'Search...';
  };

  return (
    <div className="flex items-center border border-[#F8F8F880] bg-[#040428] rounded-lg w-80 p-2">
      <BiSearch className="w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder={getPlaceholder()}
        className="bg-transparent border-none outline-none flex-grow px-2 text-white"
      />
    </div>
  );
};

export default SearchBar;
