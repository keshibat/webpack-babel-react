import React from 'react';
import styled from '@emotion/styled';

const CardWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  background: 'linear-gradient(90deg,rgb(77,40,180),rgba(50,145,255,0.8))',
  border: '1px solid grey',
  borderRadius: '10px',
  padding: '15px',
  cursor: 'pointer',
  mozOsxFontSmoothing: 'grayscale',
  backfaceVisibility: 'hidden',
  transform: 'translateZ(0)',
  transition: 'transform 0.25s ease-out',
  '&:hover': {
    background: 'linear-gradient(90deg,rgb(77,40,180),rgba(50,145,255,1))',
    transform: 'translateY(-20px)',
  },
});

const CardContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
});

const CardTitleContainer = styled.div({
  color: 'rgb(209,203,237)',
});

const CardImageContainer = styled.div({
  margin: '0 0 0 80px',
});

const Card = props => (
  <CardWrapper>
    <CardContainer>
      <CardTitleContainer>{props.stats.name}</CardTitleContainer>
      <CardImageContainer>
        <img src={props.stats.imageUrl} alt="icon mark" />
      </CardImageContainer>
    </CardContainer>
  </CardWrapper>
);

export default Card;
