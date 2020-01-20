import React from 'react';
import styled from '@emotion/styled';
import SignIn from '../../components/SignIn/sign-in.component';

const SignPageWrapper = styled.div({
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  background: 'rgb(18,18,44)',
});

const SignInPage = () => (
  <SignPageWrapper>
    <SignIn />
  </SignPageWrapper>
);

export default SignInPage;
