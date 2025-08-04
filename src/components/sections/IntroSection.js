import React from 'react';
import styled from 'styled-components';
import { SectionTitle, SectionWrapper, Divider } from '../../styles/StyledComponents';
import { interiorImage } from '../../assets/images';

const IntroContainer = styled(SectionWrapper)`
  background-color: var(--background-light);
  position: relative;
  overflow: hidden;
  
  .container {
    @media (max-width: 480px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  
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
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
    padding: 0 0.5rem;
  }
  
  @media (min-width: 1200px) {
    max-width: 1100px;
    margin: 0 auto;
  }
`;

const IntroText = styled.div`
  position: relative;
  
  h2 {
    color: var(--primary-red);
    margin-bottom: 1.8rem;
    font-size: 2.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.8rem;
      margin-bottom: 1.2rem;
    }
  }
  
  p {
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 1.2rem;
    text-align: justify;
    
    /* Style for the single paragraph format */
    &:only-of-type {
      margin-bottom: 0;
      letter-spacing: 0.01em;
    }
    
    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.7;
    }
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
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary-gold), transparent);
  }
`;

const IntroSection = () => {
  return (
    <IntroContainer id="about">
      <div className="container">
        <IntroContent>
          <IntroText>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <SectionTitle>Our Story</SectionTitle>
            </div>
            <p>
              In 2023, amidst the lively streets of Gola Kauriram Road in Gorakhpur, <Highlight>Riddhi Siddhi Restaurant</Highlight> was born—a dream crafted with love.
              More than just a place to eat, it's where food is celebrated and every meal carries the blessings of <Highlight>Riddhi</Highlight> (Prosperity) and <Highlight>Siddhi</Highlight> (Perfection).
              From day one, Riddhi Siddhi became a beloved part of Gorakhpur. Families gather, friends make memories, and guests feel at home. Our warm ambiance and heartfelt hospitality turn each visit into a joyful experience.
              Blending rich Indian traditions with local ingredients, our kitchen serves everything from aromatic veg biryanis to soulful vegetarian feasts. Flavors here aren't just tasted—they're <Highlight>felt</Highlight>.
              What truly sets us apart is not just our sweets, bakery items, and food, but the people—the laughter of our guests, the dedication of our team, and the countless moments shared within these walls.
              At Riddhi Siddhi, every plate tells a story—of flavor, tradition, and <Highlight>Gorakhpur's culinary pride</Highlight>.
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