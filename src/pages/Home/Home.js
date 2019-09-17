import React from 'react';
import Hero from '../../components/Hero';
import HomeBanner from './HomeBanner';
import HomeAbout from './HomeAbout';


function Home() {
  return (
    <div css={`
      display: grid;
    `}>
      <Hero />
      <HomeBanner />
      <HomeAbout />
    </div>
  );
}

export default Home;
