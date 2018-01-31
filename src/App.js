import React, { Component } from 'react';
import { Button } from 'antd';
import Sidebar from './components/sidebar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar></Sidebar>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
