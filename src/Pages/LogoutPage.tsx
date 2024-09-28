// src/pages/LogoutPage.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove token from localStorage
    localStorage.removeItem("token");

    // Redirect to login page
    navigate("/login");
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default LogoutPage;
