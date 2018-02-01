// 左侧栏
import React, { Component } from 'react';
import {Row, Menu, Icon, Input} from 'antd';
import ReactSVG from 'react-svg'

import '../App.css';

const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Sidebar extends Component {
    render() {
        return (
          <div className="sidebar">
              <div className="sidebar-search">
                  <Search
                      placeholder="input search text"
                      style={{ width: 200 }}
                      onSearch={value => console.log(value)}
                  />
              </div>
                  <Menu
                      onClick={this.handleClick}
                      style={{ width: 200 }}
                      defaultSelectedKeys={['1']}
                      defaultOpenKeys={['sub1']}
                      mode="inline"
                  >
                      <SubMenu key="sub1" title={<span><span>Navigation One</span></span>}>
                          <MenuItemGroup key="g1" title="Item 1">
                              <Menu.Item key="1">Option 1</Menu.Item>
                              <Menu.Item key="2">Option 2</Menu.Item>
                          </MenuItemGroup>
                          <MenuItemGroup key="g2" title="Item 2">
                              <Menu.Item key="3">Option 3</Menu.Item>
                              <Menu.Item key="4">Option 4</Menu.Item>
                          </MenuItemGroup>
                      </SubMenu>
                  </Menu>
          </div>
        );
    }
}
