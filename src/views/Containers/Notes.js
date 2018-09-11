import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import {compose} from 'redux';


class Notes extends Component {

  render() {    
  return (

    <Paper style={style.paper} >
    <Grid container wrap="nowrap" spacing={16}>
        <Grid item >
          <Grid item  lg >
              <Avatar alt="indiana" src= {this.props.user.avatar} style={style.bigAvatar} />
          </Grid>
          <Grid item  lg >
                <Typography >{this.props.user.name}</Typography>
                <Typography variant='caption'>active {this.props.user.active}</Typography>
          </Grid>
        </Grid>
    </Grid>
    <br/>
      <Divider />
    </Paper>
  );

  }
}
const style = {
  paper: {
    padding:0,
    marginRight: 1,
    height:'100vh',
    overflow: 'hidden',
  },
  welcome: {
    padding:5,
  },
  welcome2: {
    marginTop:100,
  },
  avatar: {
    marginTop: 30,
    padding: 50,
  },

  bigAvatar: {
    width: 50,
    height: 50,
    marginTop: 30,
    marginLeft:5,

  },
  block: {
    padding:20,
    maxWidth: 150,
  },

};

function mapStateToProps(state){
  return {
    user: state.activeUser
  }
};

// const enhance = compose(
//   withStyles(styles),
//   connect(mapStateToProps)
// );

export default connect(mapStateToProps)(Notes);
