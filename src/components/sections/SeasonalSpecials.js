import React from 'react';
import styled from 'styled-components';
import { SectionTitle, SectionWrapper } from '../../styles/StyledComponents';

const SpecialsContainer = styled(SectionWrapper)`
  background-color: var(--background-light);
  text-align: center;
  padding: 5rem 0;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D32F2F' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
    z-index: -1;
  }
`;

const SpecialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 3rem auto 0;
  }
`;

const SpecialCard = styled.div`
  height: 350px;
  perspective: 1000px;
  cursor: pointer;
  
  &:hover .card-inner {
    transform: rotateY(180deg);
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const CardFront = styled(CardSide)`
  background: ${props => props.bgColor || 'linear-gradient(135deg, var(--primary-red), var(--primary-purple))'};
  color: var(--text-light);
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 3px;
      background-color: var(--primary-gold);
    }
  }
  
  p {
    font-size: 1.1rem;
    margin-top: 1rem;
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

const CardBack = styled(CardSide)`
  background-color: #fff;
  color: var(--text-dark);
  transform: rotateY(180deg);
  
  p {
    text-align: center;
    line-height: 1.8;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .price {
    display: inline-block;
    background-color: var(--primary-gold);
    color: var(--text-dark);
    padding: 0.5rem 1.5rem;
    border-radius: 30px;
    font-weight: 600;
    margin-top: 1rem;
  }
`;

const Label = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${props => props.bgColor || 'var(--primary-gold)'};
  color: ${props => props.textColor || 'var(--text-dark)'};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  z-index: 1;
`;

const SeasonalSpecials = () => {
  const specials = [
    {
      title: 'Spring Special',
      subtitle: 'Fresh seasonal sweets',
      description: 'Indulge in our special spring collection featuring delightful sweets made with seasonal fruits and flowers. Try our mango-infused desserts and rose-flavored treats.',
      bgColor: 'linear-gradient(135deg, #FF9A8B, #FF6A88)',
      label: 'Limited Time',
      labelColor: '#FF6A88',
      price: '₹299 onwards',
    },
    {
      title: 'Summer Delight',
      subtitle: 'Cooling desserts',
      description: 'Beat the heat with our refreshing summer special desserts and drinks. Our chilled thandai, kulfi platters, and fruity delights are summer favorites.',
      bgColor: 'linear-gradient(135deg, #43C6AC, #191654)',
      label: 'Best Seller',
      labelColor: '#43C6AC',
      price: '₹249 onwards',
    },
    {
      title: 'Festival Special',
      subtitle: 'Traditional treats',
      description: 'Celebrate festivals with our special collection of traditional sweets and snacks. Pre-order our festival gift boxes for your loved ones and enjoy special discounts.',
      bgColor: 'linear-gradient(135deg, #9733EE, #DA22FF)',
      label: 'Pre-Order',
      labelColor: '#DA22FF',
      price: '₹499 onwards',
    },
  ];

  return (
    <SpecialsContainer id="specials">
      <div className="container">
        <SectionTitle>Seasonal Specials</SectionTitle>
        <p>Discover our limited-time seasonal offerings prepared with fresh ingredients and traditional recipes.</p>
        
        <SpecialsGrid>
          {specials.map((special, index) => (
            <SpecialCard key={index}>
              <CardInner className="card-inner">
                <CardFront bgColor={special.bgColor}>
                  <Label bgColor={special.labelColor} textColor="#FFF">{special.label}</Label>
                  <h3>{special.title}</h3>
                  <p>{special.subtitle}</p>
                  <p className="hint">(Hover to see details)</p>
                </CardFront>
                <CardBack>
                  <h3>{special.title}</h3>
                  <p>{special.description}</p>
                  <span className="price">{special.price}</span>
                </CardBack>
              </CardInner>
            </SpecialCard>
          ))}
        </SpecialsGrid>
      </div>
    </SpecialsContainer>
  );
};

export default SeasonalSpecials; 