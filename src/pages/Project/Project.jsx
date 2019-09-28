import React, { Component } from "react";

import BodyText from "../../components/BodyText";
import { ACCENT } from "../../theme";
import SectionDivider from "../Home/SectionDivider";
import CategoryDivider from "./CategoryDivider";
import SummaryCard from "../../components/SummaryCard";
import Footer from "../../components/Footer";
import SupportBlock from "./SupportBlock";
import AnchorButton from "./AnchorButton";
import MyProjects from "../../projects";

class Project extends Component {
  projects = MyProjects;
  project = {};

  constructor(props) {
    super(props);
    const { title } = this.props.match.params;
      
    const project = this.projects[title];
    if (!project) {
      this.props.history.push("/404");
    } else {
      this.project = project;
    }
  }

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
            {this.project.title}
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
            {this.project.subtext}
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
          {this.project.headline}
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
          {this.project.info}
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
          {this.project.demo ? (
            <AnchorButton
              url={this.project.demo}
              text="Demo"
              minWidth="60"
              maxWidth="75"
            />
          ) : null}
          <AnchorButton
            url={this.project.repo}
            marginLeft={this.project.demo ? true : false}
            text="Source Code"
            minWidth="120"
            maxWidth="135"
          />
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
          {this.project.use}
        </BodyText>
        <CategoryDivider />
        <SupportBlock
          handleNavigation={() => this.props.history.push("/projects")}
        />
        <SummaryCard />
        <Footer
          activeItem={"Projects"}
          handleNavigation={url => this.props.history.push(url)}
        />
      </div>
    );
  }
}

export default Project;
