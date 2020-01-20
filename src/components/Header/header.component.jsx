import React from 'react';
import styled from '@emotion/styled';
// import { ReactComponent as Logo } from '../../assets/classiii-logo.svg';
// import { ReactComponent as ThemeIcon } from '../../assets/theme-icon.svg';
// import { ReactComponent as LangIcon } from '../../assets/lang-icon.svg';

const HeaderWrapper = styled.div({
  height: '120px',
  width: '100%',
  backgroundColor: 'rgb(18,18,44)',
  display: 'flex',
});

const HeaderContainer = styled.div({
  height: '60px',
  padding: '20px',
  width: '80%',
  borderBottom: 'solid 1px rgba(255,255,255,.2)',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '0 auto',
});

const LogoContainer = styled.div({
  minWidth: '250px',
  marginLeft: '-50px',
  display: 'flex',
});

const CompanyName = styled.h3({
  color: 'white',
  margin: '32px 0 0 -10px',
});

const IconContainer = styled.div({
  minWidth: '200px',
  marginLeft: '788px',
  marginTop: '10px',
  display: 'flex',
});

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <LogoContainer>
   
        <CompanyName> CLASSIII API</CompanyName>
      </LogoContainer>
      <IconContainer>
   
   
      </IconContainer>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
