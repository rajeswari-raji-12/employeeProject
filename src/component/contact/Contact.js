import React, { Component } from 'react';
import './Mad.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Icon } from 'antd';
class Contact extends Component {
    render() {
        return ( <
            div className = "avunu" >
            <
            div className = "tea" >

            <
            Row type = "flex"
            justify = "start" >


            <
            Col span = { 4 } > < h1 style = {
                { color: "white" }
            } > Top Products < /h1>  <
            p style = {
                { color: '#797979' }
            } > Manage website < /p> <
            p style = {
                { color: "#797979" }
            } > Manage Reputation < /p> <
            p style = {
                { color: "#797979" }
            } > Power Tools < /p> <
            p style = {
                { color: "#797979" }
            } > Marketing Service < /p>< /Col >
            <Col span = { 4 } > < h1 style = {
                { color: "white" }
            } > Quick Links < /h1> <
            p style = {
                { color: "#797979" }
            } > Jobs < /p> <
            p style = {
                { color: "#797979" }
            } > Brand Assets < /p> <
            p style = {
                { color: "#797979" }
            } > Investor Relations < /p> <
            p style = {
                { color: "#797979" }
            } > Terms of service < /p> < /Col > <
            Col span = { 4 } > < h1 style = {
                { color: "white" }
            } > Features < /h1> <
            p style = {
                { color: "#797979" }
            } > Jobs < /p> <
            p style = {
                { color: "#797979" }
            } > Brand Assets < /p> <
            p style = {
                { color: "#797979" }
            } > Investor Relations < /p> <
            p style = {
                { color: "#797979" }
            } > Terms of service < /p> < /Col > <
            Col span = { 4 } > < h1 style = {
                { color: "white" }
            } > Resources < /h1> <
            p style = {
                { color: "#797979" }
            } > Guides < /p>  <
            p style = {
                { color: "#797979" }
            } > Research < /p> <
            p style = {
                { color: "#797979" }
            } > Experts < /p> <
            p style = {
                { color: "#797979", }
            } > Agencies < /p>< /
            Col > <
            Col span = { 4 } > < h1 style = {
                { color: "white" }
            } > NewsLetter < /h1> <
            p style = {
                { color: '#797979' }
            } > we only send promo offers < /p>  <
            Input style = {
                { width: "100%", padding: "12%", backgroundColor:'#FFFFFF26', border: '1px solid #FFFFFF26' }
            }
            size = "small"
            placeholder = "Your Email Address" / >
            <
            div className = "butt" >
            <
            Button style = {
                {backgroundColor: '#71cd14',border: '1px solid #71cd14',outline: '0',fontSize: '12px'}
            }
            type = "primary" > SUBSCRIBE < /Button> < /
            div >

            <
            /
            Col >

            <
            /Row >

            <
            /div> <
            footer style = {
                { color: "white", marginTop: "5%", marginLeft: "12%" }
            } >
            Copyright© 2019 All Rights Reserved | This template is made with <span><Icon className = 'icons' type="heart" style={{fontSize: '17px' }} /></span> by < span style = {
                { color: "#71cd14" }
            } > ColorLib < /span>   <
            div className = "madhu" >


            <
            Icon style = {
                { color: "#797979", fontSize: "40px" }
            }
            type = "facebook"
            theme = "filled" / >


            <
            Icon style = {
                {
                    color: "#797979",
                    fontSize: "40px"
                }
            }
            type = "instagram"
            theme = "filled" / >


            <
            Icon style = {
                { color: "#797979", fontSize: "40px" }
            }
            type = "linkedin"
            theme = "filled" / >


            <
            Icon style = {
                { color: "#797979", fontSize: "40px" }
            }
            type = "skype"
            theme = "filled" / >

            <
            /div>


            <
            /
            footer >

            <
            /
            div >

        );

    }
}
export default Contact