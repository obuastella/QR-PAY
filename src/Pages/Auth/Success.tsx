import SidePanel from "@/components/Login/SidePanel";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <>
      <main className="w-full min-h-full flex">
          <section className="w-1/2 flex flex-col items-center justify-center">
          <div className="flex justify-center items-center gap-4 rounded border-8 w-[154.32px] h-[154.32px] rounded-full mb-4 border-[#C2CDE0]">
            <Check size={100} color="#0D2B78"/>
          </div>
          <h2 className="text-[1.75rem] text-[#0D2B78]">Successful</h2>
          <p className="md:mb-7 my-5 font-normal text-base text-[#797979]">
          Your password has been reset successfully
      </p>
          <div className="absolute bottom-0 mb-5 w-1/2 px-4 flex flex-col gap-4">
            <Link
              to="/login"
              className="text-white font-semibold w-full py-4 flex items-center justify-center rounded-[10px]"
              style={{
                background:
                  "linear-gradient(4.3deg, rgba(2, 2, 2, 0.99) 11.3%, #0E1D33 78.41%)",
              }}
            >
              Continue
            </Link>
          </div>
        </section>
      <SidePanel />
      </main>
    </>
  );
};

export default Success;
