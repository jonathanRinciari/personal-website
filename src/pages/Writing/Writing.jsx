import React, { Component } from "react";
import Footer from "../../components/Footer";
import ReactMarkdown from "react-markdown";
import SummaryCard from "../../components/SummaryCard";
import SectionDivider from "../Home/SectionDivider";
import BodyText from "../../components/BodyText";
import { ACCENT } from "../../theme";
import CodeBlock from "./SyntaxHighlighter";
import SEO from "../../components/Seo";
class Writing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      md: null,
      meta: null
    };
  }

  componentDidMount() {
    const { title: article } = this.props.match.params;
    try {
      const articlePath = require(`./posts/${article}/index.md`);
      const { default: meta } = require(`./posts/${article}/meta.js`);
      const Image = require(`./posts/${article}/${meta.cover}`);
      fetch(articlePath)
        .then(response => response.text())
        .then(text => {
          this.setState({ md: text, meta, article, cover: Image });
        })
        .catch(err => console.error(err));
    } catch (err) {
      this.props.history.push("/404");
    }
  }

  render() {
    return (
      <>
        <SEO
          title={this.state.meta && this.state.meta.title}
          description={this.state.md && this.state.md.slice(0, 30)}
          keywords={this.state.meta && this.state.meta.keywords}
        >
          <div>
            <BodyText
              sizer={3}
              tag="h1"
              altText={true}
              color={ACCENT}
              style={{
                fontWeight: 700,
                textAlign: "left",
                textTransform: "uppercase",
                margin: 0
              }}
            >
              {this.state.meta && this.state.meta.title}
            </BodyText>
            <BodyText
              sizer={1}
              tag="h1"
              altText={true}
              color={ACCENT}
              style={{
                fontWeight: 700,
                textAlign: "left",
                textTransform: "uppercase",
                margin: 0,
                marginBottom: "1rem"
              }}
            >
              Published {this.state.meta && this.state.meta.date}
            </BodyText>
          </div>
          {this.state.meta ? (
            <div>
              <img
                css={`
                  width: 100%;
                `}
                src={this.state.cover}
                alt={this.state.meta ? this.state.meta.cover : ""}
              />
            </div>
          ) : null}
          {this.state.md && (
            <ReactMarkdown
              source={this.state.md}
              escapeHtml={false}
              className="blog-post"
              renderers={{ code: CodeBlock }}
            />
          )}
          <SectionDivider />
          <SummaryCard />
          <Footer
            activeItem={"Writings"}
            handleNavigation={url => this.props.history.push(url)}
          />
        </SEO>
      </>
    );
  }
}

export default Writing;

// ---
// path: "/surgical-consultant-to-developer"
// cover: "./rocky.jpeg"
// date: "2018-03-28"
// title: "Surgical Consultant To Full Stack Developer"
// published: true
// tags: ['developer', 'surgical consultant', 'full stack developer', 'freeCodeCamp', 'web developer', 'javascript', 'self-taught developer']
// ---
