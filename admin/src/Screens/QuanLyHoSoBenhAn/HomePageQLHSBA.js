import React from 'react';
import styled from 'styled-components';


const HomePagePCD = () => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>DANH SÁCH HỒ SƠ BỆNH ÁN</HeaderTitle>
        <Breadcrumbs>Quản lý / Danh sách hồ sơ bệnh án</Breadcrumbs>
      </HeaderContainer>
      <PatientDetails>
        <NavHome>
        <SearchContainer>
        <SearchInput placeholder="Nhập tên bệnh nhân" />
        <SearchButton>Tìm kiếm</SearchButton>  
      </SearchContainer>
      <AddButton>Thêm hồ sơ</AddButton>
        </NavHome>
      
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã HS</th>
              <th>Tên bệnh nhân</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>0000000</td>
              <td>Nguyễn Văn A</td>
              <td>
                <ActionLink>Xem</ActionLink>
                <ActionLink>Chỉnh sửa</ActionLink>
                <ActionLink>Gửi</ActionLink>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </Table>
      </TableContainer>
      </PatientDetails>
      
    </Container>
  );
};

export default HomePagePCD;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #E4F5FF;
  padding: 20px;
  height: 100%
`;

const PatientDetails = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin:20px 20px 20px 0;
  height: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  color: #000;
`;

const Breadcrumbs = styled.div`
  font-size: 16px;
  color: #666;
`;

const NavHome = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const SearchContainer = styled.div`
  display: flex;
  
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 8px;
      border-radius: 16px;
`;

const SearchButton = styled.button`
  padding: 0px 16px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
      margin-left: 30px;
    border-radius: 5px;
`;

const AddButton = styled.button`
  padding: 8px 16px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const TableContainer = styled.div`
  overflow-x: auto; // Ensures table does not extend outside the view
`;

const Table = styled.table`
  width: 100%;
  background: white;
  border-collapse: collapse;
  th, td {
    border-bottom: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f8f9fa;
  }
`;

const ActionLink = styled.span`
  margin-right: 10px;
  color: #007BFF;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

