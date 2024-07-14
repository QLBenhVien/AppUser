import React from 'react';
import styled from 'styled-components';

const InfoCard = ({ title, count, bgColor = '#ffffff', titleColor = '#000000', countColor = '#3A7CA5' }) => {
  return (
    <InfoCardContainer bgColor={bgColor}>
      <InfoTitle titleColor={titleColor}>{title}</InfoTitle>
      <InfoCount countColor={countColor}>{count}</InfoCount>
    </InfoCardContainer>
  );
};

export default InfoCard;

const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 200px;
`;

const InfoTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${(props) => props.titleColor};
`;

const InfoCount = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.countColor};
`;