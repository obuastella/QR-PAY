import { GoArrowDownRight, GoArrowUpRight } from 'react-icons/go';
import { recents, transactions } from '../../Transactions';
import '../Assets/HideScrollbar.css';
import { AiOutlineScan } from 'react-icons/ai';
import { useState, useEffect } from 'react';

export const RecentTransactions = () => {
  const [visibleRecents, setVisibleRecents] = useState(recents);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleRecents(recents);
      } else if (window.innerWidth >= 1024) {
        setVisibleRecents(recents.slice(0, 8));
      } else if (window.innerWidth >= 768) {
        setVisibleRecents(recents.slice(0, 7));
      } else if (window.innerWidth >= 650) {
        setVisibleRecents(recents.slice(0, 5));
      }
      else {
        setVisibleRecents(recents.slice(0, 4));
      }
    };

    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="xl:p-4 p-0">
      <div>
        <h3 className="text-lg font-semibold mb-2 px-4">Recents</h3>
        <div className="flex flex-wrap xl:flex-nowrap overflow-auto space-x-4 py-2 no-scrollbar px-4">
          {visibleRecents.map((recent, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={recent.imageUrl}
                alt={recent.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <p className="text-xs font-medium mt-1 text-[#000000] whitespace-nowrap">
                {recent.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center mb-2 px-4">
          <h3 className="text-base font-semibold text-[#000000]">
            Recent Transactions
          </h3>
          <a
            href="/transactions"
            className="text-sm text-[#040428] hover:underline"
          >
            See all
          </a>
        </div>
        <div className="bg-[#F8F8F8] rounded-[20px] p-4">
          {transactions.slice(0, 5).map((transaction, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 border-b last:border-b-0"
            >
              <div className="flex items-center gap-2">
                <span className="bg-[#D9D9D9] h-8 w-8 rounded-full p-2 text-[#000000]">
                  {transaction.type === 'QR Transaction' ? (
                    <AiOutlineScan />
                  ) : transaction.positive ? (
                    <GoArrowDownRight />
                  ) : (
                    <GoArrowUpRight />
                  )}
                </span>
                <div>
                  <h4 className="font-medium text-[#000000] text-base">
                    {transaction.name}
                  </h4>
                  <p className="text-sm text-[#666161] font-normal">
                    {transaction.type}
                  </p>
                </div>
              </div>

              <div
                className={`text-right font-medium text-lg ${
                  transaction.positive ? 'text-[#0D9924]' : 'text-[#990D0D]'
                }`}
              >
                ₦{transaction.amount.toLocaleString()}
                <p className="text-xs text-[#000000] font-normal">
                  {transaction.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
