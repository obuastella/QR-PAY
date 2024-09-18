import BASE_URL from "@/config/apiconfig";
import axios from "axios";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const PersonalInfoForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const userEmail = data?.email;
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: data.email,
      password: data.password,
      dateOfBirth: dob,
      phoneNumber: phoneNumber,
    };
    console.log(payload);
    try {
      const response = await axios.post(
        `${BASE_URL}/api/auth/register`,
        payload
      );
      const token = response.data.token;
      toast.success(response.data.message);
      localStorage.setItem("token", token);
      console.log(userEmail);
      navigate("/otp", { state: { userEmail } });
    } catch (error: any) {
      console.log(error);
      if (error.response.data.message === "User already exists") {
        toast.error("User already exists!");
      } else {
        toast.error(error.response.data.message);
        // toast.error("An error has occurred");
      }
    }
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="flex justify-center items-center min-h-screen p-4 sm:p-8 lg:p-10">
        <div className="w-full">
          <div className="flex items-center mb-6 sm:mb-8">
            <img
              src="image/zionLogo.png"
              alt="Logo"
              className="h-10 sm:h-full"
            />
            <h2 className="text-lg sm:text-xl lg:text-2xl text-[#0D2B78] font-normal ml-4 sm:ml-6">
              Personal Information
            </h2>
            <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-[#0D2B78] text-white flex items-center justify-center ml-4">
              <FaRegUser className="w-3 h-3 sm:w-5 sm:h-5" />
            </div>
          </div>

          <div className="px-4 sm:px-8 lg:px-16">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-normal text-[#333333] mb-3">
              Let’s get to know you better
            </h3>
            <p className="text-sm sm:text-base text-[#797979] font-normal mb-5">
              Please fill in your personal information
            </p>
            <form action="" method="post" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div>
                  <label className="block text-base font-normal mb-2">
                    First Name
                  </label>
                  <input
                    required
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78]"
                    placeholder="First Name"
                  />
                </div>

                <div>
                  <label className="block text-base font-normal mb-2">
                    Last Name
                  </label>
                  <input
                    required
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78]"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-base font-normal mb-2">
                  Date of Birth (MM/DD/YYYY)
                </label>
                <input
                  required
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full sm:w-2/5 p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78]"
                />
                <p className="text-xs sm:text-sm text-[#797979] mt-2">
                  <strong>Note:</strong>
                  <span className="italic">
                    You must be at least 18 years old to open your own account.
                  </span>
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-normal mb-2">
                  What is your phone number
                </h3>
                <p className="text-xs sm:text-sm text-[#797979] mb-5">
                  Please enter your personal mobile number
                </p>

                <label className="block text-base font-normal mb-2">
                  Phone number
                </label>
                <input
                  required
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full sm:w-2/5 p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78]"
                  placeholder="XXX XXX XXXX"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-4">
                <Link
                  to="/"
                  className="flex justify-center itesm-center bg-[#09111D] hover:bg-[#122138] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium text-sm"
                >
                  Back
                </Link>
                <button
                  type="submit"
                  className="bg-[#0D2B78] hover:bg-[#203569] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium text-sm"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoForm;
