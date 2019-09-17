import React from "react";
import { PRIMARY } from "../../theme";

const SectionDivider = ({}) => {
  return (
    <div
      css={`
        background: ${PRIMARY};
        height: 1vw;
        border-radius: 10px;
        margin-bottom: 1rem;
      `}
    ></div>
  );
};

export default SectionDivider;
