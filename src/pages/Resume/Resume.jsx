import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import Footer from "../../components/Footer";

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
        console.log(text);
        this.setState({ md: text });
      });
  }

  render() {
    return (
      <div
        css={`

        `}
      >
        {this.state.md && <ReactMarkdown 
        source={this.state.md}
        escapeHtml={false}
        />}
        <Footer
            activeItem={"Resume"}
            handleNavigation={url => this.props.history.push(url)}
        />
      </div>
    );
  }
}

export default Resume;
