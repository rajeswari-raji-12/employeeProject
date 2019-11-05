import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './product.css';
import IMG from './images/shirt.png';
import {Button,Row,Col} from "antd";
import PIC from './images/n1.jpg';
 import PIC1 from './images/n2.jpg';
 import PIC2 from './images/n3.jpg';
 import PIC3 from './images/n4.jpg';
import CARDS from './card';
import HEADER from './head';

 class Products extends Component {
    render() {
        return (
            <div className="new">
               <HEADER
               heading="NEW PRODUCTS"
               discription="Bring called seed first of third give itself now ment"/>
                <Row justify="center" style={{marginTop:"60px"}}>
                   <Col lg={{span:10,order:1,offset:2}}>
                       <div className="shirt">
                        <h2>COLLECTION OF 2019</h2>
                        <h1 style={{fontWeight:"bold",padding:"20px"}}>MEN’S SUMMER T-SHIRT</h1>
                        <img src={IMG} alt="shirt" width="500px"></img>
                        <h2 style={{padding:"30px",fontWeight:"bold"}}>$120.70</h2>
                        <Button className="btn" type="button">ADD TO CART</Button>
                        </div>
                     </Col>
                     {/*reusable component CARDS by using props*/}
                     <Col lg={{span:5,order:2,offset:1}}>
                     <CARDS 
                    head="NIKE LATEST SNEAKER"
                    amount="$25.00"
                    price="$35.00"
                    imageSrc={PIC}
                    />                        
                    </Col>
                    <Col lg={{span:5,order:3}}>
                     <CARDS 
                    head="QUARTZ HAND WATCH"
                    amount="$25.00"
                    price="$35.00"
                    imageSrc={PIC1}
                    />
                     </Col>
                   
                     <Col id="card" lg={{span:5,order:4,offset:1}}>
                     <CARDS 
                    head="MEN’S DENIM JEANS"
                    amount="$25.00"
                    price="$35.00"
                    imageSrc={PIC2}
                    />
                     </Col>
                     <Col id="card" lg={{span:5,order:5}}>
                     <CARDS 
                    head="ADIDAS SPORT SHOE"
                    amount="$25.00"
                    price="$35.00"
                    imageSrc={PIC3}
                    />
                     </Col>
                    </Row>
                     
                  
                   
            </div>
        )
    }
}

export default  Products;
