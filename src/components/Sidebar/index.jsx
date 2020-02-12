import React from 'react';
import { NavLink } from 'react-router-dom';
const TopMenu = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__logo logo'>Blog</div>
      <ul className='sidebar__list'>
        <li className='sidebar__item'>
          <NavLink
            to='/about'
            className='sidebar__link'
            activeClassName='sidebar__link--active'
          >
            Обо мне
          </NavLink>
        </li>
        <li className='sidebar__item'>
          <NavLink
            to='/posts/'
            className='sidebar__link'
            activeClassName='sidebar__link--active'
          >
            Посты
          </NavLink>
        </li>
        <li className='sidebar__item'>
          <NavLink
            to='/yet'
            className='sidebar__link'
            activeClassName='sidebar__link--active'
          >
            Еще что-то
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;
