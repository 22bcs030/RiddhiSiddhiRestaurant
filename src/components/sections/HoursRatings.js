import React from 'react';
import styled from 'styled-components';
import { FlexContainer, SectionWrapper, Badge, BadgeContainer } from '../../styles/StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faClock, faAward, faCheck } from '@fortawesome/free-solid-svg-icons';

const HoursRatingsContainer = styled(SectionWrapper)`
  background-color: #fff;
  position: relative;
  overflow: hidden;
  
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

const HoursSection = styled.div`
  flex: 1;
  padding: 2rem;
  border-radius: var(--border-radius);
  background-color: #FFF9F5;
  box-shadow: var(--box-shadow);
  
  h3 {
    position: relative;
    color: var(--primary-red);
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 70px;
      height: 3px;
      background: var(--gradient-primary);
    }
  }
  
  .hour-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    
    .day {
      font-weight: 600;
    }
    
    .time {
      color: var(--text-gray);
    }
    
    &.highlight {
      padding: 0.5rem;
      background-color: rgba(255, 215, 0, 0.1);
      border-radius: 5px;
      margin: 1rem 0;
    }
  }
`;

const RatingsSection = styled.div`
  flex: 2;
  
  h3 {
    position: relative;
    color: var(--primary-red);
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 70px;
      height: 3px;
      background: var(--gradient-primary);
    }
  }
`;

const RatingHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  
  .rating-number {
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--primary-red);
    margin-right: 1.5rem;
  }
  
  .rating-stars {
    color: var(--primary-gold);
    font-size: 1.5rem;
    letter-spacing: 3px;
  }
  
  .rating-count {
    margin-left: 1rem;
    color: var(--text-gray);
  }
`;

const TestimonialCard = styled.div`
  padding: 1.5rem;
  border-radius: var(--border-radius);
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
  position: relative;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .quote-icon {
    font-size: 1.5rem;
    color: rgba(211, 47, 47, 0.1);
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
  
  .testimonial-text {
    font-style: italic;
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    line-height: 1.6;
  }
  
  .testimonial-author {
    display: flex;
    align-items: center;
    
    .author-name {
      font-weight: 600;
    }
    
    .author-detail {
      font-size: 0.9rem;
      color: var(--text-gray);
    }
  }
  
  .rating-stars {
    margin-top: 0.5rem;
    color: var(--primary-gold);
  }
`;

const HoursRatings = () => {
  return (
    <HoursRatingsContainer>
      <div className="container">
        <FlexContainer gap="3rem" mobileDirection="column">
          <HoursSection>
            <h3>
              <FontAwesomeIcon icon={faClock} /> Opening Hours
            </h3>
            <div className="hour-row">
              <span className="day">Monday - Friday</span>
              <span className="time">10:00 AM - 9:00 PM</span>
            </div>
            <div className="hour-row">
              <span className="day">Saturday - Sunday</span>
              <span className="time">10:00 AM - 10:00 PM</span>
            </div>
            <div className="hour-row highlight">
              <span className="day">Food Service</span>
              <span className="time">11:00 AM onwards</span>
            </div>
            <p>* Last orders taken 30 minutes before closing time</p>
            
            <BadgeContainer>
              <Badge color="var(--primary-gold)">
                <FontAwesomeIcon icon={faCheck} /> Dine-in
              </Badge>
              <Badge color="var(--primary-red)" textColor="var(--text-light)">
                <FontAwesomeIcon icon={faCheck} /> Takeaway
              </Badge>
              <Badge color="var(--primary-purple)" textColor="var(--text-light)">
                <FontAwesomeIcon icon={faCheck} /> Delivery
              </Badge>
            </BadgeContainer>
          </HoursSection>
          
          <RatingsSection>
            <h3>
              <FontAwesomeIcon icon={faAward} /> Customer Ratings
            </h3>
            <RatingHeader>
              <div className="rating-number">4.8</div>
              <div>
                <div className="rating-stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} style={{ opacity: 0.5 }} />
                </div>
                <div className="rating-count">Based on 500+ reviews</div>
              </div>
            </RatingHeader>
            
            <TestimonialCard>
              <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              <p className="testimonial-text">
                "The best Indian sweets I've ever had! Their Gulab Jamun is absolutely divine and 
                the service is always warm and welcoming. A must-visit for anyone with a sweet tooth!"
              </p>
              <div className="testimonial-author">
                <div>
                  <p className="author-name">Priya Sharma</p>
                  <p className="author-detail">Regular Customer</p>
                  <div className="rating-stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
              </div>
            </TestimonialCard>
            
            <TestimonialCard>
              <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              <p className="testimonial-text">
                "Riddhi Siddhi's thali is a complete meal experience. The flavors are authentic, 
                portion size is generous, and everything tastes homemade. Their custom cakes for 
                special occasions are also exceptional!"
              </p>
              <div className="testimonial-author">
                <div>
                  <p className="author-name">Rahul Patel</p>
                  <p className="author-detail">Food Blogger</p>
                  <div className="rating-stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
              </div>
            </TestimonialCard>
          </RatingsSection>
        </FlexContainer>
      </div>
    </HoursRatingsContainer>
  );
};

export default HoursRatings; 