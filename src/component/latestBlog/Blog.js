import React from 'react';
import '../latestBlog/Blog.css';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Img from './Images/b1.jpg';
import Img1 from './Images/b2.jpg';
import Img2 from './Images/b3.jpg';
import Card from './card';
import Subheading from './subHeading';

class Blog extends React.Component{
 render(){
    return(
       <div style = {{marginTop: 100}}>
         <Subheading
           heading = "LATEST BLOG"
           discription = "Bring called seed first of third give itself now ment"
         />
         <Row style={{ paddingTop: '5%' }}>
            <Col lg={{ span: 5, offset: 2 }} style={{ marginLeft: '8%' }}>
               <Card 
                  blogImg = {Img}
                  name ="By Admin"
                  com = " 2 Comments"
                  heading = "Ford clever bed stops your sleeping partner hogging the whole"
                  para = "Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth."
                  more = "LEARN MORE"
               />
            </Col>
            <Col lg={{ span: 5, offset: 2 }}> 
               <Card 
                  blogImg = {Img1}
                  name ="By Admin"
                  com = " 2 Comments"
                  heading = "Ford clever bed stops your sleeping partner hogging the whole"
                  para = "Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth."
                  more = "LEARN MORE"
               />
            </Col>

            <Col lg={{ span: 5, offset: 2 }}>   
               <Card 
                  blogImg = {Img2}
                  name ="By Admin"
                  com = " 2 Comments"
                  heading = "Ford clever bed stops your sleeping partner hogging the whole"
                  para = "Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth."
                  more = "LEARN MORE" 
               />
            </Col>
         </Row>
      </div>
    );
 }
}
export default Blog;