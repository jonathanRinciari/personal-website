import React, { Component } from "react";
import AboutHero from "./AboutHero";
import BodyText from "../../components/BodyText";
import { ACCENT } from "../../theme";
import SectionDivider from "../Home/SectionDivider";

class About extends Component {
  render() {
    return (
      <div>
        <AboutHero />
        <div>
        <BodyText
          sizer={3}
          tag="h1"
          altText={true}
          color={ACCENT}
          style={{
            fontWeight: 700,
            textAlign: "center",
            textTransform: "uppercase",
            margin: 0,
            marginTop: '.75rem'
          }}
        >
          Jon Rinciari
        </BodyText>
        <BodyText
          sizer={1.5}
          tag="h1"
          altText={true}
          color={ACCENT}
          style={{
            fontWeight: 700,
            textAlign: "center",
            textTransform: "uppercase",
            margin: 0,
            marginBottom: '2rem'
          }}
        >
          Created on Endor
        </BodyText>
        </div>
        <SectionDivider />
      </div>
    );
  }
}

export default About;
