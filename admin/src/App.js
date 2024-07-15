import React, { useState } from "react";
// Login page
import Header from "./Screens/Dangnhap/Header";
import LoginBox from "./Screens/Dangnhap/LoginBox";
// Doctor page
import HomePage from "./Screens/TrangBacSi/HomePage";
import Sidebar from "./Screens/TrangBacSi/Sidebar";
import NavBar from "./Screens/TrangBacSi/NavBar";
// PhieuChiDinh page
import HomePagePCD from "./Screens/PhieuChiDinh/HomePagePCD";
import SidebarPCD from "./Screens/PhieuChiDinh/SidebarPCD";
import NavBarPCD from "./Screens/PhieuChiDinh/NavBarPCD";
// QLHSBA Page
import HomePageQLHSBA from "./Screens/QuanLyHoSoBenhAn/HomePageQLHSBA";
import NavBarQLHSBA from "./Screens/QuanLyHoSoBenhAn/NavBarQLHSBA";
import SidebarQLHSBA from "./Screens/QuanLyHoSoBenhAn/SidebarQLHSBA";
// TTHSBA Page
import HomePageTTHSBA from "./Screens/ThongTinHoSoBenhAn/HomePageTTHSBA";
import NavBarTTHSBA from "./Screens/ThongTinHoSoBenhAn/NavBarTTHSBA";
import SidebarTTHSBA from "./Screens/ThongTinHoSoBenhAn/SidebarTTHSBA";
// Image
import doctorImage from "./images/doctor.png";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("LoginPage"); // Default to testing

  const handleLogin = () => {
    setCurrentPage("HomePage");
  };

  return (
    <div className="AppContainer">
      {currentPage === "QuanLyHoSoBenhAn" && (
        <>
          <SidebarQLHSBA />
          <div className="ContentContainer">
            <NavBarQLHSBA />
            <HomePageQLHSBA />
          </div>
        </>
      )}
      {currentPage === "ThongTinHoSoBenhAn" && (
        <>
          <SidebarTTHSBA />
          <div className="ContentContainer">
            <NavBarTTHSBA />
            <HomePageTTHSBA />
          </div>
        </>
      )}
      {currentPage === "PhieuChiDinh" && (
        <>
          <SidebarPCD />
          <div className="ContentContainer">
            <NavBarPCD />
            <HomePagePCD />
          </div>
        </>
      )}
      {currentPage === "LoginPage" && (
        <div className="ContentContainer">
          <Header />
          <div className="LoginContainer">
            <div className="LeftContainer">
              <p className="WelcomeText">Vui lòng đăng nhập</p>
              <LoginBox onLogin={handleLogin} />
            </div>
            <div className="RightContainer">
              <img className="DoctorImage" src={doctorImage} alt="Doctor" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
