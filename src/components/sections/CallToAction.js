import React from 'react';
import styled from 'styled-components';
import { Button } from '../../styles/StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faUtensils } from '@fortawesome/free-solid-svg-icons';

const CtaContainer = styled.section`
  background: var(--gradient-secondary);
  padding: 5rem 0;
  color: var(--text-light);
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    opacity: 0.1;
    background-color: #fff;
  }
  
  &:before {
    top: -150px;
    left: -150px;
  }
  
  &:after {
    bottom: -150px;
    right: -150px;
  }
`;

const CtaContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const CtaButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2.5rem 0;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .btn.primary {
    background: #fff;
    color: var(--primary-purple);
    
    &:hover {
      background: var(--primary-gold);
      color: var(--text-dark);
    }
  }
  
  .btn.secondary {
    border-color: #fff;
    color: #fff;
    
    &:hover {
      background: #fff;
      color: var(--primary-purple);
    }
  }
`;

const OfferContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const OfferItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.1rem;
  
  svg {
    font-size: 1.5rem;
    color: var(--primary-gold);
  }
`;

const DottedDivider = styled.div`
  border-top: 3px dotted rgba(255, 255, 255, 0.2);
  margin: 3rem 0;
`;

const CallToAction = () => {
  return (
    <CtaContainer id="contact">
      <div className="container">
        <CtaContent>
          <h2>Ready to Experience Authentic Indian Cuisine?</h2>
          <p>
            Enjoy the rich and flavorful dishes from our kitchen, crafted with love and tradition.
            Order online for a convenient dining experience or book a table for a memorable meal.
          </p>
          
          <CtaButtons>
            <Button className="primary">Order Online</Button>
            <Button className="secondary">Book a Table</Button>
          </CtaButtons>
          
          <DottedDivider />
          
          <OfferContainer>
            <OfferItem>
              <FontAwesomeIcon icon={faTruck} />
              <span>Free Delivery on orders above ₹500</span>
            </OfferItem>
            <OfferItem>
              <FontAwesomeIcon icon={faUtensils} />
              <span>Catering Services Available</span>
            </OfferItem>
          </OfferContainer>
        </CtaContent>
      </div>
    </CtaContainer>
  );
};

export default CallToAction; 