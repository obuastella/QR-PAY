import { FaRegUser } from "react-icons/fa6";

export default function Info() {
    return (
        <div className="flex items-center mb-6 sm:mb-8">
        <img src="image/zionLogo.png" alt="Logo" className="h-10 sm:h-full" />
        <h2 className="text-lg sm:text-xl lg:text-2xl text-[#0D2B78] font-normal ml-4 sm:ml-6">
            Personal Information
        </h2>
        <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-[#0D2B78] text-white flex items-center justify-center ml-4">
            <FaRegUser className="w-3 h-3 sm:w-5 sm:h-5" />
        </div>
    </div>
    )
}