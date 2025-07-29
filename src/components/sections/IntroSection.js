import React from 'react';
import styled from 'styled-components';
import { SectionTitle, SectionWrapper, Divider } from '../../styles/StyledComponents';
import { interiorImage } from '../../assets/images';

const IntroContainer = styled(SectionWrapper)`
  background-color: var(--background-light);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='50' viewBox='0 0 100 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 L50 0 L100 50 Z' fill='%23FFF'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
    z-index: 2;
  }
`;

const IntroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const IntroText = styled.div`
  position: relative;
  
  h2 {
    color: var(--primary-red);
    margin-bottom: 2rem;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  
  &:before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C27B0' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
    top: -30px;
    left: -30px;
    z-index: -1;
    opacity: 0.7;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: 30px;
    bottom: 30px;
    border: 5px solid var(--primary-gold);
    z-index: 1;
  }
  
  img {
    width: 100%;
    border-radius: 8px;
    position: relative;
    box-shadow: var(--box-shadow);
    z-index: 2;
  }
`;

const Highlight = styled.span`
  color: var(--primary-red);
  font-weight: 600;
`;

const IntroSection = () => {
  return (
    <IntroContainer id="about">
      <div className="container">
        <IntroContent>
          <IntroText>
            <SectionTitle>Welcome to Riddhi Siddhi Dairy Sweets and Bakers</SectionTitle>
            <p>
              Step into a world of <Highlight>authentic Indian flavors</Highlight> where tradition meets innovation. 
              Our chefs bring generations of culinary expertise to create unforgettable dining experiences.
            </p>
            <p>
              From traditional sweets to modern fusion dishes, every bite tells a story of 
              <Highlight> India's rich culinary heritage</Highlight>. We use only the finest ingredients 
              to ensure an authentic and memorable dining experience.
            </p>
            <p>
              Whether you're craving our famous sweets, traditional meals, or fast-food favorites, 
              Riddhi Siddhi offers a taste of India that will transport you to the streets of Mumbai, 
              the royal kitchens of Rajasthan, and the coastal flavors of Kerala.
            </p>
          </IntroText>
          
          <ImageContainer>
            <img src={interiorImage} alt="Riddhi Siddhi Restaurant Interior" />
          </ImageContainer>
        </IntroContent>
      </div>
      <Divider />
    </IntroContainer>
  );
};

export default IntroSection; 