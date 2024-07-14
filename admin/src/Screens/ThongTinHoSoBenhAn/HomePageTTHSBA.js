import React from 'react';
import styled from 'styled-components';

const HomePageTTHSBA = () => {
  return (
    <Container>
      <Header>
        <Title>THÔNG TIN HỒ SƠ BỆNH ÁN</Title>
        <UserActions>Quản lý hồ sơ bệnh án / Xem hồ sơ bệnh án</UserActions>
      </Header>
      <MainContent>
        <PatientInfoSection>
        <ListTitle>Thông tin bệnh nhân</ListTitle>
          <PatientDetails>
            <DetailRow>
              <Label>Mã bệnh nhân:</Label>
              <Value>0000000</Value>
            </DetailRow>
            <DetailRow>
              <Label>Họ và Tên:</Label>
              <Value>Nguyễn Thị Ngọc Hoài</Value>
            </DetailRow>
            <DetailRow>
              <Label>Ngày sinh:</Label>
              <Value>20/10/2004</Value>
            </DetailRow>
            <DetailRow>
              <Label>Địa chỉ:</Label>
              <Value>Nguyễn Thái Sơn, Phường 5, Gò Vấp</Value>
            </DetailRow>
            <DetailRow>
              <Label>Giới tính:</Label>
              <Value>Nữ</Value>
            </DetailRow>
            <DetailRow>
              <Label>SDT:</Label>
              <Value>0987967497</Value>
            </DetailRow>
          </PatientDetails>
        </PatientInfoSection>
        <RecordList>
          <ListTitle>Danh sách bệnh án</ListTitle>
          <Record>Record example here</Record>
        </RecordList>
      </MainContent>
    </Container>
  );
};

export default HomePageTTHSBA;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.div`
  background: #E4F5FF;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

const UserActions = styled.div`
  font-size: 16px;
  color: #333;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  background: #E4F5FF;
  padding: 20px;
  overflow-x: hidden;
  flex-direction: column;
  
`;

const PatientInfoSection = styled.div`
  flex: 1;
  margin:0 20px 20px 20px;
  background: white;
  padding: 20px;
  border-radius: 10px;
`;

const PatientDetails = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin:20px 20px 20px 0;
`;

const DetailRow = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const Value = styled.span`
  flex: 1;
`;

const RecordList = styled.div`
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin:20px 20px 0 20px;
`;

const ListTitle = styled.h3`
  margin-bottom: 20px;
`;

const Record = styled.div`
  padding: 10px;
  margin-top: 10px;
  background: #f0f0f0;
  border-radius: 5px;
`;