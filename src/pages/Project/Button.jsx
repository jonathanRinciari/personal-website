import React from "react";
import { ACCENT, PRIMARY } from "../../theme";
import BodyText from "../../components/BodyText";

const Button = ({ handleOnClick, text, minWidth, maxWidth, marginLeft}) => {
  return (
    <div
      onClick={handleOnClick}
      css={`
        background: ${ACCENT};
        text-decoration: none;
        padding: 0 0.75rem;
        min-width: ${minWidth}px;
        max-width: ${maxWidth}px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        fill: white;
        color: white;
        transition: all 200ms ease-in-out;
        cursor: pointer;
        margin-left: ${marginLeft ? '2rem' : null};
        &:hover {
          background: white;
          fill: ${PRIMARY};
          color: ${PRIMARY};
        }
        @media(max-width: 767px) {
          height: 30px;
          max-width: ${minWidth}px;
          margin-left: 0;
          margin-top: 1rem;
        }
      `}
    >
      <BodyText sizer={1.25} altText={true}>
      {text}
      </BodyText>
    </div>
  );
};

export default Button;
