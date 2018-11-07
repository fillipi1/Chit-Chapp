import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import {compose} from 'redux';
import { bindActionCreators } from 'redux';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DeleteIcon from '@material-ui/icons/Delete';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';

class dashBoard extends Component {

    render() {
        return (
        <div>
            <AppBar>
            <Toolbar>
              <IconButton color="inherit" onClick={this.closeScreen} aria-label="Close">
              <Link to='/'>
                <CloseIcon />
                </Link>
              </IconButton>
              <Typography variant="title" color="inherit">
              Back
              </Typography>
            </Toolbar>
          </AppBar>
            <h1>
                Welcome to the store
            </h1>
        <Link to='/'>Back</Link>
        </div>
        )
    }
};

export default dashBoard;