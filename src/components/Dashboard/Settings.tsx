import { useState } from 'react';
import Preferences from './Settings/Preferences';
import EditProfile from './Settings/EditProfile';
import Security from './Settings/Security';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('edit-profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'edit-profile':
        return <EditProfile />;
      case 'preferences':
        return <Preferences />;
      case 'security':
        return <Security />;
      default:
        return null;
    }
  };

  return (
    <div className='md:p-6 p-2'>
      {/* Tabs */}
      <div className="flex justify-between md:justify-start md:gap-x-14 gap-x-0 border-b pb-0 mb-6">
        <button
          onClick={() => setActiveTab('edit-profile')}
          className={`px-4 py-2 ${activeTab === 'edit-profile' ? 'text-[#1814F3] border-b-4 border-[#1814F3] text-base font-medium' : 'text-[#718EBF] font-medium text-base'}`}
        >
          Edit Profile
        </button>
        <button
          onClick={() => setActiveTab('preferences')}
          className={`px-4 py-2 ${activeTab === 'preferences' ? 'text-[#1814F3] border-b-4 border-[#1814F3] text-base font-medium' : 'text-[#718EBF] font-medium text-base'}`}
        >
          Preferences
        </button>
        <button
          onClick={() => setActiveTab('security')}
          className={`px-4 py-2 ${activeTab === 'security' ? 'text-[#1814F3] border-b-4 border-[#1814F3] text-base font-medium' : 'text-[#718EBF] font-medium text-base'}`}
        >
          Security
        </button>
      </div>

      {/* Content */}
      <div>{renderContent()}</div>
    </div>
  );
};

export default Settings;
