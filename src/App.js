import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import IntroSection from './components/sections/IntroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import SeasonalSpecials from './components/sections/SeasonalSpecials';
import HoursRatings from './components/sections/HoursRatings';
import CallToAction from './components/sections/CallToAction';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header fixed={true} />
      <main>
        <HeroSection />
        <IntroSection />
        <FeaturesSection />
        <SeasonalSpecials />
        <HoursRatings />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
