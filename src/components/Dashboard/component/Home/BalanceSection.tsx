import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export const BalanceSection = () => {
  const [showBalance, setShowBalance] = useState(false);

  const toggleBalance = () => setShowBalance(!showBalance);

  return (
    <div className="py-10 w-full bg-[#F8F8F8] rounded-xl shadow-lg relative overflow-hidden">
      {/* top-right */}
      <div className="absolute top-[-25.96px] right-0 w-28 h-28 bg-[#C9C9C980] rounded-full transform translate-x-4 -translate-y-6"></div>
      <div className="absolute top-[17.39px] right-[-30px] w-28 h-28 bg-[#C9C9C980] rounded-full transform translate-x-6 -translate-y-7"></div>

      {/* bottom-left */}
      <div className="absolute bottom-[-25.96px] left-0 w-28 h-28 bg-[#C9C9C980] rounded-full transform -translate-x-4 translate-y-6"></div>
      <div className="absolute bottom-[17.39px] left-[-30px] w-28 h-28 bg-[#C9C9C980] rounded-full transform -translate-x-6 translate-y-7"></div>

      {/* mountain */}
      <div className="absolute bottom-[-50px] right-[-2px] w-auto">
        <img src="image/Linebackground.svg" alt="" className='w-[350px]'/>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="md:text-lg sm:text-base text-sm font-semibold text-[#040428] mb-2">Total Balance</h2>
        <div className="text-4xl font-bold text-[#040428] flex items-center gap-4 z-10">
          <span className='font-medium border-red-500  text-2xl whitespace-nowrap'>₦ {showBalance ? '30,000,000,000' : '*****'}</span>
          <button
            onClick={toggleBalance}
            className="text-[#040428] cursor-pointer transition-colors duration-200"
            aria-label={showBalance ? 'Hide balance' : 'Show balance'}
          >
            {showBalance ? <EyeOff size={24} /> : <Eye size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};
