/** @format */

import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';

const Header = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <div className='header__left'>
        <Avatar className='header__avatar' alt={user?.displayName} src={user?.photoURL} />
        <AccessTimeIcon />
      </div>

      <div className='header__search'>
        <SearchIcon />
        <input className='header__input' type='text' placeholder='Type here something' />
      </div>

      <div className='header__right'>
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
