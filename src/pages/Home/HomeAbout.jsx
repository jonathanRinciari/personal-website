import React from "react";
import { ACCENT, PRIMARY } from "../../theme";
import TwitterButton from "./TwitterButton";
import ProfileButton from "./ProfileButton";
import SectionDivider from "./SectionDivider";
import HomeSection from "./HomeSection";
import Footer from "../../components/Footer";
import BodyText from "../../components/BodyText";

const HomeAbout = ({}) => {
  return (
    <>
      <BodyText
        sizer={4}
        tag="h1"
        altText={true}
        color={ACCENT}
        style={{ fontWeight: 700, textAlign: "center", textTransform: 'uppercase', margin: 0}}
      >
        Jon Rinciari
      </BodyText>
      <BodyText sizer={1.6} tag="p" style={{textAlign: 'center', margin: '1rem 0rem 2rem 0px'}} color={ACCENT}>
        Software Engineer from the USA with a keen interest in the frontend world.
        Currently working in Seattle, Washington as a Frontend Engineer II at
        Amazon Webservices.
      </BodyText>
      <div
        css={`
          display: flex;
          margin-bottom: 3rem;
        `}
      >
        <TwitterButton />
        <ProfileButton />
      </div>
      <SectionDivider />
      <HomeSection category={"Featured Articles"} />
      <HomeSection category={"Recent Projects"} />
      <SectionDivider />
      <Footer />
    </>
  );
};

export default HomeAbout;
