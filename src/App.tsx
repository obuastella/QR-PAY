import { Routes, Route } from "react-router-dom";
// import TestRoute from "./components/TestRoute";
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
import DisburseTransactions from "../DisburseTransaction";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/disburse" element={<DisburseTransactions />} />
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info" element={<PersonalInfoForm />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />
        <Route path="/auth/success" element={<Success />} />

        <Route element={<SidebarLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/beneficiaries" element={<Beneficiaries />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
