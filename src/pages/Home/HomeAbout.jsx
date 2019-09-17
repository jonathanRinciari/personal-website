import React from "react";
import { ACCENT, PRIMARY } from "../../theme";
import TwitterButton from "./TwitterButton";
import ProfileButton from "./ProfileButton";
import SectionDivider from "./SectionDivider";
import HomeSection from "./HomeSection";
import HomeNavBar from "./HomeNavBar";
import Footer from "../../components/Footer";

const HomeAbout = ({}) => {
  return (
    <>
      <h1
        color={ACCENT}
        css={`
          font-weight: 600;
          font-size: 5vw;
          text-align: center;
        `}
      >
        Jon Rinciari
      </h1>
      <p
        color={ACCENT}
        css={`
          font-size: 2vw;
          text-align: center;
        `}
      >
        Software Engineer from USA with a keen interest in the frontend world.
        Currently working in Seattle, Washington as a Frontend Engineer II at
        Amazon Webservies.
      </p>
      <div
        css={`
          display: flex;
          margin-bottom: 2rem;
        `}
      >
        <TwitterButton />
        <ProfileButton />
      </div>
      <SectionDivider />
      <HomeSection category={'Featured Articles'} />
      <HomeSection category={'Recent Projects'}/>
      <SectionDivider />
      <HomeNavBar />
      <Footer />
    </>
  );
};

export default HomeAbout;
