import React from 'react';
import styled from 'styled-components';
import { SectionWrapper } from '../../styles/StyledComponents';
import RestaurantReviewForm from '../comments/RestaurantReviewForm';
import CustomerRatings from './CustomerRatings';

const ReviewsSectionContainer = styled(SectionWrapper)`
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23D32F2F' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.4;
    z-index: -1;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: var(--primary-red);
  margin-bottom: 3rem;
  font-size: 2.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--gradient-primary);
  }
`;

const ReviewsLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ReviewFormContainer = styled.div`
  align-self: start;
  position: sticky;
  top: 20px;
  height: 100%;
`;

const RatingsContainer = styled.div`
  height: 100%;
  overflow-y: auto;
  
  /* Ensure the ratings section matches the height of the form */
  & > div {
    height: 100%;
  }
  
  /* Grid layout for testimonials */
  .testimonials-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--primary-gold);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #d4af37;
  }
`;

const ReviewsSection = () => {
  return (
    <ReviewsSectionContainer>
      <ContentWrapper>
        <SectionTitle>Share Your Experience</SectionTitle>
        
        <ReviewsLayout>
          <ReviewFormContainer>
            <RestaurantReviewForm />
          </ReviewFormContainer>
          
          <RatingsContainer>
            {/* Customer ratings shown after the review form */}
            <CustomerRatings showContainerOnly={false} />
          </RatingsContainer>
        </ReviewsLayout>
      </ContentWrapper>
    </ReviewsSectionContainer>
  );
};

export default ReviewsSection;
