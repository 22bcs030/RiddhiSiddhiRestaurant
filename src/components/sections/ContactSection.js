import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import CommentForm from '../comments/CommentForm';

const ContactSectionContainer = styled.div`
  padding: 4rem 0;
  background-color: var(--background-dark);
  color: var(--text-light);
`;

const ContactSectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  color: var(--primary-gold);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--gradient-primary);
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  svg {
    color: var(--primary-gold);
    font-size: 1.5rem;
    margin-top: 0.2rem;
  }
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  
  h4 {
    margin: 0 0 0.5rem 0;
    color: var(--primary-gold);
  }
  
  p {
    margin: 0;
  }
  
  a {
    color: var(--text-light);
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-gold);
    }
  }
`;

const ContactFormSection = styled.div`
  h3 {
    color: var(--primary-gold);
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 2rem;
  }
`;

const ContactSection = () => {
  return (
    <ContactSectionContainer id="contact">
      <ContactSectionContent>
        <SectionTitle>Get In Touch</SectionTitle>
        <ContactGrid>
          <ContactInfo>
            <h3>Contact Information</h3>
            <p>We'd love to hear from you! Reach out to us with any questions, suggestions, or feedback.</p>
            
            <ContactItem>
              <FontAwesomeIcon icon={faMapMarkerAlt} aria-hidden="true" />
              <ContactText>
                <h4>Address</h4>
                <p>Dandi bazar gola kauriram road, Gorakhpur</p>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
              <ContactText>
                <h4>Phone</h4>
                <p><a href="tel:+919198666063">+91 9198666063</a></p>
                <p><a href="tel:+919956660600">+91 99566 60600</a></p>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              <ContactText>
                <h4>Email</h4>
                <p><a href="mailto:Chandusingh6465@gmail.com">Chandusingh6465@gmail.com</a></p>
              </ContactText>
            </ContactItem>
          </ContactInfo>
          
          <ContactFormSection>
            <h3>Leave a Comment</h3>
            <p>We value your feedback! Use the form below to share your thoughts with us.</p>
            <CommentForm />
          </ContactFormSection>
        </ContactGrid>
      </ContactSectionContent>
    </ContactSectionContainer>
  );
};

export default ContactSection;
