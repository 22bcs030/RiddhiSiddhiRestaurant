import React from 'react';
import styled from 'styled-components';
import { Button } from '../../styles/StyledComponents';
import { heroImage } from '../../assets/images';

const HeroContainer = styled.section`
  height: 100vh;
  min-height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding-top: 80px;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.bgImage || heroImage});
    background-size: cover;
    background-position: center;
    filter: brightness(0.7);
    z-index: -1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7));
    z-index: -1;
  }
`;

const HeroContent = styled.div`
  color: var(--text-light);
  max-width: 800px;
  padding: 0 2rem;
  z-index: 1;
  animation: fadeIn 1.5s ease;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  h1 {
    font-size: 4.5rem;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 768px) {
      font-size: 3rem;
    }
    
    @media (max-width: 576px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
    width: 80%;
    margin: 0 auto;
  }
`;

const GradientTitle = styled.h1`
  background-image: linear-gradient(135deg, var(--primary-gold), var(--text-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
  padding: 0 10px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--primary-gold);
    transform: scaleX(0.7);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--primary-gold);
    transform: scaleX(0.7);
  }
`;

const Subtitle = styled.p`
  position: relative;
  display: inline-block;
  
  &:before, &:after {
    content: '❈';
    position: relative;
    color: var(--primary-gold);
    margin: 0 10px;
    font-size: 1rem;
    top: -5px;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <GradientTitle>Riddhi Siddhi</GradientTitle>
        <Subtitle>Experience the Authentic Taste of India</Subtitle>
        <HeroButtons>
          <Button className="primary">View Menu</Button>
          <Button className="secondary">Book a Table</Button>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection; 