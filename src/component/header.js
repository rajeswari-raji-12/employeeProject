import React, {Component} from 'react';
import './header.css';
import { Row, Col, Icon, Menu} from 'antd';
import IMG from '../component/eiser header/images/logo.png';
import  Example1 from  './drop';
const {Item} = Menu;

 class HeadPart extends Component {
    render() {
        return (
    <div>
    <Row>
    <Col lg={{ span: 5, offset: 1 }}>
    <a target="_blank" rel="noopener noreferrer" href="index.html">
    <img src = {IMG} alt = 'website logo' style={{paddingTop: '10px'}}/></a>
    </Col>
    <Col lg={{ span: 11, offset: 1 }}>
    <Menu 
        mode='horizontal'
        // defaultSelectedKeys={['1']}
        style={{fontWeight: '500', paddingTop: '14px', fontSize: '13px', borderBottom:'0px'}}
      >
        <Item key="1" style={{color: '#71cd14'}}>HOME</Item>
        <Item key="2">
        <Example1 Listname="Shop"/>
          </Item>
        <Item key="3"> <Example1  Listname="Blog"/></Item>
        <Item key="4"> <Example1  Listname="Pages"/></Item>
        <Item key="5">CONTACT</Item>
      </Menu> 
    </Col>
    <Col lg={{ span: 5, offset: 1 }}>
    <div> 
      <Icon className = 'icons' type="search" style={{paddingRight: '20px', fontSize: '17px' }} />
      <Icon className = 'icons' type="shopping-cart" style={{paddingRight: '20px', fontSize: '17px' }} />
      <Icon className = 'icons' type="user" style={{paddingRight: '20px', fontSize: '17px' }} />
      <Icon className = 'icons' type="heart" style={{paddingRight: '20px', fontSize: '17px' }} />
      </div>
    </Col>
  </Row>
            </div>
        )
    }
}


export default HeadPart;
