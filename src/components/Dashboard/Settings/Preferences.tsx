import '../component/Assets/ToggleSwitch.css'
import FootNote from './FootNote';

const Preferences = () => {
  return (
    <div className="p-6 bg-white rounded-[24px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-base font-normal mb-2">Currency</label>
          <input
            type="text"
            value="NGN"
            className="w-full p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78]"
          />
        </div>
        <div>
          <label className="block text-base font-normal mb-2">Time Zone</label>
          <input
            type="text"
            value="(GMT+1-12:00) West African Standard Time"
            className="w-full p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78]"
          />
        </div>
      </div>

      <div className="my-6">
        <h3 className="text-gray-700 font-semibold">Notification</h3>
        <div className="mt-4 space-y-4">
          <div className="flex items-center space-x-4">
            <label className="toggle-switch">
              <input type="checkbox" className="toggle-checkbox" checked />
              <span className="toggle-slider"></span>
            </label>
            <label className="text-gray-700">
              I send or receive digital currency
            </label>
          </div>
          <div className="flex items-center space-x-4">
            <label className="toggle-switch">
              <input type="checkbox" className="toggle-checkbox" />
              <span className="toggle-slider"></span>
            </label>
            <label className="text-gray-700">I receive merchant order</label>
          </div>
          <div className="flex items-center space-x-4">
            <label className="toggle-switch">
              <input type="checkbox" className="toggle-checkbox" checked />
              <span className="toggle-slider"></span>
            </label>
            <label className="text-gray-700">
              There are recommendations for my account
            </label>
          </div>
        </div>
      </div>

      <FootNote />
    </div>
  );
};

export default Preferences;
