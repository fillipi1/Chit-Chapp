import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSubGreeting } from 'store/actions';
import headerStyles from './Header.scss';
import AppBar from '../Components/AppBar.js'
import Drawer from '../Components/Drawer.js'

class Header extends Component {


  render() {

    return (
      <div>
      
        <Drawer />

      </div>
    );
  }



}


export default Header;
