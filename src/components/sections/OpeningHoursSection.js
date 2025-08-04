import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheck } from '@fortawesome/free-solid-svg-icons';
import { SectionWrapper, Badge, BadgeContainer } from '../../styles/StyledComponents';

const OpeningHoursSectionContainer = styled(SectionWrapper)`
  background-color: #fff;
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
  max-width: 1000px;
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

// We don't need the HoursContainer styled component anymore since we use a div with inline styles

const HoursSection = styled.div`
  padding: 2rem;
  border-radius: var(--border-radius);
  background-color: #FFF9F5;
  box-shadow: var(--box-shadow);
  border-left: 4px solid var(--primary-red);
  
  h3 {
    position: relative;
    color: var(--primary-red);
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    
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

const OpeningHoursSection = () => {
  return (
    <OpeningHoursSectionContainer>
      <ContentWrapper>
        <SectionTitle>Our Opening Hours</SectionTitle>
        
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <HoursSection>
            <h3>
              <FontAwesomeIcon icon={faClock} style={{ marginRight: '10px', color: 'var(--primary-gold)' }} /> 
              Opening Hours
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
        </div>
      </ContentWrapper>
    </OpeningHoursSectionContainer>
  );
};

export default OpeningHoursSection;
