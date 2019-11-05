import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Icon,message } from 'antd';
import {tableRow} from './rowData';
// import Notification from './notification';

// rowSelection object indicates the need for row selection
// let obj = [];
// let rowData;
// // let tableArray;

// // let isEnabled;
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     rowData = selectedRows;
//     obj = rowData ; 
//     console.log(`selectedRowKeys: ${selectedRowKeys}`,obj);
//   }
// }; 

class data extends Component {
  constructor(){
    super();
     this.state={
        value:[],
     }
  }
  info = (record) => {
    message.success(`${record.name} \u00A0 Added Successfully`);
  };
    
 handleAdd = (record,index) => {
  const filterTechnology= this.state.value.filter(tech=>tech.key==record.key)
  if(filterTechnology.length==0){
    this.setState({
      value: [...this.state.value,record],
    },()=>{
     this.props.setSelectedListValue(this.state.value)
 });
  }else{
alert("technology is repeated");
  }
this.info(record)
}

render(){
 
  const columnData = 
  [
      {
        title: 'Technologies',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render:(text,record,index) => {
          return( <Button  onClick={() => this.handleAdd(record,index)}><Icon type="plus"/></Button>)
        } 
      }
    ]

    return(
   <div>   
   <h2>Technologies</h2>
      <Table
      bordered
     columns={columnData}
     dataSource={tableRow}
     rowKey={(record,index)=>index+1}
       />    
   </div>
    )
 }
}

 export default data;
          