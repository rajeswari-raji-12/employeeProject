import React, { Component } from 'react';
import './product.css';
import { Menu, Dropdown, Button,Card } from 'antd';

const menu = (
    
    <Menu id="menu" style={{backgroundColor:"#71cd1466"}}>
      <Menu.Item>
         <div>
        <span style={{paddingLeft: 15}}> <Button  shape="circle" icon="eye"/> </span>
        <span style={{paddingLeft: 30}}> <Button  shape="circle" icon="heart"/> </span>
        <span style={{paddingLeft: 30,paddingRight: 15}}> <Button  shape="circle" icon="shopping-cart"/> </span>
          </div>
      </Menu.Item>
      
    </Menu>
  );
 class card extends Component {

    render() {
        return (
            <div>
                 <Dropdown overlay={menu} placement="topCenter">
              
                  <Card
                         hoverable
                         style={{ width: 250}}
                        cover={<img src={this.props.imageSrc}  alt="myPicture" />} >
                        <h3>{this.props.head}</h3> 
                       <h2>{this.props.amount}<strike style={{marginLeft:"50px", color:"#82807D"}}>{this.props.price}</strike></h2>     
                 </Card>
                 </Dropdown>
            </div>
        )
    }
}

export default card;
