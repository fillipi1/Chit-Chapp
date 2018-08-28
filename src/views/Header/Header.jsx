import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSubGreeting } from 'store/actions';
import headerStyles from './Header.scss';
import Drawer from '../Components/Drawer.js'

class Header extends Component {

  render() {
    return <Drawer />
  }
}


export default Header;
