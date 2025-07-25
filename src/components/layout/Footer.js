import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faInstagram, 
  faTwitter, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background-color: var(--background-dark);
  color: var(--text-light);
  padding: 4rem 0 0;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: var(--gradient-primary);
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: var(--primary-gold);
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 50px;
      height: 2px;
      background: var(--primary-red);
    }
  }
  
  ul {
    padding: 0;
    list-style: none;
    
    li {
      margin-bottom: 0.8rem;
      
      a {
        color: var(--text-light);
        transition: var(--transition);
        display: inline-block;
        
        &:hover {
          color: var(--primary-gold);
          transform: translateX(5px);
        }
      }
    }
  }
  
  p {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    
    svg {
      color: var(--primary-gold);
      margin-right: 10px;
      min-width: 16px;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--primary-red);
    color: var(--text-light);
    transition: var(--transition);
    
    &:hover {
      background: var(--primary-gold);
      color: var(--text-dark);
      transform: translateY(-3px);
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  margin-top: 3rem;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 1px;
    background-image: linear-gradient(to right, transparent, var(--primary-gold), transparent);
  }
  
  p {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-gray);
  }
`;

const DecorationImage = styled.div`
  position: absolute;
  opacity: 0.1;
  width: 150px;
  height: 150px;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15z' fill='%23FFD700' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  z-index: 0;
  
  &.top-left {
    top: 50px;
    left: 50px;
  }
  
  &.bottom-right {
    bottom: 50px;
    right: 50px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <DecorationImage className="top-left" />
      <DecorationImage className="bottom-right" />
      <div className="container">
        <FooterContent>
          <FooterSection>
            <h3>Contact Us</h3>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              123 Main Street, City, State
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} />
              +91 1234567890
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              info@riddhisiddhi.com
            </p>
          </FooterSection>
          
          <FooterSection>
            <h3>Opening Hours</h3>
            <p>
              <FontAwesomeIcon icon={faClock} />
              Monday - Sunday
            </p>
            <p>
              <FontAwesomeIcon icon={faClock} />
              10:00 AM - 9:00 PM
            </p>
            <p>
              <FontAwesomeIcon icon={faClock} />
              Food Service: 11:00 AM - 9:00 PM
            </p>
          </FooterSection>
          
          <FooterSection>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#specials">Special Offers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>Follow Us</h3>
            <p>Stay connected with us on social media for updates and offers.</p>
            <SocialIcons>
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            </SocialIcons>
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
          <p>&copy; {new Date().getFullYear()} Riddhi Siddhi Sweets & Restaurant. All Rights Reserved.</p>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

export default Footer; 