import React from "react";
import styled from "styled-components";
import { PRIMARY, ACCENT } from "../theme";

const BodyText = ({
  tag: Tag = "span",
  children,
  color,
  hover,
  altText = false,
  sizer = 1,
  ...props
}) => {
  const fontFamily = altText
    ? 'dosis, "HelveticaNeue-CondensedBold", "trebuchet ms"'
    : "bitter,georgia,serif";
  const StyledTag = styled(Tag)`
    ${color ? `color: ${color}` : null};
    letter-spacing: 0.1em;
    font-family: ${fontFamily};
    @media(max-width: 767px) {
        font-size: ${.75 * sizer}em;
    }
    @media(min-width: 768px) {
        font-size: ${.9 * sizer}em;
    }
    @media(min-width: 992px) {
        font-size: ${1.075 * sizer}em;
    }
    @media(min-width: 1200px) {
        font-size: ${1.15 * sizer}em;
    }
  `;
  return <StyledTag {...props}>{children}</StyledTag>;
};

export default BodyText;
