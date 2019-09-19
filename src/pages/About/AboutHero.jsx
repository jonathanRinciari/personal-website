import React from "react";
import Commit from "../../assets/images/commit.jpeg";
import { ACCENT } from "../../theme";

const AboutHero = ({}) => {
  return (
    <div
      css={`
        display: flex;
        justify-content: center;
        margin-top: 2rem;
      `}
    >
      <img
        css={`
            justify-self: center;
            max-height: 500px;
            width: 100%;
            min-height: 350px;
            min-width: 350px;
            object-fit: cover;
            border: 8px solid ${ACCENT};
            border-radius: 8px;
        `}
        src={Commit}
        alt="Jon & Monica at Gitlab Commit"
      />
    </div>
  );
};

export default AboutHero;
