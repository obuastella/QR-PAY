import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isDisabled = !email || !password;

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("email: " + email + "\n" + "password: " + password);
  };

  return (
    <div className="flex flex-col justify-center w-full md:w-1/2 h-screen p-10">
      <h2 className="text-2xl font-bold mb-2">Welcome back,</h2>
      <p className="md:mb-7 mb-5 font-normal text-base">
        Enter your details to login to your account
      </p>
      <img
        src="/image/ZionIllustration.png"
        alt="illustration"
        className="mx-auto mb-6"
      />
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="block text-base font-normal mb-1">
            Email
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email@emailer.com"
            className="w-full text-base font-normal p-3 border border-[#0D2B78] bg-[#E4E6E8] rounded-xl outline-2 outline-[#0D2B78]"
          />
        </div>
        <div className="mb-3">
          <label className="block text-base font-normal mb-1">
            Password
          </label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="****************"
            className="w-full text-base font-normal p-3 border border-[#0D2B78] bg-[#E4E6E8] rounded-xl outline-2 outline-[#0D2B78]"
          />
        </div>
        <div className="mb-6 md:mb-12 text-right">
          <a href="#" className="text-base font-semibold text-[#0D2B78]">
            Forgot Password
          </a>
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
          Sign in
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-base font-medium">
          Don’t have an account?{' '}
          <a href="#" className="text-[#0D2B78]">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
