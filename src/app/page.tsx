import React from 'react';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero';
import RewardsSection from '@/components/rewards';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <RewardsSection />
      {/* Add other sections here as needed */}
    </div>
  );
};

export default HomePage;
