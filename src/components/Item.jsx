import React from "react";
import { PRIMARY, ACCENT } from "../theme";
import BodyText from "./BodyText";

const Item = ({ title, subtitle, handleOnClick}) => {
  return (
    <div
      onClick={handleOnClick}
      css={`
        padding: 1rem 0;
        padding-left: 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        color: ${ACCENT};
        transition: all 200ms ease-in-out;
        cursor: pointer;
        &:hover {
          color: ${PRIMARY};
          background: #fcfaf7;
        }
        &:last-child {
          margin-bottom: 2rem;
        }
        &:first-child {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
      `}
    >
      <BodyText
        sizer={2}
        tag="h5"
        altText={false}
        style={{
          fontWeight: 700,
          textAlign: "left",
          margin: 0,
          textTransform: "uppercase"
        }}
      >
        {title}
      </BodyText>
      <BodyText
        sizer={1.25}
        tag="p"
        altText={true}
        color={"#AAA"}
        style={{
          fontWeight: 700,
          textAlign: "left",
          margin: 0
        }}
      >
        {subtitle}
      </BodyText>
    </div>
  );
};

export default Item;
