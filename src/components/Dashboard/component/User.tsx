import { useState, useEffect, useRef } from "react";
import ProfileMenu from "./ProfileMenu";
import BASE_URL from "@/config/apiconfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Define a type for the user profile data
interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  accountNumber: string;
  qrCode: string; // This is the base64 string for the QR code image
}

function User() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // initialize the navigate hook

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("No token found. Please log in.");
        return;
      }

      try {
        const response = await axios.get<{ user: UserProfile }>(
          `${BASE_URL}/api/user/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfile(response.data.user);
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/login");
        console.error("Error fetching profile:", error);
        setError("Error fetching profile data.");
      }
    };

    fetchProfile();

    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-auto">
      <button
        ref={buttonRef}
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="rounded-[40px] bg-white text-[#040428] flex items-center sm:p-2 p-1 gap-2"
      >
        <img
          src="/image/user.png"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
          <h2 className="font-medium sm:text-base text-sm">
            {profile.firstName} {profile.lastName}
          </h2>
          <span className="font-normal sm:text-xs text-[10px] text-left">
            User Account
          </span>
        </div>
      </button>

      {isModalOpen && (
        <div
          ref={menuRef}
          className="absolute left-0 md:right-0 md:left-auto top-14 mt-2 z-50"
        >
          <ProfileMenu
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

export default User;
