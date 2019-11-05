import React from 'react';
import 'antd/dist/antd.css';
import { Card ,Icon } from 'antd';
import './Blog.css';

class card extends React.Component {
    render() {
        return(
            <div>
                <Card className = 'callImage'
                    hoverable 
                    style={{ width: 360 }}
                    bordered={false}
                    cover={<img alt="images" src={this.props.blogImg} />}>
                    <p style={{ fontSize: '16px' , marginLeft: '-24px', }}><span id="admin">{this.props.name}</span>
                    <span className="cards"> <Icon type="aliwangwang" />{this.props.com}</span></p>
                    <h2 style={{ marginLeft: '-24px' , fontSize: '20px' }}>{this.props.heading}</h2>
                    <p style={{ marginLeft: '-24px' , fontSize: '15px' , color: 'gray'}}>{this.props.para}</p>
                    <h4 style={{ marginLeft: '-24px'}} >{this.props.more} <Icon type="arrow-right" /></h4>
                </Card>


            </div>
        );
    }
}
 export default card;
