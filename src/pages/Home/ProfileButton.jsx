import React from "react";
import { PRIMARY, ACCENT } from "../../theme";

const ProfileButton = ({ handleOnClick }) => {
  return (
    <div
      onClick={handleOnClick}
      css={`
        padding: 0.5rem;
        width: 10vw;
        margin-left: 1rem;
        min-width: 60px;
        max-width: 100px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border-radius: 5px;
        fill: ${ACCENT};
        color: ${ACCENT};
        transition: all 200ms ease-in-out;
        cursor: pointer;
        &:hover {
          background: white;
          fill: ${PRIMARY};
          color: ${PRIMARY};
        }
      `}
    >
      <div
        css={`
          width: 20px;
          min-width: 20px;
          height: 20px;
          display: flex;
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          width="100%"
          height="100%"
          enableBackground="new 0 0 37.334 37.334"
          version="1.1"
          viewBox="0 0 37.334 37.334"
          xmlSpace="preserve"
        >
          <path d="M14.911 25.001H4.227c0-2.176 1.428-4.031 3.436-4.767-.431-.438-.744-1.104-.901-2.109-.207.042-.528-.195-.623-.556-.097-.367-.16-.96.049-1.017a.258.258 0 01.19.028v-1.02c0-1.606-.378-2.55 2.247-2.819l-.023-.006s2.069-.199 2.614-.689c0 0 .015.414.235.868 1.211.464 1.363 1.537 1.328 2.647v1.021a.261.261 0 01.191-.028c.209.057.098.672.002 1.041-.094.357-.365.57-.57.532-.153.957-.489 1.644-.955 2.101 2.023.727 3.464 2.585 3.464 4.773zM37.334 6.5v24.333H0V6.5h37.334zm-2 2H2v20.333h33.334V8.5zm-2.667 4H17.834v2h14.833v-2zm0 5.167H17.834v2h14.833v-2zm0 5.168H17.834v2h14.833v-2z" />
        </svg>
      </div>
      <span
        css={`
          margin-left: 0.5rem;
          font-family: dosis, "HelveticaNeue-CondensedBold", "trebuchet ms",
            sans-serif;
        `}
      >
        Profile
      </span>
    </div>
  );
};

export default ProfileButton;
