import React from 'react';
import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import pek from './pictures/pek.jpg';
import jesus from './pictures/jesus.jpg';
import buddha from './pictures/Budha.jpg';
import indiana from './pictures/indiana.jpg';
import elon from './pictures/elon.jpg';
import yoshi from './pictures/yoshi.jpg';
import Divider from '@material-ui/core/Divider';

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
  paper: { marginRight: 1, marginTop: 0,  height:'85vh' }
};

function ImageAvatars(props) {
  const { classes } = props;
  return (

    <Paper style={style.paper} >

    <div className={classes.columns}>
    <br />
      <Avatar alt="Pek" src= {pek} className={classNames(classes.avatar, classes.bigAvatar)}/>
      <Divider />
      <Avatar alt="indiana" src= {indiana} className={classNames(classes.avatar, classes.bigAvatar)} />
      <Divider />
      <Avatar alt="indiana" src= {elon} className={classNames(classes.avatar, classes.bigAvatar)} />
      <Divider />
      <Avatar alt="yoshi" src= {yoshi} className={classNames(classes.avatar, classes.bigAvatar)} />
      <Divider />
      <Avatar alt="jesus" src= {jesus} className={classNames(classes.avatar, classes.bigAvatar)} />
      <Divider />
      <Avatar alt="buddha" src= {buddha} className={classNames(classes.avatar, classes.bigAvatar)} />

    </div>

    </Paper>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ImageAvatars);
