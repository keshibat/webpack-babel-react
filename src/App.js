import React from 'react';
import styled from '@emotion/styled';

import Header from './components/Header/header.component.jsx';
import Footer from './components/Footer/footer.component.jsx';

const AppWrapper = styled.div({
  height: '120px',
  width: '100%',
  display: 'flex',
});

const Title = styled.h1({
fontSize: '40px',
});

const CardWrapper = styled.div({
  width: '300px',
  height: '400px',
  padding: '50px',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifContent: 'center',
  backgroundColor: 'lightblue',
});

const App = () => (
  <div>
    <Header />
    <AppWrapper>
      <CardWrapper>
        <Title>Our is working :)</Title>
      </CardWrapper>
    </AppWrapper>
    <Footer />
  </div>
);

export default App;
