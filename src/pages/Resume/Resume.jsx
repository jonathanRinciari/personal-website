import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import Footer from "../../components/Footer";
import SEO from "../../components/Seo";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      md: null
    };
  }
  componentDidMount() {
    const resumePath = require("./resume.md");
    fetch(resumePath)
      .then(response => response.text())
      .then(text => {
        this.setState({ md: text });
      });
  }

  render() {
    return (
      <SEO
        title="Jon Rinciari Resume"
        description="The resume of Jon Rinciari, Amazon Software Engineer"
        keywords="Jon, Rinciari, Jon Rinciari, Software Engineer, software development, Amazon, AWS Engineer, Frontend Developer, React Developer"
      >
        <div>
          {this.state.md && (
            <ReactMarkdown source={this.state.md} escapeHtml={false} />
          )}
          <Footer
            activeItem={"Resume"}
            handleNavigation={url => this.props.history.push(url)}
          />
        </div>
      </SEO>
    );
  }
}

export default Resume;
