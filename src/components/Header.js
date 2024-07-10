
import React from 'react';
import { HeaderContainer, Logo, Title } from './styles/HeaderStyles';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="/logo.png" alt="Logo" />
      <Title>UMC</Title>
    </HeaderContainer>
  );
};

export default Header;
