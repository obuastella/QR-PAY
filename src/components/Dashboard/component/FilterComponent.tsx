import { useEffect, useRef, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { FilterOption } from '../types/types';

interface FilterComponentProps {
  options: FilterOption[];
  onFilterSelect: (option: FilterOption) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ options, onFilterSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: FilterOption) => {
    onFilterSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={filterRef}>
      <button
        onClick={toggleOptions}
        className="p-2 text-gray-700 hover:bg-gray-400 rounded-full focus:outline-none"
        aria-label="Filter"
      >
        <FaFilter size={24} />
      </button>
      {isOpen && (
        <div className="absolute right-0 bg-gray-100 text-black border border-gray-300 rounded-md shadow-lg mt-2 w-48">
          {options.map(option => (
            <div
              key={option.id}
              className="p-2 cursor-pointer hover:bg-gray-300"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
