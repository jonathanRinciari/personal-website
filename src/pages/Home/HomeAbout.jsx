import React from "react";
import { ACCENT } from "../../theme";
import TwitterButton from "./TwitterButton";
import ProfileButton from "./ProfileButton";
import SectionDivider from "./SectionDivider";
import HomeSection from "./HomeSection";
import Footer from "../../components/Footer";
import BodyText from "../../components/BodyText";
import { withRouter } from 'react-router-dom';
import MyProjects from '../../projects';
import MyWritings from '../../writings';

class HomeAbout extends React.Component {
  projects = Object.values(MyProjects);
  writing = MyWritings.filter(writing => writing.published).slice(0, 3);

  handleItemNavigation = (item, type) => {
    this.props.history.push(`/${type}/${item.url}`)
  }

  render() {
    return (
      <>
        <BodyText
          sizer={4}
          tag="h1"
          altText={true}
          color={ACCENT}
          style={{ fontWeight: 700, textAlign: "center", textTransform: 'uppercase', margin: 0}}
        >
          Jon Rinciari
        </BodyText>
        <BodyText sizer={1.6} tag="p" style={{textAlign: 'center', margin: '1rem 0rem 2rem 0px'}} color={ACCENT}>
          Software Engineer from the USA with a keen interest in the frontend world.
          Currently working in Seattle, Washington as a Frontend Engineer II at
          Amazon Web Services.
        </BodyText>
        <div
          css={`
            display: flex;
            margin-bottom: 3rem;
          `}
        >
          <TwitterButton />
          <ProfileButton handleOnClick={() => this.props.history.push('/about')} />
        </div>
        <SectionDivider />
        <HomeSection category={"Featured Articles"} items={this.writing} handleOnClick={e => this.handleItemNavigation(e, 'writing')} />
        <HomeSection style={{marginBottom: '2rem'}} category={"Recent Projects"} handleOnClick={e => this.handleItemNavigation(e, 'projects')} items={this.projects} />
        <SectionDivider />
        <Footer handleNavigation={url => this.props.history.push(url)}/>
      </>
    );
  }
  
};

export default withRouter(HomeAbout);
