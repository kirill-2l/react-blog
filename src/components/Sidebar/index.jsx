import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Search from '../../containers/Search';

const Sidebar = () => {
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
            to='/posts'
            className='sidebar__link'
            activeClassName='sidebar__link--active'
          >
            Все посты
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
      <Search/>
    </div>
  );
};



export default Sidebar;
