import React from "react";

const Logo = ({ handleOnClick }) => {
  return (
    <div
      onClick={handleOnClick}
      css={`
        display: flex;
        height: 10%;
        width: 10%;
        min-height: 35px;
        min-width: 35px;
        max-height: 60px;
        max-width: 60px;
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 50 50"
      >
        <path fill="#F9F4ED" d="M-1 -1H51V51H-1z" />
        <g stroke="#444444">
          <path
            fill="none"
            strokeWidth="8"
            d="M0.471 0.353H49.471V49.353H0.471z"
            transform="matrix(.99606 0 0 1 .021 0)"
          />
          <text
            style={{ userSelect: "none" }}
            x="12.6"
            y="31.119"
            fill="#444444"
            fillOpacity="null"
            strokeOpacity="null"
            strokeWidth="0"
            fontFamily="'Simonetta', serif"
            fontSize="28"
            fontWeight="bold"
            textAnchor="start"
            transform="matrix(.63197 0 0 1.18051 -1.58 -1.631)"
            xmlSpace="preserve"
          >
            J } R
          </text>
        </g>
      </svg>
    </div>
  );
};

export default Logo;
