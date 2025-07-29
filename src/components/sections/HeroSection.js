import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../styles/StyledComponents';
import { heroImage } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faTimes } from '@fortawesome/free-solid-svg-icons';

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
  width: 100%;
  
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
  padding: 0 1rem;
  z-index: 1;
  animation: fadeIn 1.5s ease;
  width: 95%; /* Ensures content has enough width on mobile */
  
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
      margin-bottom: 1rem;
    }
    
    @media (max-width: 576px) {
      font-size: 2.5rem;
      margin-bottom: 0.8rem;
    }
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 768px) {
      margin-bottom: 2rem;
    }
    
    @media (max-width: 576px) {
      margin-bottom: 1.8rem;
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
  display: block;
  padding: 0 10px;
  position: relative;
  margin-bottom: 20px;
  
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
  display: block;
  margin: 10px auto 30px;
  padding: 0 10px;
  white-space: nowrap; /* Prevents text from wrapping to next line */
  overflow: visible; /* Ensures text doesn't get cut off */
  
  &:before, &:after {
    content: '❈';
    position: relative;
    color: var(--primary-gold);
    margin: 0 10px;
    font-size: 1rem;
    top: -5px;
  }
  
  @media (max-width: 768px) {
    margin: 5px auto 20px;
    font-size: 1.3rem !important; /* Override parent font size */
  }
  
  @media (max-width: 576px) {
    margin: 0 auto 15px;
    font-size: 1.1rem !important; /* Smaller font on smallest screens */
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
  z-index: 2000;
  text-align: center;
  max-width: 90%;
  width: 320px;
  
  h3 {
    margin-top: 0;
    color: var(--primary-red);
    font-size: 1.5rem;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    font-size: 1.2rem;
    color: var(--text-dark);
    
    svg {
      margin-right: 10px;
      color: var(--primary-gold);
    }
  }
  
  .phone-numbers {
    margin: 1rem 0;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: var(--text-dark);
    
    &:hover {
      color: var(--primary-red);
    }
  }
  
  .action-button {
    margin-top: 1rem;
    background: var(--primary-gold);
    border: none;
    padding: 0.6rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
    color: var(--text-dark);
    
    &:hover {
      background: var(--primary-red);
      color: white;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1999;
`;

const HeroSection = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  
  // Function to scroll to contact section with improved reliability
  const scrollToContact = () => {
    // Show popup on mobile devices or when on a different page
    if (window.innerWidth < 768 || window.location.pathname !== '/') {
      setShowContactPopup(true);
      return;
    }
    
    // On larger screens on homepage, try to scroll to contact section
    const contactSection = document.getElementById('contact');
    
    if (contactSection) {
      // If we found it, scroll to it smoothly
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Add focus for accessibility
      setTimeout(() => {
        contactSection.setAttribute('tabindex', '-1');
        contactSection.focus({ preventScroll: true });
      }, 1000);
    } else {
      // If we couldn't find the contact section, show the popup as fallback
      setShowContactPopup(true);
    }
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroContent>
          <GradientTitle>Riddhi Siddhi</GradientTitle>
          <Subtitle className="nowrap">Dairy Sweets and Bakers</Subtitle>
          <HeroButtons>
            <Button as={Link} to="/menu" className="primary">View Menu</Button>
            <Button className="secondary" onClick={scrollToContact}>Contact Us</Button>
          </HeroButtons>
        </HeroContent>
      </HeroContainer>
      
      {showContactPopup && (
        <>
          <Overlay onClick={() => setShowContactPopup(false)} />
          <ContactPopup>
            <button className="close-button" onClick={() => setShowContactPopup(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            
            <h3>Contact Us</h3>
            
            <div className="phone-numbers">
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} /> +91 9956660600
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} /> 9198666063
              </div>
            </div>
            
            <button 
              className="action-button"
              onClick={() => {
                setShowContactPopup(false);
                if (window.location.pathname === '/') {
                  // On home page, attempt to scroll to contact
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      behavior: 'smooth'
                    });
                  }
                } else {
                  // On other pages, go to home page contact section
                  window.location.href = '/#contact';
                }
              }}
            >
              View Full Contact Info
            </button>
          </ContactPopup>
        </>
      )}
    </>
  );
};

export default HeroSection; 