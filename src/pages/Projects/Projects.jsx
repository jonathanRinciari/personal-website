import React, { Component } from "react";
import ItemsList from "../../components/ItemsList";

class Projects extends Component {
  projects = [
    {
      project: "",
      title: "YelpApi",
      subtext: "Nativescript Plugin",
      logo: ""
    },
    {
      project: "",
      title: "React Native Swipeable Cards",
      subtext: "Component",
      logo: ""
    },
    {
      project: "",
      title: "Angular Grid Directive",
      subtext: "Angular Utility",
      logo: ""
    }
  ];

  render() {
    return (
      <ItemsList
        activeTab="Projects"
        items={this.projects}
        title="Projects"
        subtext={`
            I love working in the open source community. It is one of the most
            impactful contributions as a software engineer that one can make. I work
            on many open source projects, but also create my own libraries and
            utilities! 
        `}
        handleNavigation={url => this.props.history.push(url)}
      />
    );
  }
}

export default Projects;
