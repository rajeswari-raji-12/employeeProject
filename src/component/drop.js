import React from 'react';
import {  Menu,Dropdown } from 'antd';
// class Title1 extends React.Component{
//   constructor(){
//     super();{
//       this.state={
//         List1:'',
//         List2:'',
//         List3:'',
//         List4:''
//       }

//     }
//   }
//   render(){
   
//   }
// }


  
      const menu = (<Menu>
        <Menu.Item />
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            {this.props.List1}
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          {this.props.List2}
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          {this.props.List3}
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          {this.props.List4}
          </a>
        </Menu.Item>
      </Menu>);
  
  class Example1 extends React.Component{
    render(){
    return(<div>
    <Dropdown overlay={menu} placement="bottomLeft">
      <big>{this.props.Listname}</big>
    </Dropdown>
  </div>)
    }
}
  
  export default Example1;
  