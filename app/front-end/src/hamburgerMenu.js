import React from 'react';
import { push as Menu } from 'react-burger-menu';
import './hamburgerMenu.css';

export default props => {
  return (

    <Menu noOverlay>
      <a className="menu-item" href="/Login">Sign Out</a>
    </Menu>


  );
};