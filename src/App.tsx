import { Routes, Route } from "react-router-dom";
// import TestRoute from "./components/TestRoute";
import Login from "./components/Login/Login";
import PersonalInfoForm from "./components/PersonalInfo/PersonalInfoForm";
import Otp from "./Pages/Auth/Otp";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Landing from "./components/demzy/Landing";
import Create from "./components/demzy/create/Create";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info" element={<PersonalInfoForm />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
};

export default App;
