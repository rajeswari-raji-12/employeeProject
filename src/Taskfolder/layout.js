import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Icon } from 'antd';
import Emptytable from './emptytable';
import Nodata from './noData';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const { Header, Content, Sider } = Layout;
class screenLayout extends React.Component{
    render(){
    return(
      <BrowserRouter>
  <div>   
  <Layout>
    <Header style = {{backgroundImage: 'linear-gradient(to left, #dfe2e8, #1d191900)',backgroundColor: '#0c4ba9'}}>
      <h1 style={{ color: 'white',textAlign: 'center', textShadow: '2px 5px 5px black' }}>VEDICBHARAT TECHNOLOGY SOLUTIONS</h1>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff',borderRight:'solid 6px #f0f2f5', height:'82vh' }}>
      <ul style={{ listStyleType:'none', marginTop:'10px', paddingLeft: '20px' }}>
        <li>
            <div>
                <Icon type="dashboard" />
                <Link style={{marginLeft:'10px'}} to='/'>Dashboard</Link>
            </div>
        </li>
        <li>
            <div style={{ marginTop:'10px' }}>
                <Icon type="user" />
                <Link style={{marginLeft:'10px'}} to='/employeelist'>Employees Details</Link>
            </div>
        </li>
      </ul>
      </Sider>
      <Layout>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Switch>
          <Route exact path='/' component={Nodata} />
          <Route path='/employeelist' component={Emptytable} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
    <Layout>
    <footer style = {{
      backgroundImage: 'linear-gradient(to right, #dfe2e8, #1d191900)',
      backgroundColor: '#0c4ba9',
      height: '10vh',
      width:'100%',
      position:'fixed',
      bottom:'0',
      zIndex:'1',
      color:'#0048b5',
      textAlign:'center',
      paddingTop: '30px'
  }}>©Copyright@ VBTS, All Rights Reserved.</footer>
    </Layout>
  </Layout>
  </div>
  </BrowserRouter>
        )
    }
}

export default screenLayout;


