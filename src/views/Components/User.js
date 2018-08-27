import React from 'react';
import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import pek from './pictures/pek.jpg';
import indiana from './pictures/indiana.jpg';
import elon from './pictures/elon.jpg';
import yoshi from './pictures/yoshi.jpg';
import UserGrid from './UserGrid.js';


const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },

  bigAvatar: {
    width: 60,
    height: 60,

  },
};


const style = {
  paper: { marginRight: 1, marginTop:0,  height:'100vh', alignContent: 'center' }
};

function ImageAvatars(props) {
  const { classes } = props;
  return (


    <Grid container spacing={16}>

      <UserGrid />

      </Grid>


  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ImageAvatars);
