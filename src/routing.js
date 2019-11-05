import React from 'react';
import {Link} from 'react-router';


class App1 extends React.Component {
   render() {
      return (
         <div>
            <ul>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
            </ul>
            {this.props.children}
         </div>
      )
   }
}

export {App1};

class Home extends React.Component {
   render() {
      return (
         <div>
            <h1>Home</h1>
         </div>
      )
   }
}
export {Home} ;

class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About</h1>
         </div>
      )
   }
}
export  {About};

class Contact extends React.Component {
   render() {
      return (
         <div>
            <h1>Contact</h1>
         </div>
      )
   }
}
export {Contact};