import React, { Component } from 'react';
import { Layout } from 'antd';


import Sidebar from './components/sidebar';
import Headbar from './components/headbar';


import './App.css';

const { Header, Footer, Sider, Content } = Layout;



class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
              <Layout>
                  <Header>
                      <Headbar></Headbar>
                  </Header>
                  <Layout>
                      <Sider>
                          <Sidebar></Sidebar>
                      </Sider>
                      <Content>Content</Content>
                  </Layout>
                  <Footer>Footer</Footer>
              </Layout>
          </div>
      </div>
    );
  }
}

export default App;
