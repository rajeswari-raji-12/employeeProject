import React from 'react';
import './eiser.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';

function Main (){
    return (
      <div className = 'main'>
      <h4 className = 'h4'>MEN COLLECTION</h4>
      <h1 className = 'h1'><span style = {{color:'#71cd14'}}>Show</span>Your</h1> 
      <h1 className = 'h1'>Personal <span style = {{color:'#71cd14'}}>Style</span></h1>
      <p className = 'p'>Fowl saw dry which a above together place.</p>
      <Button id = 'btn'>VIEW COLLECTION</Button>
      </div>
    );
}

export {Main};