import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = ({ userName = "BS. Nguyễn Văn A", bgColor = "white", textColor = "#000000", iconSize = 24, boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)" }) => {
  return (
    <NavBarContainer bgColor={bgColor} boxShadow={boxShadow}>
      <UserInfo textColor={textColor}>
        <UserIcon>
          <FaUserCircle size={iconSize} />
        </UserIcon>
        <span>{userName}</span>
      </UserInfo>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  box-shadow: ${(props) => props.boxShadow};
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.textColor};

  span {
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
  }
  margin-right: 50px;
`;

const UserIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;