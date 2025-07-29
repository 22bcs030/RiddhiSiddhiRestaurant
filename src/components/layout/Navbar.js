import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../styles/StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logoImage from '../../assets/images/IMG_0713.JPG';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  @media (max-width: 992px) {
    position: relative;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  .logo-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--primary-gold);
  }

  h1 {
    font-size: 2rem;
    margin: 0;
    background: var(--gradient-secondary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }
  
  p {
    font-size: 0.9rem;
    margin: 0;
    color: var(--primary-red);
    font-style: italic;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
    
    .logo-image {
      width: 40px;
      height: 40px;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: 992px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background: var(--background-light);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 100;
    transition: right 0.3s ease;
    box-shadow: ${props => props.isOpen ? '-5px 0 15px rgba(0, 0, 0, 0.1)' : 'none'};
  }
`;

const NavItem = styled.li`
  a {
    color: var(--text-dark);
    font-weight: 500;
    padding: 0.5rem;
    position: relative;
    text-decoration: none;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--gradient-primary);
      transition: width 0.3s ease;
    }
    
    &:hover:after, &.active:after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--primary-red);
  cursor: pointer;
  z-index: 101;
  
  @media (max-width: 992px) {
    display: block;
  }
`;

const OrderButton = styled(Button)`
  @media (max-width: 992px) {
    display: none;
  }
`;

const ContactPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  z-index: 200;
  text-align: center;
  max-width: 90%;
  width: 320px;
  
  h3 {
    margin-top: 0;
    color: var(--primary-red);
  }
  
  p {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 1rem 0;
  }
  
  button {
    margin-top: 1rem;
    background: var(--primary-gold);
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s;
    
    &:hover {
      background: var(--primary-red);
      color: white;
    }
  }
`;

const MobileOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  // eslint-disable-next-line no-unused-vars
  const [scrolled, setScrolled] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const location = useLocation();

  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update active link based on current path
    if (location.pathname === '/') {
      setActiveLink('home');
    } else if (location.pathname === '/menu') {
      setActiveLink('menu');
    }
    
    // Scroll to the top of the page when navigating to a different page
    window.scrollTo(0, 0);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <>
      <NavContainer>
        <Logo>
          <img src={logoImage} alt="Riddhi Siddhi Logo" className="logo-image" />
          <div>
            <h1>Riddhi Siddhi</h1>
            <p>Dairy Sweets and Bakers</p>
          </div>
        </Logo>
        
        <MobileMenuButton onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </MobileMenuButton>
        
        <NavLinks isOpen={isMenuOpen}>
          <NavItem>
            <Link 
              to="/" 
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link 
              to="/menu" 
              className={activeLink === 'menu' ? 'active' : ''}
              onClick={() => handleLinkClick('menu')}
            >
              Menu
            </Link>
          </NavItem>
          <NavItem>
            <a 
              href="/#about" 
              className={activeLink === 'about' ? 'active' : ''}
              onClick={() => handleLinkClick('about')}
            >
              About
            </a>
          </NavItem>
          <NavItem>
            <a 
              href="/#specials" 
              className={activeLink === 'specials' ? 'active' : ''}
              onClick={() => handleLinkClick('specials')}
            >
              Specials
            </a>
          </NavItem>
          <NavItem>
            <a 
              href="/#contact" 
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </a>
          </NavItem>
        </NavLinks>
        
        <OrderButton className="primary" onClick={() => setShowContactPopup(true)}>Order Now</OrderButton>
      </NavContainer>
      <MobileOverlay isOpen={isMenuOpen} onClick={toggleMenu} />
      
      {showContactPopup && (
        <>
          <MobileOverlay isOpen={true} onClick={() => setShowContactPopup(false)} />
          <ContactPopup>
            <h3>Contact Us to Order</h3>
            <p>+91 9956660600</p>
            <button onClick={() => setShowContactPopup(false)}>Close</button>
          </ContactPopup>
        </>
      )}
    </>
  );
};

export default Navbar; 