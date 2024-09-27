import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import ExaminationForm from "./components/ExaminationForm.jsx";
import MedicalRecords from "./components/MedicalRecords.jsx";
import PatientList from './components/PatientList.jsx';
import Referals from "./components/Referrals.jsx";
import { Context } from "./main.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import SearchPatient from "./components/SearchPatient.jsx";
import MedicalRecordsDetails from "./components/MedicalRecordsDetail.jsx";
import "./App.css";

const App = () => {
  // Tạm thời giả lập là người dùng đã đăng nhập
  const { setIsAuthenticated, setAdmin } = useContext(Context);

  useEffect(() => {
    // Đặt trạng thái xác thực là true để truy cập trực tiếp vào trang HomePage
    setIsAuthenticated(true);
    setAdmin({ name: "Admin" });  // Giá trị giả lập cho admin
  }, []);

  return (
    <Router>
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/medicalRecords" element={<MedicalRecords />} />
        <Route path="/referrals" element={<Referals />} />
        <Route path="/examinationForm" element={<ExaminationForm />} />
        <Route path="/patientList" element={<PatientList />} />
        <Route path="/searchPatient" element={<SearchPatient />} />
        <Route path="/medicalRecordsDetail" element={<MedicalRecordsDetails />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;
