import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
import './productcards.css';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button,Card } from 'antd';

const menu = (
  <Menu style={{backgroundColor:"#71cd1466",margin:"213px 22px 0px",position:"absolute"}}>
    <Menu.Item>
       <div>
      <span style={{paddingLeft: 13}}> <Button  shape="circle" icon="eye"/> </span>
      <span style={{paddingLeft: 30}}> <Button  shape="circle" icon="heart"/> </span>
      <span style={{paddingLeft: 34,paddingRight: 12}}> <Button  shape="circle" icon="shopping-cart"/> </span>
        </div>
    </Menu.Item>
    
  </Menu>
);
class cards extends Component{
    render(){
    return(
      <Dropdown overlay={menu} placement="topCenter">
        <Card className="title"
        
        style={{ width: 260 }}
        cover={<img alt="productimg" src={this.props.productImg} />}
      >
          <div style={{height:66}}>
         
      <p  style={{fontSize:19}}>{this.props.title}</p> 
  
     <h2>{this.props.price}<strike style={{fontSize:18,paddingLeft:43,color:"#797979"}}>{this.props.strikeprice}</strike></h2>
      </div>
      </Card>
      </Dropdown>
    );
    }
}
export default cards;