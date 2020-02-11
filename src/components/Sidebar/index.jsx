import React from "react";

const TopMenu = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo logo">Blog</div>
      <ul className="sidebar__list">
        <li className="sidebar__item">Обо мне</li>
        <li className="sidebar__item">Посты</li>
        <li className="sidebar__item">Еще что-то</li>
      </ul>
    </div>
  );
};

export default TopMenu;
