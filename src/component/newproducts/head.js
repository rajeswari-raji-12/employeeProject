import React, { Component } from 'react';
import { Divider } from 'antd';
import { Row, Col } from 'antd';
class head extends Component {
    render() {
        return (
            <div>
                <Row type="flex" justify="center">
              <Col span={4} > 
             <h2 style={{marginTop:"100px",fontWeight:"bold"}}>{ this.props.heading}</h2>
            <Divider />
          </Col>
            </Row>
            <Row type="flex" justify="center">
                <p style={{color:"#999"}}>{this.props.discription}</p>
           </Row>
            </div>
        );
    }
}

export default head
