import React from 'react';
// React Router
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Login page
import Header from './Screens/Dangnhap/Header';
import LoginBox from './Screens/Dangnhap/LoginBox';
// Doctor page
import HomePage from './Screens/TrangBacSi/HomePage'; 
import Sidebar from './Screens/TrangBacSi/Sidebar'; 
import NavBar from './Screens/TrangBacSi/NavBar'; 
// PhieuChiDinh page
import HomePagePCD from './Screens/PhieuChiDinh/HomePagePCD'; 
import SidebarPCD from './Screens/PhieuChiDinh/SidebarPCD'; 
import NavBarPCD from './Screens/PhieuChiDinh/NavBarPCD'; 
// QLHSBA Page
import HomePageQLHSBA from './Screens/QuanLyHoSoBenhAn/HomePageQLHSBA';
import NavBarQLHSBA from './Screens/QuanLyHoSoBenhAn/NavBarQLHSBA';
import SidebarQLHSBA from './Screens/QuanLyHoSoBenhAn/SidebarQLHSBA';
// TTHSBA Page
import HomePageTTHSBA from './Screens/ThongTinHoSoBenhAn/HomePageTTHSBA';
import NavBarTTHSBA from './Screens/ThongTinHoSoBenhAn/NavBarTTHSBA';
import SidebarTTHSBA from './Screens/ThongTinHoSoBenhAn/SidebarTTHSBA';
// Image
import doctorImage from './images/doctor.png';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="AppContainer">
        <Routes>
          <Route path="/login" element={
            <>
              <Header />
              <div className="LoginContainer">
                <div className="LeftContainer">
                  <p className="WelcomeText">Vui lòng đăng nhập</p>
                  <LoginBox />
                </div>
                <div className="RightContainer">
                  <img className="DoctorImage" src={doctorImage} alt="Doctor" />
                </div>
              </div>
            </>
          } />
          <Route path="/home" element={<><Sidebar /><NavBar /><HomePage /></>} />
          <Route path="/phieu-chi-dinh" element={<><SidebarPCD /><NavBarPCD /><HomePagePCD /></>} />
          <Route path="/quan-ly-ho-so-benh-an" element={<><SidebarQLHSBA /><NavBarQLHSBA /><HomePageQLHSBA /></>} />
          <Route path="/thong-tin-ho-so-benh-an" element={<><SidebarTTHSBA /><NavBarTTHSBA /><HomePageTTHSBA /></>} />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;