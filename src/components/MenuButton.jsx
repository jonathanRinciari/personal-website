import React from "react";

const MenuButton = ({ handleOnClick }) => {
  return (
    <div
      css={`
        width: 10%;
        height: 10%;
        min-height: 20px;
        min-width: 20px;
        max-height: 30px;
        padding: 1rem;
        border-radius: 8px;
        max-width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 200ms ease-in-out;
        fill: #444444;
        &:hover {
            background: white;
            fill: #CC6666;
        }
      `}
    >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          height="100%"
          width="100%"
          enableBackground="new 0 0 512 512"
          version="1.1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <path
            d="M491.318 235.318H20.682C9.26 235.318 0 244.577 0 256s9.26 20.682 20.682 20.682h470.636c11.423 0 20.682-9.259 20.682-20.682 0-11.422-9.259-20.682-20.682-20.682zM491.318 78.439H20.682C9.26 78.439 0 87.699 0 99.121c0 11.422 9.26 20.682 20.682 20.682h470.636c11.423 0 20.682-9.26 20.682-20.682 0-11.422-9.259-20.682-20.682-20.682zM491.318 392.197H20.682C9.26 392.197 0 401.456 0 412.879s9.26 20.682 20.682 20.682h470.636c11.423 0 20.682-9.259 20.682-20.682s-9.259-20.682-20.682-20.682z"
          />
        </svg>
      </div>
  );
};

export default MenuButton;
