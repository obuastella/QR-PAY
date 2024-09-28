// src/components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";

// Function to check if user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

// Define the ProtectedRoute component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  if (!isAuthenticated()) {
    // If not authenticated, redirect to login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
