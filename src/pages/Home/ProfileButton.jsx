import React from "react";
import { PRIMARY, ACCENT } from "../../theme";
import BodyText from "../../components/BodyText";

const ProfileButton = ({ handleOnClick }) => {
  return (
    <div
      onClick={handleOnClick}
      css={`
        padding: 0 0.75rem;
        width: 10vw;
        margin-left: 1rem;
        min-width: 60px;
        max-width: 100px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
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
      width="100%"
      height="100%"
      viewBox="-90 -19 605 605.333"
    >
      <path d="M207.918 301.25c35.691 0 64.621-28.938 64.621-64.625 0-35.691-28.93-64.625-64.621-64.625-35.695 0-64.625 28.934-64.625 64.625.043 35.672 28.95 64.578 64.625 64.625zm0-104.125c21.883 0 39.621 17.738 39.621 39.625 0 21.883-17.738 39.625-39.621 39.625-21.887 0-39.625-17.742-39.625-39.625.004-21.883 17.742-39.617 39.625-39.625zm0 0M207.918 325.125a96.992 96.992 0 00-70.25 29.375c-18.75 19.125-29 45.125-29 73.375.02 6.895 5.602 12.48 12.5 12.5h173.496c6.899-.02 12.48-5.605 12.5-12.5 0-28.25-10.25-54.25-29-73.375a96.983 96.983 0 00-70.246-29.375zm-73.375 90.25a76.444 76.444 0 0121-43.375 73.64 73.64 0 0152.375-21.875A73.639 73.639 0 01260.289 372a76.85 76.85 0 0121 43.375zm0 0" />
      <path d="M357.918 0h-300C23.406.016-4.57 27.988-4.582 62.5V505c.012 34.512 27.988 62.484 62.5 62.5h300c34.512-.016 62.484-27.988 62.5-62.5V62.5C420.402 27.988 392.43.016 357.918 0zm37.5 505c-.059 20.684-16.816 37.441-37.5 37.5h-300c-20.684-.059-37.441-16.816-37.5-37.5V62.5c.059-20.684 16.816-37.441 37.5-37.5h300c20.684.059 37.441 16.816 37.5 37.5zm0 0" />
      <path d="M155.793 83.875h100c6.902 0 12.5-5.598 12.5-12.5s-5.598-12.5-12.5-12.5h-100c-6.906 0-12.5 5.598-12.5 12.5s5.594 12.5 12.5 12.5zm0 0" />
    </svg>
      </div>
      <BodyText sizer={1.25} style={{marginLeft: '0.5rem'}} altText={true}>
        Profile
      </BodyText>
    </div>
  );
};

export default ProfileButton;
