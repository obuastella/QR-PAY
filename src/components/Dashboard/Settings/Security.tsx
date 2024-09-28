import '../component/Assets/ToggleSwitch.css';
import FootNote from './FootNote';

const Security = () => {
  return (
    <div className="p-6 bg-white rounded-[24px]">
      <div className="mb-6">
        <h3 className="text-gray-700 font-semibold">
          Two-factor Authentication
        </h3>
        <div className="flex items-center space-x-4 mt-2">
          <label className="toggle-switch">
            <input type="checkbox" className="toggle-checkbox" />
            <span className="toggle-slider"></span>
          </label>
          <label className="text-gray-700">
            Enable or disable two factor authentication
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-gray-700 font-semibold">Change Password</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          <div>
            <label className="block text-base font-normal mb-2">
              Current Password
            </label>
            <input
              type="password"
              value="**********"
              className="w-full p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78]"
            />
          </div>
          <div>
            <label className="block text-base font-normal mb-2">
              New Password
            </label>
            <input
              type="password"
              value="**********"
              className="w-full p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78]"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end items-center gap-x-2">
        <button
          type="button"
          className="px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-[15px]"
        >
          Edit
        </button>
        <button
          type="button"
          className="px-6 py-2 bg-[#1814F3] hover:bg-blue-700 text-white rounded-[15px]"
        >
          Save
        </button>
      </div>

      <FootNote />
    </div>
  );
};

export default Security;
