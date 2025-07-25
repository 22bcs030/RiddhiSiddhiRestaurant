import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FestivalBanner from './FestivalBanner';
import Navbar from './Navbar';

const HeaderContainer = styled.header`
  position: ${props => props.fixed ? 'fixed' : 'relative'};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: var(--transition);
  background-color: ${props => props.scrolled ? 'rgba(255, 249, 240, 0.95)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? 'var(--box-shadow)' : 'none'};
  backdrop-filter: ${props => props.scrolled ? 'blur(8px)' : 'none'};
`;

const HeaderContent = styled.div`
  padding: ${props => props.scrolled ? '0.5rem 2rem' : '1rem 2rem'};
  transition: var(--transition);
  
  @media (max-width: 768px) {
    padding: ${props => props.scrolled ? '0.5rem 1rem' : '1rem'};
  }
`;

const Header = ({ fixed = false }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer fixed={fixed} scrolled={scrolled}>
      <FestivalBanner />
      <HeaderContent scrolled={scrolled} className="container">
        <Navbar />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 