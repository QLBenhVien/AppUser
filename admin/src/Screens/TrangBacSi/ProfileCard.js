import React from "react";
import styled from "styled-components";

const ProfileCard = () => {
  return (
    <ProfileCardContainer>
      <Header>Chào mừng trở lại!</Header>
      <ProfileInfo>
        <Column>
          <ProfilePicture />
          <ProfileDetails>
            <p className="name">Nguyễn Văn A</p>
            <p className="specialization">Bác sĩ nội khoa</p>
          </ProfileDetails>
        </Column>
        <Column>
          <InfoLabel>Mã</InfoLabel>
          <InfoValue>BS001</InfoValue>
        </Column>
        <Column>
          <InfoLabel>Giới tính</InfoLabel>
          <InfoValue>Nam</InfoValue>
        </Column>
      </ProfileInfo>
    </ProfileCardContainer>
  );
};

export default ProfileCard;

// Styled Components
const ProfileCardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  background-color: #2a6f93;
  color: white;
  padding: 16px;
  text-align: center;
  font-size: 1.25em;
  font-weight: bold;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const ProfilePicture = styled.div`
  width: 64px;
  height: 64px;
  background-color: #ccc;
  border-radius: 50%;
  margin-bottom: 8px;
`;

const ProfileDetails = styled.div`
  .name {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }

  .specialization {
    font-size: 14px;
    margin: 0;
    color: #555;
  }
`;

const InfoLabel = styled.p`
  font-weight: bold;
  margin: 0;
  color: #000;
`;

const InfoValue = styled.p`
  margin: 0;
  color: #000;
`;

const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
