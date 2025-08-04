import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import IntroSection from '../components/sections/IntroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import SeasonalSpecials from '../components/sections/SeasonalSpecials';
import OpeningHoursSection from '../components/sections/OpeningHoursSection';
import ReviewsSection from '../components/sections/ReviewsSection';
import CallToAction from '../components/sections/CallToAction';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <SeasonalSpecials />
      <OpeningHoursSection />
      <ReviewsSection />
      <CallToAction />
    </main>
  );
};

export default HomePage;
