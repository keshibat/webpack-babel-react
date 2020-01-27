import React from 'react';
import styled from '@emotion/styled';
import logo from '../../assets/logo.png';
import themeIcon from '../../assets/themeIcon.png';
import langIcon from '../../assets/langIcon.png';

const HeaderWrapper = styled.div({
  height: '65px',
  width: '100%',
  backgroundColor: 'rgb(33,31,60)',
  display: 'flex',
});

const HeaderContainer = styled.div({
  height: '65px',
  padding: '20px',
  width: '80%',
  borderBottom: 'solid 1px rgba(255,255,255,.2)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto',
});

const LogoContainer = styled.div({});

const IconContainer = styled.div({});


const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt="company logo" />
      </LogoContainer>
      <IconContainer>
        <img src={themeIcon} alt="theme icon" />
        <img src={langIcon} alt="language icon" style={{ margin: '0 0 0 15px' }} />
      </IconContainer>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
