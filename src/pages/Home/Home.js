import React from "react";
import Hero from "../../components/Hero";
import HomeBanner from "./HomeBanner";
import HomeAbout from "./HomeAbout";
import SEO from "../../components/Seo";

function Home() {
  return (
    <SEO
      title="Jon Rinciari - Portfolio"
      keywords={
        "react, javascript, engineer, amazon, aws, blog, developer, jon, jon rinciari"
      }
      description="Jon Rinciari is a software engineer currently working for Amazon Web Services"
    >
      <div
        css={`
          display: grid;
        `}
      >
        <Hero />
        <HomeBanner />
        <HomeAbout />
      </div>
    </SEO>
  );
}

export default Home;
