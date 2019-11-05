import React,{Component} from 'react';
// import { Input,Button} from 'antd';
// import 'antd/dist/antd.css';
// import './input.css';
class InputFields extends Component{
     constructor(){
         super();
         
          this.state = {
             firstName:'',
             lastName:'',
             phoneNumber:'',
             final:'',
             phNumber:'',
              }
}
    handle(event){
        this.setState({
             firstName:event.target.value
        })
      
    }
    handle2(event){
        this.setState({
             lastName:event.target.value
        })
      
    }
    handle3(event){
        this.setState({
             phoneNumber:event.target.value
        })
      
    }
    handleClick(e) {

     this.setState({
        
         final:  this.state.firstName + this.state.lastName,
         phNumber:this.state.phoneNumber
     })

        
    }
    
    render(){
        return(
            <div id="sizeBox">
        <h1>Details</h1> 
        <Input id="numb" onChange={this.handle.bind(this)} placeholder="firstName"/><br></br><br></br>
        <Input id="numb1" onChange={this.handle2.bind(this)}  placeholder="lastName"/><br></br><br></br>
        <Input id="numb2" onChange={this.handle3.bind(this)}  placeholder="phoneNumber"/><br></br><br></br>
        <Button type="primary" onClick={this.handleClick.bind(this)} >Submit</Button><br></br><br></br>
        <h2>{this.state.final}</h2>
        <h2>{this.state.phNumber}</h2> 
       
        
         </div>
        )
        
    }
}
export default InputFields;