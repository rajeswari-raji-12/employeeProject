import React,{Component} from 'react'; 
import { Layout } from 'antd';
import Head from './header';
import {Main} from './eiser header/eiser';
import FeaturedProducts from './featured/featured';
import {Collection} from './collection/collections';
import Newproducts from './newproducts/new products';
import Inspried from './insprieProucts/inspiredproducts';
import Blog from './latestBlog/Blog';
import Contact from './contact/Contact';

const { Header, Content, Footer } = Layout;

class ScreenLayout extends Component{
    render(){
        return(
        <div>
            <Layout className="layout" style={{backgroundColor:'white'}}>
                <Header style={{backgroundColor:'white',position:'fixed',zIndex:99,width:'100%',height:'77px',boxShadow:'0px 3px 16px 0px rgba(0,0,0,0.1)'}}>
                <Head />
                
                </Header>
                <Content style={{ backgroundColor:'white' }}>
                <Main />
                <FeaturedProducts />
                <Collection />
                <Newproducts />
                <Inspried />
                <Blog />
                
                </Content>
                <Footer style={{ padding:0,marginTop: '100px'}}>
                < Contact />
                </Footer>
            </Layout>

        </div>
        )
    }
}
 
 export default ScreenLayout;