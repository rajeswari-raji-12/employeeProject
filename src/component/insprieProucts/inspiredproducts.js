import React,{Component} from 'react';
import i1 from './images/i1.jpg';
import i2 from './images/i2.jpg';
import i3 from './images/i3.jpg';
import i4 from './images/i4.jpg';
import i5 from './images/i5.jpg';
import i6 from './images/i6.jpg';
import i7 from './images/i7.jpg';
import i8 from './images/i8.jpg';
import PROUCTCARD from './productcards';
import HEAD from './head' ;
// import './inspiredproducts.css';
import {Row,Col} from 'antd';
import 'antd/dist/antd.css';

class Inspiredproducts extends Component {
    render(){
        return(
            <div style={{marginTop:100}}>
                <HEAD 
                heading="INSPIRED PRODUCTS" discription="Bring called seed first of third give itself now ment"
                />
    <Row style={{marginTop:50}}>
      <Col lg={{span:5,offset:2}} order={1} >
      <PROUCTCARD 
      productImg={i1}
      title="Latest Men's Seaker"
      price="$25.00"
      strikeprice="$35.00"
      />
      </Col>
      <Col lg={{span:5}} order={2}>
      <PROUCTCARD 
      productImg={i2}
      title="Latest Men's Seaker"
      price="$25.00"
      strikeprice="$35.00"
      />
      </Col>
      <Col lg={{span:5}} order={3}>
      <PROUCTCARD 
      productImg={i3}
      title="Latest Men's Seaker"
      price="$25.00"
      strikeprice="$35.00"/>
      </Col>
      <Col lg={{span:5}} order={4}>
      <PROUCTCARD 
      productImg={i4}
      title="Latest Men's Seaker"
      price="$25.00"
      strikeprice="$35.00"/>
      </Col>
    </Row>
    <Row style={{marginTop:61}}>
      <Col lg={{span:5,offset:2}} order={1} >
      <PROUCTCARD 
      productImg={i5}
      title="Latest Men's Seaker"
      price="$25.00"
      strikeprice="$35.00"
      />
      </Col>
      <Col lg={{span:5}} order={2}>
      <PROUCTCARD 
      productImg={i6}
      title="Latest Men's Seaker"
      price="$25.00"
      strikeprice="$35.00"
      />
      </Col>
      <Col lg={{span:5}} order={3}>
      <PROUCTCARD 
      productImg={i7}
      title="Latest Men's Seaker"
      price="$25.00"
      strikeprice="$35.00"/>
      </Col>
      <Col lg={{span:5}} order={4}>
      <PROUCTCARD 
      productImg={i8}
      title="Latest Men's Seaker"
      price="$25.00"
      strikeprice="$35.00"/>
      </Col>
    </Row>
    
  </div>
        );
    }
    }

export default Inspiredproducts;