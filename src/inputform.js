import React from 'react';
import 'antd/dist/antd.css';
import './inputform.css';
import { Form, Icon, Input, Button, Checkbox,Card } from 'antd';
// import  { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      
      <div className="mar1">
       <h1 style={{color:"#1890ff"}}>Login Form</h1>
      <Form onSubmit={this.handleSubmit} className="login-form">
      <Card hoverable style={{width:"41%"}}>
        <div id="style1">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        </div>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="www.google.com" style={{paddingLeft:67}}>
            Forgot password
          </a><br></br>
        <Button type="primary" htmlType="submit" className="login-form-button" style={
            {paddingLeft:"40%",paddingRight:"43%" }}>
            Log in
          </Button><br></br>
          Or <a href="www.google.com">register now!</a>
        </Form.Item>
        </Card>
      </Form>
     
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
 export default WrappedNormalLoginForm;