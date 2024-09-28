/* eslint-disable @typescript-eslint/no-explicit-any */
import BASE_URL from "@/config/apiconfig";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = !email || !password;

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("email: " + email + "\n" + "password: " + password);
    const payload = {
      email: email,
      password: password,
    };
    console.log(payload);
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/login`, payload);
      console.log(response);
      const token = response.data.token;
      toast.success("Logged in successfully!");
      localStorage.setItem("token", token);

      navigate("/home");
    } catch (error: any) {
      console.log(error);
      if (error.response.data.message === "User already exists") {
        toast.error("User already exists!");
      } else {
        toast.error(error.response.data.message);
      }
    }
  };

  const popUp = () => {
    toast.warning("Currently working on this feature! 😔");
  };
  return (
    <>
      <Toaster richColors position="top-right" />
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
            <label className="block text-base font-normal mb-1">Email</label>
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
            <label className="block text-base font-normal mb-1">Password</label>
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
            <Link
              to="#"
              onClick={popUp}
              className="text-base font-semibold text-[#0D2B78]"
            >
              Forgot Password
            </Link>
          </div>
          <button
            type="submit"
            className={`w-full text-white p-3 rounded-lg font-semibold transition ease-out duration-300 ${
              isDisabled
                ? "bg-[#A1A1A1] cursor-not-allowed"
                : "bg-gradient-to-t from-[#020202] to-[#0E1D33]"
            }`}
            disabled={isDisabled}
          >
            Sign in
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-base font-medium">
            Don’t have an account?{" "}
            <Link to="/create" className="text-[#0D2B78]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
