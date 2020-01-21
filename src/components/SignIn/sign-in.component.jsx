import React, { useState } from 'react';
import styled from '@emotion/styled';
import FormInput from '../FormInput/form-input.component';
import CustomButton from '../CustomButton/custom-button.component';
import ForgetPassword from '../ForgetPassword/forget-password.component';

const SignInWrapper = styled.div({
  width: '380px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const AccountTitle = styled.h2({
  color: '#2568b9',
  margin: '10px 0',
});

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  return (
    <SignInWrapper>
      <AccountTitle>I already have an account</AccountTitle>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChangeEmail}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChangePassword}
          label="password"
          required
        />
        <CustomButton type="submit"> Sign in </CustomButton>
      </form>
      <ForgetPassword />
    </SignInWrapper>
  );
};

export default SignIn;