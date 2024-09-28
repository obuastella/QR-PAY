// src/App.tsx
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component
import Login from "./components/Login/Login";
import PersonalInfoForm from "./components/PersonalInfo/PersonalInfoForm";
import Otp from "./Pages/Auth/Otp";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Landing from "./components/demzy/Landing";
import Create from "./components/demzy/create/Create";
import Transactions from "./components/Dashboard/Transactions";
import Beneficiaries from "./components/Dashboard/Beneficiaries";
import Notifications from "./components/Dashboard/Notifications";
import Support from "./components/Dashboard/Support";
import Home from "./components/Dashboard/Home";
import Settings from "./components/Dashboard/Settings";
import SidebarLayout from "./components/Dashboard/SidebarLayout";
import ConfirmPassword from "./Pages/Auth/ConfirmPassword";
import Success from "./Pages/Auth/Success";
import Profile from "./components/Dashboard/Profile";
// import DisburseTransactions from "../DisburseTransaction";
import ProfilePage from "./components/ProfilePage";

const App = () => {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/disburse" element={<ProfilePage />} />
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info" element={<PersonalInfoForm />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />
        <Route path="/auth/success" element={<Success />} />

        {/* SidebarLayout routes (protected) */}
        <Route element={<SidebarLayout />}>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transactions"
            element={
              <ProtectedRoute>
                <Transactions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/beneficiaries"
            element={
              <ProtectedRoute>
                <Beneficiaries />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/support"
            element={
              <ProtectedRoute>
                <Support />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
