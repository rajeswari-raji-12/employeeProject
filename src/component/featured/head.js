import React, { Component } from 'react';
import { Divider } from 'antd';
import { Row, Col } from 'antd';
class head extends Component {
    render() {
        return (
            <div>
                <Row type="flex" justify="center">
              <Col span={4} >
                <div className="head1" >
                
<h2>{ this.props.headding}</h2>
<Divider />
</div>
</Col>
            </Row>
            <Row type="flex" justify="center">
<p id="discription">{this.props.discription}</p>
</Row>

              
            </div>
        )
    }
}

export default head
