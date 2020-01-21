import React from 'react';
import styled from '@emotion/styled';

const SignPasswordContainer = styled.div({
  marginRight: '5px',
  marginTop: '-10px',
  display: 'flex',
  flexDirection: 'column',
});

const ForgetPasswordContainer = styled.div({
  height: '10%',
});

const TextOne = styled.p({
  textAlign: 'center',
  color: '#545284',
});

const SubForgetPasswordContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  marginTop: '-30px',
});

const NotRegistedContainer = styled.div({
  display: 'flex',
});

const TextTwo = styled.p({
  textAlign: 'center',
  color: '#545284',
});

const SignupLink = styled.div({
  marginLeft: '5px',
});

const TextThree = styled.p({
  color: 'rgb(37,104,185)',
  borderBottom: 'solid 0.5px',
});

const ForgetPassword = () => (
  <SignPasswordContainer>
    <ForgetPasswordContainer>
      <TextOne>Forget Password?</TextOne>
    </ForgetPasswordContainer>
    <SubForgetPasswordContainer>
      <NotRegistedContainer>
        <TextTwo>Not registerd yet?</TextTwo>
      </NotRegistedContainer>
      <SignupLink>
        <TextThree>Sign up</TextThree>
      </SignupLink>
    </SubForgetPasswordContainer>
  </SignPasswordContainer>
);

export default ForgetPassword;