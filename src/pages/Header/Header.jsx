import React from 'react';
import MenuButton from '../../components/MenuButton';
import Logo from '../../components/Logo';

const Header = ({handleOnClick, handleNavigateHome}) => {
  return (
    <div css={`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}>
      <Logo handleOnClick={handleNavigateHome}/>
      <MenuButton handleOnClick={handleOnClick} />
    </div>
  );
}

export default Header;
