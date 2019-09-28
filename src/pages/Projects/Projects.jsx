import React, { Component } from "react";
import ItemsList from "../../components/ItemsList";
import MyProjects from '../../projects';

class Projects extends Component {

  projects = MyProjects;

  navigate = (url) => {
    this.props.history.push(url)
  }

  navigateItem = item => {
    this.props.history.push(`/projects/${item.url}`, {project: item})
  }

  render() {
    return (
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
    );
  }
}

export default Projects;
