import { ActionButtons } from './component/Home/ActionButtons';
import { BalanceSection } from './component/Home/BalanceSection';
import { RecentTransactions } from './component/Home/RecentTransactions';
import { WeeklyActivity } from './component/Home/WeeklyActivity';
import QrCodeScan from './component/QrCodeScan';

const Home = () => {
  return (
    <div className="p-0 sm:p-6 rounded-[24px] flex xl:flex-row flex-col overflow-auto gap-6">
      <div className="xl:w-2/3 w-full">
        <div className="md:flex md:flex-row flex-col items-center md:gap-3 lg:gap-6 md:space-y-0 space-y-5">
          <BalanceSection />
          <ActionButtons />
          <div className="xl:block hidden">
            <QrCodeScan />
          </div>
        </div>
        <div className="mt-4">
          <WeeklyActivity />
        </div>
      </div>
      <div className="xl:w-1/3 w-full">
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Home;
