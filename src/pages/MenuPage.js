import React from 'react';
import styled from 'styled-components';
import { SectionWrapper } from '../styles/StyledComponents';

// Styled components for the menu page
const MenuPageContainer = styled.div`
  padding-top: 100px; // Space for the fixed header
`;

const MenuSectionWrapper = styled(SectionWrapper)`
  background-color: var(--background-light);
  padding: 3rem 0;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='50' viewBox='0 0 100 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 L50 0 L100 50 Z' fill='%23FFF'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
    z-index: 2;
  }
`;

const MenuHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    color: var(--primary-red);
    font-size: 3.5rem;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 4px;
      background: var(--gradient-primary);
    }
  }
  
  p {
    font-size: 1.2rem;
    color: var(--text-gray);
    max-width: 700px;
    margin: 1.5rem auto;
  }
`;

const MenuCategoryTitle = styled.h2`
  color: var(--primary-red);
  font-size: 2rem;
  margin: 2.5rem 0 1.5rem;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--gradient-secondary);
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MenuCategory = styled.div`
  margin-bottom: 3rem;
`;

const MenuCard = styled.div`
  background-color: #fff;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  transition: var(--transition);
  border-left: 4px solid var(--primary-gold);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-left-color: var(--primary-red);
  }
`;

const MenuItemName = styled.h3`
  font-size: 1.2rem;
  color: var(--text-dark);
  text-align: center;
`;

const DecorationElement = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%239C27B0' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.7;
  z-index: 0;
  
  &.top-left {
    top: 50px;
    left: 30px;
  }
  
  &.bottom-right {
    bottom: 50px;
    right: 30px;
  }
`;

const MenuPage = () => {
  const menuData = {
    noodles: [
      { name: "Hakka Noodles" },
      { name: "Veg Chowmin" },
      { name: "Panner Chowmin" },
      { name: "Schezwan Noodle" },
      { name: "Schezwan Panner Noodle" },
      { name: "Chilli Garlic Noodle" },
      { name: "Chilli Garlic Panner Noodle" },
      { name: "Hong Kong Noodle" },
      { name: "Singupari Noodle" },
      { name: "Thai Noodle (Boil Water with Salt)" }
    ],
    beverages: [
      { name: "Tea" },
      { name: "Lemon Tea" },
      { name: "Ice Tea" },
      { name: "Coffee" },
      { name: "Black Coffee" },
      { name: "Mint Mojito" },
      { name: "Blue Lagoon" },
      { name: "Virgin Mojito" },
      { name: "Black Currant" },
      { name: "Watermelon Mocktail" },
      { name: "Pina colada mocktail" },
      { name: "Orange Chattk" },
      { name: "Masala Soda" },
      { name: "Lassi" },
      { name: "Gulabu Lassi" },
      { name: "Cold Coffee" },
      { name: "Cold Coffee With Ice Cream" },
      { name: "Kit Kat Shake" },
      { name: "Oreo Shake" },
      { name: "Vanilla Shake" },
      { name: "Chocolate Shake" },
      { name: "Butter Stoch Shake" }
    ],
    mainCourse: [
      { name: "Matar paneer" },
      { name: "Kadahi Panner" },
      { name: "Sahi Panner" },
      { name: "Panner Do Payaza" },
      { name: "Panner kali Mirch" },
      { name: "Handi Panner" },
      { name: "Panner Bhujiya" },
      { name: "Panner Lababdar" },
      { name: "Panner Kolhapuri" },
      { name: "Panner Kaju Curry" },
      { name: "Panner Korma" },
      { name: "Panner Pasand" },
      { name: "Palak Panner" },
      { name: "Panner Haydrabadi" },
      { name: "Panner Tikka Masala" },
      { name: "Matar mushroom" },
      { name: "Mushroom Masala" },
      { name: "Mushroom Do Payaza" },
      { name: "Kadahi Mushroom" }
    ],
    sukhiSabji: [
      { name: "Aloo Jeera" },
      { name: "Aloo Matar Tamatar" },
      { name: "Aloo Gobhi" },
      { name: "Mix Veg" }
    ],
    rice: [
      { name: "Plain Rice" },
      { name: "Jeera Rice" },
      { name: "Matar Pulao" },
      { name: "Veg Pulao" },
      { name: "Veg Biryani" },
      { name: "Veg Hydrabadi Biryani With Raita" },
      { name: "Handi Biryani With Raita" }
    ],
    breads: [
      { name: "Tava Roti" },
      { name: "Tava Roti With Butter" },
      { name: "Plain Roti" },
      { name: "Plain Roti With Butter" },
      { name: "Plain Naan" },
      { name: "Stuff Naan" },
      { name: "Garlic Naan" },
      { name: "Laccha Paratha" },
      { name: "Aloo Paratha" },
      { name: "Panner Paratha" },
      { name: "Mix Paratha" },
      { name: "Aloo Kulcha" },
      { name: "Panner Kulcha" }
    ],
    miscellaneous: [
      { name: "Rosted Papad" },
      { name: "Fry Papad" },
      { name: "Salad Bar" }
    ],
    jaiMaharstra: [
      { name: "Vada Pav" },
      { name: "Vada Pav (Cheese)" },
      { name: "Pav Bhaji" },
      { name: "Butter Pav Bhaji" },
      { name: "Masala Pav" }
    ],
    momos: [
      { name: "Steam Momos" },
      { name: "Deep Fry Momos" },
      { name: "Pan Fry Momos" },
      { name: "Kurkure Momos" },
      { name: "Afgani Momo" },
      { name: "Tandoori Momos" },
      { name: "Gravy Momos" }
    ],
    daal: [
      { name: "Plain Dal" },
      { name: "Dal Tadka" },
      { name: "Daal Sultani" },
      { name: "Corn Palak" }
    ]
  };

  return (
    <MenuPageContainer>
      <MenuSectionWrapper>
        <div className="container">
          <MenuHeader>
            <h1>Our Menu</h1>
            <p>
              Experience the rich flavors of authentic Indian cuisine prepared with love and tradition. 
              From mouthwatering main courses to delectable desserts, we have something for every palate.
            </p>
          </MenuHeader>
          
          <DecorationElement className="top-left" />
          <DecorationElement className="bottom-right" />

          <MenuCategory>
            <MenuCategoryTitle>Noodles</MenuCategoryTitle>
            <MenuGrid>
              {menuData.noodles.map((item, index) => (
                <MenuCard key={`noodle-${index}`}>
                  <MenuItemName>{item.name}</MenuItemName>
                </MenuCard>
              ))}
            </MenuGrid>
          </MenuCategory>

          <MenuCategory>
            <MenuCategoryTitle>Main Course</MenuCategoryTitle>
            <MenuGrid>
              {menuData.mainCourse.map((item, index) => (
                <MenuCard key={`main-${index}`}>
                  <MenuItemName>{item.name}</MenuItemName>
                </MenuCard>
              ))}
            </MenuGrid>
          </MenuCategory>

          <MenuCategory>
            <MenuCategoryTitle>Sukhi Sabji</MenuCategoryTitle>
            <MenuGrid>
              {menuData.sukhiSabji.map((item, index) => (
                <MenuCard key={`sabji-${index}`}>
                  <MenuItemName>{item.name}</MenuItemName>
                </MenuCard>
              ))}
            </MenuGrid>
          </MenuCategory>

          <MenuCategory>
            <MenuCategoryTitle>Rice</MenuCategoryTitle>
            <MenuGrid>
              {menuData.rice.map((item, index) => (
                <MenuCard key={`rice-${index}`}>
                  <MenuItemName>{item.name}</MenuItemName>
                </MenuCard>
              ))}
            </MenuGrid>
          </MenuCategory>

          <MenuCategory>
            <MenuCategoryTitle>Breads</MenuCategoryTitle>
            <MenuGrid>
              {menuData.breads.map((item, index) => (
                <MenuCard key={`bread-${index}`}>
                  <MenuItemName>{item.name}</MenuItemName>
                </MenuCard>
              ))}
            </MenuGrid>
          </MenuCategory>

          <MenuCategory>
            <MenuCategoryTitle>Momos</MenuCategoryTitle>
            <MenuGrid>
              {menuData.momos.map((item, index) => (
                <MenuCard key={`momo-${index}`}>
                  <MenuItemName>{item.name}</MenuItemName>
                </MenuCard>
              ))}
            </MenuGrid>
          </MenuCategory>

          <MenuCategory>
            <MenuCategoryTitle>Jai Maharstra</MenuCategoryTitle>
            <MenuGrid>
              {menuData.jaiMaharstra.map((item, index) => (
                <MenuCard key={`maha-${index}`}>
                  <MenuItemName>{item.name}</MenuItemName>
                </MenuCard>
              ))}
            </MenuGrid>
          </MenuCategory>

          <MenuCategory>
            <MenuCategoryTitle>Daal</MenuCategoryTitle>
            <MenuGrid>
              {menuData.daal.map((item, index) => (
                <MenuCard key={`daal-${index}`}>
                  <MenuItemName>{item.name}</MenuItemName>
                </MenuCard>
              ))}
            </MenuGrid>
          </MenuCategory>

          <MenuCategory>
            <MenuCategoryTitle>Beverages</MenuCategoryTitle>
            <MenuGrid>
              {menuData.beverages.map((item, index) => (
                <MenuCard key={`beverage-${index}`}>
                  <MenuItemName>{item.name}</MenuItemName>
                </MenuCard>
              ))}
            </MenuGrid>
          </MenuCategory>

          <MenuCategory>
            <MenuCategoryTitle>Miscellaneous</MenuCategoryTitle>
            <MenuGrid>
              {menuData.miscellaneous.map((item, index) => (
                <MenuCard key={`misc-${index}`}>
                  <MenuItemName>{item.name}</MenuItemName>
                </MenuCard>
              ))}
            </MenuGrid>
          </MenuCategory>
        </div>
      </MenuSectionWrapper>
    </MenuPageContainer>
  );
};

export default MenuPage;
