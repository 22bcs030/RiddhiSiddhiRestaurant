import styled from 'styled-components';

export const Button = styled.button`
  padding: ${props => props.small ? '0.5rem 1.2rem' : '0.8rem 2rem'};
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: ${props => props.small ? '0.9rem' : '1.1rem'};
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  box-shadow: var(--box-shadow);
  
  &:hover {
    transform: translateY(-3px);
  }

  &.primary {
    background: var(--gradient-primary);
    color: var(--text-light);
    
    &:hover {
      background: linear-gradient(135deg, var(--secondary-red), var(--secondary-gold));
    }
  }
  
  &.secondary {
    background: transparent;
    border: 2px solid var(--primary-gold);
    color: var(--primary-red);
    
    &:hover {
      background-color: var(--primary-gold);
      color: var(--text-dark);
    }
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  font-size: 2.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--gradient-primary);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    
    &::after {
      width: 60px;
      bottom: -8px;
    }
  }
`;

export const SectionWrapper = styled.section`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-image: linear-gradient(to right, transparent, var(--primary-gold), transparent);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-image: linear-gradient(to right, transparent, var(--primary-gold), transparent);
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 2rem;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'space-between'};
  flex-wrap: ${props => props.wrap || 'wrap'};
  gap: ${props => props.gap || '1rem'};
  flex-direction: ${props => props.direction || 'row'};
  
  @media (max-width: 768px) {
    flex-direction: ${props => props.mobileDirection || props.direction || 'column'};
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  gap: ${props => props.gap || '2rem'};
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(${props => props.tabletColumns || 2}, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(${props => props.mobileColumns || 1}, 1fr);
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 30px;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264.888-.14 1.652-1.1 2.782.14 5.11-1.41 2.345-1.56 1.186-2.9 2.685-4.54 1.5-1.63 3.75-3.13 3.75 2.41 0 0-1 2.83-1 2.83l-2.808 2.83c-.7.7-1.37.7-2.06 0L21.185 20zM73.882 20c-.414-.414-3.32-3.32-3.32-3.32l-.034-.035c-.543-.538-.88-1.028-.982-1.496-.01-.038-.018-.077-.026-.115-1.03-4.563 3.334-2.48 2.096-4.85-1.11-2.114-3.124-3.07-1.284-4.906C72.155 3.458 78.04 3.03 78.04 10.03c0 0-1 2.83-1 2.83l-2.72 2.716c-.7.7-1.37.7-2.07 0l-1.75-1.757 1.756 1.76 1.624 1.625c.7.7.7 1.37 0 2.07l-2.998 2.995z' fill='%23FFD700' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
  margin: 2rem 0;
`;

export const BadgeContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const Badge = styled.span`
  background: ${props => props.color || 'var(--primary-gold)'};
  color: ${props => props.textColor || 'var(--text-dark)'};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%);
  border-radius: var(--border-radius);
  z-index: 1;
`;

export const AnimatedIcon = styled.i`
  font-size: ${props => props.size || '1.5rem'};
  color: ${props => props.color || 'var(--primary-gold)'};
  margin-bottom: 1rem;
  transition: var(--transition);
  
  ${props => props.parent}:hover & {
    transform: ${props => props.hoverEffect || 'scale(1.2)'};
  }
`; 