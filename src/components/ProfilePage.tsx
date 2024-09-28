import React, { useEffect, useState } from "react";
import axios from "axios";

// Define a type for the user profile data
interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  accountNumber: string;
  qrCode: string; // This is the base64 string for the QR code image
}

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("No token found. Please log in.");
        return;
      }

      try {
        const response = await axios.get<{ user: UserProfile }>(
          "http://localhost:3000/api/user/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfile(response.data.user);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Error fetching profile data.");
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>
        <strong>Name:</strong> {profile.firstName} {profile.lastName}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      <p>
        <strong>Account Number:</strong> {profile.accountNumber}
      </p>
      <p>
        <strong>QR Code:</strong>
      </p>
      {/* Render the QR code image */}
      <img
        src={profile.qrCode}
        alt="QR Code"
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  );
};

export default ProfilePage;
