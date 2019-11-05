import React, { Component } from 'react';
// import { Card } from 'antd';
import { Menu, Dropdown, Button,Card } from 'antd';


const menu = (
    <Menu style={{backgroundColor:"#71cd1466",margin:"370px 45px 0",position:'absolute'}}>
      <Menu.Item>
         <div>
        <span style={{paddingLeft: 30}}> <Button  shape="circle" icon="eye"/> </span>
        <span style={{paddingLeft: 30}}> <Button  shape="circle" icon="heart"/> </span>
        <span style={{paddingLeft: 30, paddingRight: 25}}> <Button  shape="circle" icon="shopping-cart"/></span>
          </div>
      </Menu.Item>
    </Menu>
  );
export class cards extends Component {
    render() {
        return (
            <div className="featuredCards">
              <Dropdown overlay={menu} placement="topCenter">
                <Card
                hoverable
                 style={{ width: 350 }}
        cover= {<img alt={this.props.alternate} src={this.props.imageSrc} /> }
                          >
                              
                              <p  id="cardName"> {this.props.imgtag} </p>
                              
                    <span id="price">{this.props.pprice} </span>
    <span id ="money35"> {this.props.bprice}</span>
  </Card>
  </Dropdown>

            </div>
        )
    }
}

export default cards
