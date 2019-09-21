import React, { Component } from "react";
import AboutHero from "./AboutHero";
import BodyText from "../../components/BodyText";
import { ACCENT } from "../../theme";
import SectionDivider from "../Home/SectionDivider";
import { withRouter } from "react-router-dom";
import Footer from "../../components/Footer";
import FollowBanner from "./FollowBanner";
import AboutDetail from "./AboutDetail";

class About extends Component {
  likes = [
    "Rock Climbing",
    "Snowboarding",
    "Exploring",
    "Nature",
    "Friendships",
    "Surfing"
  ];

  dislikes = [
    "Conflict",
    "Global Warming",
    "Car Horns!!!",
    "Buggy Code",
    "No Tests!"
  ];

  motivations = [
    "Love & Friendship",
    "A clear path forward",
    "Exercising",
    "Work / Life Balance",
    "Awesome Coworkers",
    "My Dog Java!"
  ];

  goals = [
    "Learn vuejs",
    "Write more blog posts",
    "Speak more at conferences",
    "Make awesome friendships!"
  ];
  render() {
    return (
      <div>
        <AboutHero />
        <div>
          <BodyText
            sizer={3}
            tag="h1"
            altText={false}
            color={ACCENT}
            style={{
              fontWeight: 700,
              textAlign: "center",
              textTransform: "uppercase",
              margin: 0,
              marginTop: ".75rem"
            }}
          >
            Jon Rinciari
          </BodyText>
          <BodyText
            sizer={2}
            tag="h4"
            altText={true}
            color={ACCENT}
            style={{
              fontWeight: 700,
              textAlign: "center",
              textTransform: "uppercase",
              margin: 0,
              marginBottom: "2rem"
            }}
          >
            Created on Endor
          </BodyText>
        </div>
        <SectionDivider />
        <div
          css={`
            margin-top: 2rem;
          `}
        >
          <BodyText
            sizer={1.75}
            tag="h4"
            altText={false}
            color={ACCENT}
            style={{
              fontWeight: 600,
              textAlign: "left",
              textTransform: "uppercase",
              margin: 0,
              marginTop: ".75rem"
            }}
          >
            Hey There.
          </BodyText>
          <BodyText
            sizer={1.25}
            tag="p"
            altText={false}
            color={ACCENT}
            style={{
              fontWeight: 500,
              textAlign: "left"
            }}
          >
            I'm Jon, a developer from Connecticut. I am a Frontend Engineer
            working for Amazon Webservices in Seattle, Washington. I work on the
            IoT platform with an amazing team!
          </BodyText>
          <BodyText
            sizer={1.25}
            tag="p"
            altText={false}
            color={ACCENT}
            style={{
              fontWeight: "unset",
              textAlign: "left"
            }}
          >
            I am incredibly driven to deliver great work, be the go to guy, and
            always strive to learn more. Web & Mobile development started as a
            hobby and grew into a career that I truly love. I am proud of my
            work, because I created it!
          </BodyText>
          <FollowBanner />
        </div>
        <SectionDivider />
        <div
          css={`
            display: flex;

            @media (max-width: 767px) {
              justify-content: space-between;
            }
            @media (min-width: 768px) {
              justify-content: space-between;
            }
            @media (min-width: 992px) {
              justify-content: space-around;
            }
            @media (min-width: 1200px) {
              justify-content: space-around;
            }
          `}
        >
          <div
            css={`
              display: flex;
              flex-direction: column;
            `}
          >
            <AboutDetail type={"like"} title="Likes..." items={this.likes}/>
            <AboutDetail type={"goal"} title="Goals..." items={this.goals}/>
          </div>
          <div
            css={`
              display: flex;
              flex-direction: column;
            `}
          >
            
            <AboutDetail type={"motivation"} title="Motivations..." items={this.motivations}/>
            <AboutDetail type={"dislike"} title="Dislikes..." items={this.dislikes}/>
            
          </div>
        </div>
        <SectionDivider />
        <div
          css={`
            margin-top: 4rem;
          `}
        >
          <Footer
            activeItem={"About"}
            handleNavigation={url => this.props.history.push(url)}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(About);
