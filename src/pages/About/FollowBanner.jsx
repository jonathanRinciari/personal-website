import React, { useState } from "react";
import BodyText from "../../components/BodyText";
import { ACCENT } from "../../theme";
import SocialButton from "./SocialButton";

const FollowBanner = ({}) => {
  const defaultBanner = "Follow me...";
  const [banner, setBanner] = useState(defaultBanner);

  const resetBanner = () => {
    setBanner(defaultBanner);
  };

  return (
    <div
      css={`
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
      `}
    >
      <BodyText
        sizer={1.5}
        tag="span"
        altText={false}
        color={ACCENT}
        style={{
          fontWeight: "bolder",
          textAlign: "left",
          flex: 1
        }}
      >
        {banner}
      </BodyText>
      <div
        css={`
          display: flex;
          flex: 1;
          @media (max-width: 767px) {
            margin-left: 1rem;
            justify-content: flex-end;
          }
          @media (min-width: 768px) {
            margin-left: 1rem;
            justify-content: center;
          }
          @media (min-width: 1200px) {
            margin-left: 2rem;
            justify-content: center;
          }
        `}
      >
        <SocialButton
          onSocialIn={() => setBanner("Twitter")}
          onSocialOut={resetBanner}
          type="twitter"
          url="https://twitter.com/jonrinciari"
        />
        <SocialButton
          onSocialIn={() => setBanner("Linkedin")}
          onSocialOut={resetBanner}
          type="linkedin"
          url={'https://www.linkedin.com/in/jonathan-rinciari-91072a137'}

        />
        <SocialButton
          onSocialIn={() => setBanner("Github")}
          onSocialOut={resetBanner}
          type="github"
          url={'https://github.com/jonathanrinciari'}
        />
      </div>
    </div>
  );
};

export default FollowBanner;
