import React from 'react';
import Header from './components/Header';
import LoginBox from './components/LoginBox';
import doctorImage from './assets/doctor.png'; 
import './App.css';

const App = () => {
  return (
    <div className="AppContainer">
      <Header />
      <div className="ContentContainer">
        <div className="LeftContainer">
          <p className="WelcomeText">Vui lòng đăng nhập</p>
          <LoginBox />
        </div>
        <div className="RightContainer">
          <img className="DoctorImage" src={doctorImage} alt="Doctor" />
        </div>
      </div>
    </div>
  );
};

export default App;
