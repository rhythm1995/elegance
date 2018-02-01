// 左侧栏
import React, { Component } from 'react';
import {Row, Col, Checkbox, Button, Input} from 'antd';
import ReactSVG from 'react-svg'

import '../App.css';

const Search = Input.Search;

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
              <ul className="sidebar-list">
                  <li className="list-group-item">
                      <Row>
                          {}
                      </Row>
                  </li>
              </ul>
          </div>
        );
    }
}

