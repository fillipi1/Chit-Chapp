import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Panels from './panels';

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
            <div>
                hi
            </div>
        </div>
        )
    }
};

export default dashBoard;