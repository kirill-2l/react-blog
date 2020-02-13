import React from 'react';
import { NavLink, Link } from 'react-router-dom';
const TopMenu = () => {
  return (
    <div className='sidebar'>
      <Link to='/' className='sidebar__logo logo'>
        Blog
      </Link>
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
            to='/category/javascript'
            className='sidebar__link'
            activeClassName='sidebar__link--active'
          >
            JavaScript
          </NavLink>
        </li>
        <li className='sidebar__item'>
          <NavLink
            to='/category/reactjs'
            className='sidebar__link'
            activeClassName='sidebar__link--active'
          >
            ReactJS
          </NavLink>
        </li>
      </ul>
      <div className='sidebar__search'>
        <input type='text' className='sidebar__search-input' />
      </div>
    </div>
  );
};

export default TopMenu;
