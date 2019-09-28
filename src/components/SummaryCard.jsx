import React from "react";
import HeadShot from "../assets/images/profile.jpg";
import BodyText from "./BodyText";
import { ACCENT } from "../theme";
import FollowBanner from "../pages/About/FollowBanner";

const SummaryCard = () => {
  return (
    <div>
      <div
        css={`
          display: flex;
        `}
      >
        <div
          css={`
            height: 80px;
            width: 80px;
            border: 4px solid ${ACCENT};
            border-radius: 10px;
            overflow: hidden;
          `}
        >
          <img
            css={"width: 100%; height: 100%;"}
            src={HeadShot}
            alt="Headshot"
          />
        </div>
        <div
          css={`
            margin-left: 2rem;
          `}
        >
          <BodyText
            sizer={1.5}
            tag="h5"
            color={ACCENT}
            altText={false}
            style={{
              fontWeight: 700,
              textAlign: "left",
              margin: 0,
              textTransform: "uppercase"
            }}
          >
            Jon Rinciari
          </BodyText>
          <BodyText
            sizer={1.25}
            tag="p"
            altText={true}
            color={ACCENT}
            style={{
              fontWeight: 700,
              textAlign: "left",
              margin: 0
            }}
          >
            Jedi Knight
          </BodyText>
        </div>
      </div>
      <div>
        <BodyText
          sizer={1}
          tag="p"
          altText={false}
          color={ACCENT}
          style={{
            fontWeight: 700,
            textAlign: "left",
            margin: "2rem 0"
          }}
        >
          I have been working at a software engineer for ~5 years. I am
          currently working for AWS in Seattle, Washington as a Frontend
          Engineer II.
        </BodyText>
        <div
          css={`
            margin-bottom: 2rem;
          `}
        >
          <FollowBanner />
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
