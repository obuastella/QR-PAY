import SidePanel from "@/components/Login/SidePanel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ConfirmPassword() {
  return (
    <div className="flex h-screen">
      <Form/>
      <SidePanel />
    </div>
  );
}

export default ConfirmPassword;



function Form() {
    const navigate = useNavigate()
    const [password, setPassword] = useState('');
    const [confitmPassword, setConfirmPassword] = useState('');

  const isDisabled =  !password;

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/auth/success")
  };

  return (
    <div className="flex flex-col justify-center w-full md:w-1/2 p-10">
     
      <img
        src="/image/forgot-password.png"
        alt="illustration"
        className="mx-auto md:mb-10 mb-8"
      />
       <h2 className="text-2xl font-bold mb-2">New Password</h2>
      <p className="md:mb-7 mb-5 font-normal text-base text-[#797979]">
      Set the new password for your account so you can login and access all features
      </p>
      <form onSubmit={handleLogin}>
      <div className="md:mb-5 mb-3">
          <label className="block text-base font-normal md:mb-3 mb-2">
            Enter new Password
          </label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*********"
            className="w-full text-base font-normal p-3 border border-[#0D2B78] bg-[#E4E6E8] rounded-xl outline-2 outline-[#0D2B78]"
          />
        </div>
        <div className="md:mb-5 mb-3">
          <label className="block text-base font-normal md:mb-3 mb-2">
            Confirm Password
          </label>
          <input
            required
            type="password"
            value={confitmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="*********"
            className="w-full text-base font-normal p-3 border border-[#0D2B78] bg-[#E4E6E8] rounded-xl outline-2 outline-[#0D2B78]"
          />
        </div>
        <button
          type="submit"
          className={`w-full text-white p-3 rounded-lg font-semibold transition ease-out duration-300 ${
            isDisabled
              ? 'bg-[#A1A1A1] cursor-not-allowed'
              : 'bg-gradient-to-t from-[#020202] to-[#0E1D33]'
          }`}
          disabled={isDisabled}
        >
        Update Password
        </button>
      </form>
    </div>
  );
};

