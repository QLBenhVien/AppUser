import React from 'react';
import { BoxContainer, LoginTitle, Input, Button, ForgotPassword, Form } from './styles/LoginBoxStyles';

const LoginBox = () => {
  return (
    <BoxContainer>
      <LoginTitle>Đăng Nhập</LoginTitle>
      <Form>
        <Input type="text" placeholder="Nhập tên đăng nhập" />
        <Input type="password" placeholder="Nhập mật khẩu" />
        <ForgotPassword href="#">Quên mật khẩu?</ForgotPassword>
        <Button>Đăng nhập</Button>
      </Form>
    </BoxContainer>
  );
};

export default LoginBox;
