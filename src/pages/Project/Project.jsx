import React, { Component } from "react";
import BodyText from "../../components/BodyText";
import { ACCENT } from "../../theme";
import SectionDivider from "../Home/SectionDivider";
import CategoryDivider from "./CategoryDivider";
import SummaryCard from "../../components/SummaryCard";
import Footer from "../../components/Footer";
import SupportBlock from "./SupportBlock";

class Project extends Component {
  render() {
    return (
      <div>
        <div>
          <BodyText
            sizer={4}
            tag="h1"
            altText={false}
            color={ACCENT}
            style={{
              fontWeight: 700,
              textAlign: "left",
              textTransform: "uppercase",
              margin: 0
            }}
          >
            TEST
          </BodyText>
          <BodyText
            sizer={1.75}
            tag="h4"
            altText={true}
            color="#AAA"
            style={{
              fontWeight: 600,
              textAlign: "left",
              margin: 0,
              marginBottom: "2rem"
            }}
          >
            BANANA
          </BodyText>
        </div>
        <SectionDivider />
        <BodyText
            sizer={2.5}
            tag="h6"
            altText={false}
            color={ACCENT}
            style={{
              fontWeight: 700,
              textAlign: "left",
              textTransform: "uppercase",
              margin: '2rem 0'
            }}
          >
            TEST
          </BodyText>
        <CategoryDivider />
        <SupportBlock handleNavigation={() => this.props.history.push('/projects')} />
        <SummaryCard />
        <Footer activeItem={'Projects'} handleNavigation={() => {}} />
      </div>
    );
  }
}

export default Project;
