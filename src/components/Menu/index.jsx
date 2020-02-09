import React from 'react'
import { Menu } from 'antd';

const TopMenu = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">About me</Menu.Item>
      <Menu.Item key="2">Artickles</Menu.Item>
      <Menu.Item key="3">Contacts</Menu.Item>
    </Menu>
  )
}

export default TopMenu;
