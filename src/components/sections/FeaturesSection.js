import React from 'react';
import styled from 'styled-components';
import { SectionTitle, SectionWrapper, GridContainer } from '../../styles/StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCandyCane, 
  faBirthdayCake, 
  faUtensils, 
  faHamburger 
} from '@fortawesome/free-solid-svg-icons';

const FeaturesContainer = styled(SectionWrapper)`
  background-color: #fff;
  text-align: center;
`;

const FeatureCard = styled.div`
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  padding: 3rem 2rem;
  transition: var(--transition);
  box-shadow: var(--box-shadow);
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    
    .icon {
      color: var(--primary-red);
      transform: scale(1.2);
    }
    
    &:before {
      transform: scale(1.1);
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%23FFD700' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    z-index: -1;
    transition: var(--transition);
  }
  
  h3 {
    margin: 1.5rem 0 1rem;
    color: var(--primary-red);
  }
  
  p {
    color: var(--text-gray);
  }
  
  .icon {
    font-size: 3rem;
    color: var(--primary-gold);
    transition: var(--transition);
  }
`;

const features = [
  {
    icon: faCandyCane,
    title: 'Sweets & Desserts',
    description: 'Traditional Indian sweets made with pure ingredients and age-old recipes.',
  },
  {
    icon: faBirthdayCake,
    title: 'Custom Cakes',
    description: 'Beautifully crafted cakes for all occasions, customized to your taste.',
  },
  {
    icon: faUtensils,
    title: 'Traditional Foods',
    description: 'Authentic Indian cuisine prepared with traditional methods and spices.',
  },
  {
    icon: faHamburger,
    title: 'Fast Foods',
    description: 'Quick and delicious Indian street food favorites with a modern twist.',
  },
];

const FeaturesSection = () => {
  return (
    <FeaturesContainer id="menu">
      <div className="container">
        <SectionTitle>Our Specialties</SectionTitle>
        <GridContainer columns={4} tabletColumns={2} mobileColumns={1} gap="2rem">
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FontAwesomeIcon icon={feature.icon} className="icon" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </GridContainer>
      </div>
    </FeaturesContainer>
  );
};

export default FeaturesSection; 