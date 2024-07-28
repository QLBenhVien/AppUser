import React from "react";
import styled from "styled-components";
import HoSoBenhAnIcon from "../../images/hoSoBenhAn.png";
import PhieuChiDinhIcon from "../../images/phieuChiDinh.png";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <HomePageContainer>
      <HeaderContainer>
        <HeaderTitle>TRANG CHỦ</HeaderTitle>
        <Breadcrumbs>Trang chủ / Trang chủ</Breadcrumbs>
      </HeaderContainer>
      <InfoSection>
        <ProfileCardContainer>
          <WelcomeText>Chào mừng trở lại!</WelcomeText>
          <ProfileInfo>
            <div>
              <ProfilePicture />
              <ProfileDetails>
                <p className="name">{user.HoTen}</p>
                <p className="specialization">Bác sĩ nội khoa</p>
              </ProfileDetails>
            </div>
            <div>
              <p>Mã</p>
              <p>BS001</p>
            </div>
            <div style={{ marginRight: "40px" }}>
              <p>Giới tính</p>
              <p>Nam</p>
            </div>
          </ProfileInfo>
        </ProfileCardContainer>
        <InfoCardContainer>
          <InfoCard>
            <h3>Hồ sơ bệnh án</h3>
            <div>1</div>
            <InfoIcon src={HoSoBenhAnIcon} alt="Hồ sơ bệnh án" />
          </InfoCard>
          <InfoCard>
            <h3>Phiếu chỉ định</h3>
            <div>1</div>
            <InfoIcon src={PhieuChiDinhIcon} alt="Phiếu chỉ định" />
          </InfoCard>
        </InfoCardContainer>
      </InfoSection>
      <WorkScheduleContainer>
        <WorkScheduleTitle>Lịch làm việc ngày: 7-7-2024</WorkScheduleTitle>
        <TimeSlots>
          <div className="time-slot">7:30-11:30</div>
          <div className="time-slot">13:00-17:00</div>
        </TimeSlots>
      </WorkScheduleContainer>
    </HomePageContainer>
  );
};

export default HomePage;

const HomePageContainer = styled.div`
  width: auto;
  height: 100%;
  background: #e4f5ff;
  padding: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderTitle = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: #000000;
`;

const Breadcrumbs = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #000000;
`;

const InfoSection = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 70px;
`;

const ProfileCardContainer = styled.div`
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
  margin: 0 50px;
`;

const WelcomeText = styled.div`
  font-family: "Times New Roman";
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #ffffff;
  background-color: #2a6f93;
  width: 475px;
  padding: 30px 0;
  padding-left: 25px;
  border-radius: 10px 10px 0 0;
`;

const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-top: 20px;
  padding-left: 40px;
  align-items: center;
  margin-top: -50px;
`;

const ProfilePicture = styled.div`
  width: 80px;
  height: 80px;
  background: #d9d9d9;
  border-radius: 50%;
  margin-top: 25px;
`;

const ProfileDetails = styled.div`
  .name {
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
  }

  .specialization {
    font-size: 14px;
    margin-top: 20px;
    color: #555;
  }
`;

const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 350px;
  margin: 0 50px;
`;

const InfoCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  width: 100%;
  position: relative;

  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    color: #000000;
    opacity: 0.6;
  }

  div {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    color: #000000;
  }
`;

const InfoIcon = styled.img`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
`;

const WorkScheduleContainer = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 73%;
  margin-top: 20px;
  margin-left: 50px;
`;

const WorkScheduleTitle = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #000000;
  opacity: 0.6;
`;

const TimeSlots = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  .time-slot {
    background: #22668e;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
  }
`;
