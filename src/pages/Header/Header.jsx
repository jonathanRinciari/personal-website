import React from 'react';
import MenuButton from '../../components/MenuButton';
import Logo from '../../components/Logo';

const Header = ({handleOnClick}) => {
  return (
    <div css={`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}>
      <Logo />
      <MenuButton handleOnClick={handleOnClick} />
    </div>
  );
}

export default Header;
