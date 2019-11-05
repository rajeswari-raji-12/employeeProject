import React from 'react';
import './collections.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
// import { Divider } from 'antd';
function Collection(props){
    return(
            <div className="bgimg">
            <p className="menscollec">ALL MEN'S COLLECTIONS</p>
            <h1 className="discount">50% OFF</h1>
            <Button id = 'btnn'>
             DISCOVER NOW
             </Button>
             <p className = 'offer'>Limited Time Offer</p>
             </div>
             );
                       }
export {Collection}