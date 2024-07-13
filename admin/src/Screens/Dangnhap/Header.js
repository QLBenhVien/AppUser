import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <Title>UMC</Title>
    </HeaderContainer>
  );
};

export default Header;

// Styled Components
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  width: 170px;
  margin-top: 10px;
    margin-left: 20px;
`;

const Logo = styled.img`
  height: 80px;
  margin-right: 10px;
`;

const Title = styled.h1`
  font-size: 40px;
  color: #333;
`;