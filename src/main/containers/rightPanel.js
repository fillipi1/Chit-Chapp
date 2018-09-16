import React, { Component } from 'react';
import { Paper, Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';

class Notes extends Component {

  render() {    
  return (

    <Paper style={style.paper} >
    <Grid container style = {{diplsay: 'flex' }}>
    <Typography variant = 'headline' style = {{padding : 20}}> 
      Note
    </Typography>
    <Icon style={{marginLeft: 120, alignSelf: 'center'}} color = 'primary'>
              x
            </Icon>
    </Grid>
    <Divider/>
    <Grid container wrap="nowrap" spacing={16}>
        <Grid item style = {{padding: 10}}>
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
      <Typography  variant='caption' style={{padding:5}}>
      options
      </Typography>
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
