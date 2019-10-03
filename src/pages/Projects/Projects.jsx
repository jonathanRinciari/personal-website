import React, { Component } from "react";
import ItemsList from "../../components/ItemsList";
import MyProjects from "../../projects";
import SEO from "../../components/Seo";

class Projects extends Component {
  projects = Object.values(MyProjects);

  navigate = url => {
    this.props.history.push(url);
  };

  navigateItem = item => {
    this.props.history.push(`/projects/${item.url}`, { project: item });
  };

  render() {
    return (
      <SEO
        title="Jon Rinciari Project List"
        description="Portfolio of recent projects"
        keywords="Jon Rinciari, Projects, Software Engineer, React, Angular, React Forms, React Native"
      >
        <ItemsList
          activeTab="Projects"
          handleItemClick={this.navigateItem}
          items={this.projects}
          title="Projects"
          subtext={`
            I love working in the open source community. It is one of the most
            impactful contributions as a software engineer that one can make. I work
            on many open source projects, but also create my own libraries and
            utilities! 
        `}
          handleNavigation={this.navigate}
        />
      </SEO>
    );
  }
}

export default Projects;
