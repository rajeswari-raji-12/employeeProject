import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Icon } from 'antd';
class moneyBack extends Component {
    render() {
        return (
            <div className="featuredMoney">
                 <div className="money">
                     
              <Icon id="icon" type={this.props.iname}/>
<div id="moneytitle">{this.props.title}</div>
    <div id ="moneytxt"> {this.props.discription}</div>
            </div>
            </div>
        );
    }
}

export default moneyBack;
