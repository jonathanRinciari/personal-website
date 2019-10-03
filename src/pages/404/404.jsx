import React from "react";
import BodyText from "../../components/BodyText";
import { ACCENT } from "../../theme";

const ErrorPage = () => {
  return (
    <div>
      <BodyText
        sizer={4}
        tag="h1"
        altText={true}
        color={ACCENT}
        style={{
          fontWeight: 700,
          textAlign: "center",
          textTransform: "uppercase",
          margin: 0
        }}
      >
        Sorry...
      </BodyText>
      <BodyText
        sizer={1.5}
        tag="p"
        altText={true}
        color={ACCENT}
        style={{
          fontWeight: 700,
          textAlign: "center",
          textTransform: "uppercase",
          margin: 0
        }}
      >
        This page doesn't exist! Click on the navigation menu to check out some of the other great pages!
      </BodyText>
    </div>
  );
};

export default ErrorPage;
