import React, { Component } from 'react';
import { Divider } from 'antd';
import { Row, Col } from 'antd';
class head extends Component {
    render() {
        return (
            <div>
                <Row type="flex" justify="center">
              <Col span={4} >
                <div style={{textAlign:"center"}}>
                
<h2 style={{fontWeight:650,fontSize:20}}>{ this.props.heading}</h2>
<Divider />
</div>
</Col>
            </Row>
            <Row type="flex" justify="center">
<p style={{color:"#999999",fontSize:15}}>{this.props.discription}</p>
</Row>

              
            </div>
        )
    }
}

export default head;
