import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import Info from "../../components/Info";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "@/config/apiconfig";
import { Toaster, toast } from "sonner";

export default function Otp() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const [otp, setOtp] = useState<string>(""); // State for OTP
  const [isOtpComplete, setIsOtpComplete] = useState<boolean>(false);
  console.log(data?.userEmail);
  const handleOtpChange = async (value: string) => {
    setOtp(value);
    if (value.length === 6) {
      setIsOtpComplete(true);
      console.log("Entered OTP:", otp);
      const payload = {
        email: data.userEmail,
        otp: value,
      };
      console.log(payload);
      try {
        const response = await axios.post(
          `${BASE_URL}/api/auth/verify-otp`,
          payload
        );
        console.log("Response", response.data);
        if (response.data.message === "OTP verified") {
          localStorage.setItem("token", response.data.token);
          toast.success("User created successfully!");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      } catch (error: any) {
        console.log(error);
        if (error.response.data.message === "User already exists") {
          toast.error("User already exists!");
        } else {
          toast.error(error.response.data.message);
        }
      }
    } else {
      setIsOtpComplete(false);
    }
  };
  return (
    <>
      <Toaster richColors position="top-right" />
      <div className="flex flex-col justify-between min-h-screen p-4 sm:p-8 lg:p-10">
        <div>
          <Info />
          <div className="px-4 sm:px-8 lg:px-16">
            <p className="text-sm sm:text-xl text-[#333333] font-normal mb-5">
              Please verify your Email.
            </p>
            <p className="text-xs sm:text-base text-[#797979] mb-5">
              We sent a verification code via email {data?.userEmail}. Please
              enter the code below within the next 10 min.
            </p>
            <Pin handleOtpChange={handleOtpChange} />
            <button className="hover:underline text-primary font-semibold">
              Resend the code
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
          <Link
            to="/info"
            className="bg-[#09111D] hover:bg-[#122138] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium text-sm"
          >
            Back
          </Link>
          <button
            type="submit"
            className={`px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium text-sm text-white ${
              isOtpComplete ? "bg-primary hover:bg-primary/90" : "bg-[#A1A1A1]"
            }`}
            disabled={!isOtpComplete}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

function Pin({
  handleOtpChange,
}: {
  handleOtpChange: (value: string) => void;
}) {
  return (
    <div className="mb-5">
      <InputOTP
        className="m-auto"
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        render={({ slots }) => (
          <InputOTPGroup className="space-x-0 sm:space-x-4 w-full">
            {slots.map((slot, index) => (
              <InputOTPSlot
                className="border border-[#909090] w-10 h-10 rounded-lg"
                key={index}
                {...slot}
              />
            ))}
          </InputOTPGroup>
        )}
        onChange={handleOtpChange}
      />
    </div>
  );
}
