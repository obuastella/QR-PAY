import { ActionButtons } from './component/Home/ActionButtons';
import { BalanceSection } from './component/Home/BalanceSection';
import { WeeklyActivity } from './component/Home/WeeklyActivity';
import QrCodeScan from './component/QrCodeScan';

const Home = () => {
  return (
    <div className="p-6 rounded-[24px] flex xl:flex-row flex-col overflow-auto gap-6">
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
      <div className="border-red-500 border xl:w-1/3 w-full h-[200px] overflow-hidden">
        {/* <RecentsSection /> */}
        {/* <RecentTransactions /> */}
      </div>
    </div>
  );
};

export default Home;
