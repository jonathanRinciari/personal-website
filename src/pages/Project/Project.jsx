import React, { Component } from "react";
import BodyText from "../../components/BodyText";
import { ACCENT } from "../../theme";
import SectionDivider from "../Home/SectionDivider";
import CategoryDivider from "./CategoryDivider";
import SummaryCard from "../../components/SummaryCard";
import Footer from "../../components/Footer";
import SupportBlock from "./SupportBlock";
import AnchorButton from "./AnchorButton";

class Project extends Component {
  render() {
    const project = this.props.location.state.project
      ? this.props.location.state.project
      : {};
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
            {project.title}
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
            {project.subtext}
          </BodyText>
        </div>
        <SectionDivider />
        <BodyText
          sizer={2}
          tag="h6"
          altText={true}
          color={ACCENT}
          style={{
            fontWeight: 700,
            textAlign: "left",
            margin: "2rem 0"
          }}
        >
          {project.headline}
        </BodyText>
        <CategoryDivider />
        <BodyText
          sizer={2}
          tag="h6"
          altText={false}
          color={ACCENT}
          style={{
            fontWeight: "bolder",
            textAlign: "left",
            margin: "2rem 0"
          }}
        >
          My Motivation?
        </BodyText>
        <BodyText
          sizer={1.35}
          tag="p"
          altText={true}
          color={ACCENT}
          style={{
            fontWeight: "bolder",
            textAlign: "left",
            margin: "2rem 0"
          }}
        >
          {project.info}
        </BodyText>
        <div
          css={`
            margin-bottom: 2rem;
            display: flex;
            @media (max-width: 767px) {
              flex-direction: column;
              justify-content: flex-start;
            }
          `}
        >
          {project.demo ? (
            <AnchorButton url={project.demo} text="Demo" minWidth="60" maxWidth="75" />
          ) : null}
          <AnchorButton url={project.repo} marginLeft={project.demo ? true : false} text="Source Code" minWidth="120" maxWidth="135"/>
        </div>
        <CategoryDivider />
        <BodyText
          sizer={2}
          tag="h6"
          altText={false}
          color={ACCENT}
          style={{
            fontWeight: "bolder",
            textAlign: "left",
            margin: "2rem 0"
          }}
        >
          How to Use?
        </BodyText>
        <BodyText
          sizer={1.35}
          tag="p"
          altText={true}
          color={ACCENT}
          style={{
            fontWeight: "bolder",
            textAlign: "left",
            margin: "2rem 0"
          }}
        >
          {project.use}
        </BodyText>
        <CategoryDivider />
        <SupportBlock
          handleNavigation={() => this.props.history.push("/projects")}
        />
        <SummaryCard />
        <Footer activeItem={"Projects"} handleNavigation={() => {}} />
      </div>
    );
  }
}

export default Project;
