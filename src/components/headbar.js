// 左侧栏
import React, { Component } from 'react';

import '../App.css';
import logo from '../img/elegance.png';

const logoStyle = {
    height: 60,
    float: 'left'
};

const logoTextStyle = {
    fontSize: 45,
    color: '#fff'
};

export default class Headbar extends Component {
    render() {
        return (
            <div className="headbar">
                <div style={logoStyle}>
                    <img src={logo} style={logoStyle}/>
                    <span style={logoTextStyle}>Elegance</span>
                </div>
            </div>
        );
    }
}

