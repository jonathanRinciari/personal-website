import React from "react";
import { ACCENT, PRIMARY } from "../../theme";
import BodyText from "../../components/BodyText";

const TwitterButton = ({ handleOnClick }) => {
  return (
    <div
      onClick={handleOnClick}
      css={`
        background: ${ACCENT};
        padding: 0 0.75rem;
        width: 10vw;
        min-width: 60px;
        max-width: 100px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        fill: white;
        color: white;
        transition: all 200ms ease-in-out;
        cursor: pointer;
        &:hover {
          background: white;
          fill: ${PRIMARY};
          color: ${PRIMARY};
        }
        @media(max-width: 767px) {
          height: 30px;
        }
      `}
    >
      <div
        css={`
          width: 25px;
          height: 25px;
          min-height: 25px;
          display: flex;
          min-width: 25px;
          @media(max-width: 767px) {
            height: 18px;
            width: 18px;
            min-width: 18px;
            min-height: 18px;
          }
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 512 512"
          version="1.1"
          height="100%"
          width="100%"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
        </svg>
      </div>
      <BodyText sizer={1.25} style={{ marginLeft: "0.5rem" }} altText={true}>
      Follow
      </BodyText>
    </div>
  );
};

export default TwitterButton;
