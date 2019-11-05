import React, { Component } from 'react';
import "./featured.css";
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Shoe from "./pics/f-p-1.jpg";
import Bag from "./pics/f-p-2.jpg";
import WAtch from "./pics/f-p-3.jpg";
import HEAD from "./head";
import MONEY from "./moneyBack";
import CARDS from "./cards";


 class eiser extends Component {
        render() {
        return ( 
            <div>
            <Row type="flex" justify="center">
              <Col span={5} order={1}>
                  
             <MONEY 
             iname="gift"
             title="MONEY BACK GURANTEE"
             discription="shall open divide a one"
             />


              </Col>
              <Col span={5} order={2}>
              <MONEY 
             iname="car"
             title="FREE DELIVERY"
             discription="shall open divide a one"
             />
              </Col>
              <Col span={5} order={3}>
              <MONEY
              cover="{<img src={Shoe} alt='shoe' />}"
             iname="customer-service"
             title="ALWAY SUPPORT"
             discription="shall open divide a one"
             />
              </Col>
              <Col span={5} order={4}>
              <MONEY 
             iname="bold"
             title="SECURE PAYMENT"
             discription="shall open divide a one"
             />
              </Col>
            </Row>
            
              <HEAD 
            headding="FEATURED PRODUCT"
            discription="Bring called seed first of third give itself now ment"
            />
           
            <Row type="flex" justify="center">
              <Col span={7} order={1}>
           
              <CARDS 
              alternate="shoe"
              imgtag="LATEST MEN'S SNEAKER "
              pprice="$25.00"
              bprice=" $35.00"
              imageSrc={Shoe}
              />

              </Col>
              <Col span={7} order={2}>
             
              <CARDS 
              imageSrc={Bag}
              alternate="Bag"
              imgtag="RED WOMEN PURSES  "
              pprice="$25.00"
              bprice=" $35.00"

              />
     </Col>
              <Col span={7} order={3}>
             
              <CARDS 
               imageSrc={WAtch}
              alternate="WAtch"
              imgtag="MEN STYLIST SMART WATCH"
              pprice="$25.00"
              bprice=" $35.00"

              />


              </Col>
              
            </Row>
          </div>
    
        );
    }
}

export default eiser;
