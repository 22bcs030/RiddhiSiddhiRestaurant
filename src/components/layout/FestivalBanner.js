import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background: var(--gradient-primary);
  padding: 0.6rem 1rem;
  text-align: center;
  color: var(--text-light);
  font-weight: 500;
  position: relative;
  overflow: hidden;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm0 27.5c-6.904 0-12.5-5.596-12.5-12.5S8.096 2.5 15 2.5 27.5 8.096 27.5 15 21.904 27.5 15 27.5z' fill='%23FFF' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    opacity: 0.5;
  }
  
  &:before {
    top: 5px;
    left: 10px;
  }
  
  &:after {
    bottom: 5px;
    right: 10px;
  }
  
  p {
    margin: 0;
    animation: moveText 15s linear infinite;
    display: inline-block;
    white-space: nowrap;
  }
  
  @keyframes moveText {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const FestivalBanner = ({ text }) => {
  return (
    <BannerContainer>
      <p>{text || '🎉 Special Diwali Offer: 20% off on all sweets! Limited time only 🎉'}</p>
    </BannerContainer>
  );
};

export default FestivalBanner; 