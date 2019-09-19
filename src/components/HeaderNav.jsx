import React from "react";
import NavButton from "./NavButton";

const HeaderNav = ({ show, handleOnClose, currentRoute}) => {
  return (
    <div
      css={`
        transition: all 350ms ease-in-out;
        z-index: 2;
        display: grid;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        overflow: hidden;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 0.25fr 1fr 1fr;
        grid-template-areas: "Home Home Home Home Home Home Home Close" "Projects Projects Projects Projects Writing Writing Writing Writing" "Profile Profile Profile Profile Resume Resume Resume Resume";
        @media (max-width: 767px) {
          grid-row: 1 / 4;
          grid-column: 1 / 8;
          height: ${show ? "480px" : "0px"};
          max-height: 480px;
        }
        @media (min-width: 768px) {
          grid-row: 1 / 4;
          grid-column: 2 / 7;
          height: ${show ? "640px" : "0px"};
          max-height: 640px;
        }
        @media (min-width: 1200px) {
          grid-row: 1 / 4;
          grid-column: 3 / 8;
          height: ${show ? "700px" : "0px"};
          max-height: 700px;
        }
      `}
    >
        <NavButton active={currentRoute === '/about'} show={show} type="about" css={`grid-area: Profile`} handleOnClick={handleOnClose}/>
        <NavButton show={show} type="close" css={`grid-area: Close;`} handleOnClick={handleOnClose}/>
        <NavButton show={show} type="home" css={`grid-area: Home; `} handleOnClick={handleOnClose}/>
        <NavButton active={currentRoute === '/writing'} show={show} type="writing" css={`grid-area: Writing; `} handleOnClick={handleOnClose}/>
        <NavButton active={currentRoute === '/resume'} show={show} type="resume" css={`grid-area: Resume;`} handleOnClick={handleOnClose}/>
        <NavButton active={currentRoute === '/projects'} show={show} type="projects" css={`grid-area: Projects; `} handleOnClick={handleOnClose}/>
    </div>
  );
};

export default HeaderNav;
