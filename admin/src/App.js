import React, { useState } from "react";
import Header from "./Screens/Dangnhap/Header";
import LoginBox from "./Screens/Dangnhap/LoginBox";

import HomePage from "./Screens/TrangBacSi/HomePage";
import Sidebar from "./Screens/TrangBacSi/Sidebar";
import NavBar from "./Screens/TrangBacSi/NavBar";

import doctorImage from "./images/doctor.png";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="AppContainer">
      {isLoggedIn ? (
        <>
          <Sidebar />
          <div className="ContentContainer">
            <NavBar />
            <HomePage />
          </div>
        </>
      ) : (
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
