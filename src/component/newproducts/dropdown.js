import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Menu, Dropdown, Icon } from 'antd';
const menu = (
    <Menu>
     <Menu.Item>
     <Icon type="smile" theme="twoTone" />
     <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
     <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
     </Menu.Item>
    </Menu>
  );
class Drop extends React.Component {
    render() {
        return (
            <div>
            <Dropdown overlay={menu} placement="topCenter">
            <a className="ant-dropdown-link" href="www.google.com">
              Hover me <Icon type="down" />
            </a>
          </Dropdown>
            </div>
        )
    }
}

export default Drop;
