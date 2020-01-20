import React from 'react';
import styled from '@emotion/styled';

const HomePageWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const HomePage = () => (
  <HomePageWrapper>
    <h1>Home Page</h1>
  </HomePageWrapper>
);

export default HomePage;
