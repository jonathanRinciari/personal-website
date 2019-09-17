import React from 'react';
import MenuButton from '../../components/MenuButton';
import Logo from '../../components/Logo';

function Header() {
  return (
    <div css={`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}>
      <Logo />
      <MenuButton />
    </div>
  );
}

export default Header;
