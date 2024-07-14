import React from 'react';
import styled from 'styled-components';

const LoginBox = ({ onLogin }) => {
  return (
    <BoxContainer>
      <LoginTitle>Đăng Nhập</LoginTitle>
      <Form>
        <Input type="text" placeholder="Nhập tên đăng nhập" />
        <Input type="password" placeholder="Nhập mật khẩu" />
        <ForgotPassword href="#">Quên mật khẩu?</ForgotPassword>
        <Button onClick={onLogin}>Đăng nhập</Button>
      </Form>
    </BoxContainer>
  );
};

export default LoginBox;

// Styled Components
const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left:50px;
  width: 300px;
  height: 350px;
  padding: 20px;
  background-color: #3A7CA5;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: white;
`;

const LoginTitle = styled.h2`
  margin-bottom: 20px;
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 20px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: white;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 20px;
  margin-top: 10px;
`;

const ForgotPassword = styled.a`
  margin-bottom: 20px;
  margin-top: 20px;
  color: white;
  text-align: right;
  display: block;
  font-size: 14px;
`;