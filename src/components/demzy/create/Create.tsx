import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuEye } from "react-icons/lu";

const Create = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validate form inputs
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setErrorMessage("");
    navigate("/info", { state: { email, password } });
  };

  return (
    <>
      <main className="w-full min-h-full flex">
        {/* Left Section */}
        <section className="w-full md:w-1/2 h-screen flex flex-col justify-center items-center px-8">
          <div className="max-w-[400px] w-full">
            <h1 className="text-[2rem] font-bold">Welcome to QR Pay,</h1>
            <p className="text-lg mb-8">Hello there, create a New account</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Email@emailer.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="****************"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3 text-gray-500"
                  >
                    <LuEye />
                  </button>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="****************"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-3 text-gray-500"
                  >
                    <LuEye />
                  </button>
                </div>

                {errorMessage && (
                  <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium text-gray-600"
                >
                  By creating an account you agree to our{" "}
                  <Link to="#" className="text-blue-600">
                    Terms and Conditions
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-lg shadow-md hover:opacity-90"
              >
                Continue
              </button>
            </form>
          </div>
        </section>

        {/* Right Section  */}
        <section className="bg-[#040428] w-1/2 h-screen hidden md:flex justify-center items-center">
          <img src="/qrpay.png" alt="QR Pay Logo" />
        </section>
      </main>
    </>
  );
};

export default Create;
