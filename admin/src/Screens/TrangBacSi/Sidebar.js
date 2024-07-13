import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <Logo src={logo} alt="Phòng khám UCM" />
        <h1>Phòng khám UCM</h1>
      </LogoContainer>
      <MenuItem>
        <HomeLink href="#">Trang chủ</HomeLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="#">Hồ sơ bệnh án</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="#">Phiếu chỉ định</MenuLink>
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;

// Styled Components
const SidebarContainer = styled.div`
  width: 300px;
  background-color: #22668E;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 20px 0px 0px 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
  background-color: white;

  h1 {
    color: black;
    font-size: 20px;
    margin-top: 10px;
    margin-right: 10px;
  }
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin: 10px;
`;

const MenuItem = styled.div`
  width: 100%;
  margin: 10px 0;
  text-align: center;
`;

const HomeLink = styled.a`
  display: block;
  width: 90%;
  padding: 15px;
  margin: 10px 0;
  background-color: white;
  color: #22668E;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;

  &:hover {
    background-color: #d3d3d3;
  }
`;

const MenuLink = styled.a`
  display: block;
  width: 90%;
  padding: 15px;
  margin: 10px 0;
  background-color: #578EAF;
  color: black;
  text-decoration: none;
  border-radius: 10px;
  text-align: center;

  &:hover {
    background-color: #d3d3d3;
  }
`;