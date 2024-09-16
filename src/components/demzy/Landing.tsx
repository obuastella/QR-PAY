import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <main className="w-full min-h-full flex">
        {/* Left Section */}
        <section className="bg-[#040428] w-1/2 h-screen flex justify-center items-center">
          <img src="/qrpay.png" alt="" />
        </section>

        {/* Right Section */}
        <section className="w-1/2 flex flex-col items-center justify-center">
          <div className="flex items-center gap-4">
            <img src="/qrpay.png" alt="" />
            <h2 className="text-[1.75rem] font-bold">QR Pay</h2>
          </div>
          <p className="max-w-[22.75rem] text-[1.25rem] font-medium text-center">
            Quickest way to make send and receive money, Get Involved!!
          </p>

          <div className="absolute bottom-0 mb-5 w-1/2 px-4 flex flex-col gap-4">
            <Link
              to="/create"
              className="text-white font-semibold w-full py-4 flex items-center justify-center rounded-[10px]"
              style={{
                background:
                  "linear-gradient(4.3deg, rgba(2, 2, 2, 0.99) 11.3%, #0E1D33 78.41%)",
              }}
            >
              Create Account
            </Link>

            <p className="font-medium text-center">
              Already have an account?
              <Link to="/login" className="text-[#0D2B78]">
                {" "}
                Sign in
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Landing;
