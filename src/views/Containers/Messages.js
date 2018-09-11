import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {compose} from 'redux';


class Messages extends Component {
render () {
  if (!this.props.user){
    return  (
      <Paper style={style.paper}>
    <div align='center'>
    <Button variant = 'contained' style={style.button} color= 'primary'>
    <Typography style={style.welcome}>
    WELCOME TO CHIT CHAPP,
    click on a user to open messages
    </Typography>
    </Button>
    </div>
    </Paper>
    )
  }
  return (
    <Paper style={style.paper} >

      <div style={style.block} >
      <Typography variant= 'body1' style={style.message1}>{this.props.user.chat1}</Typography>
      </div>
      <Typography variant= 'caption' style={style.caption2}>Yesterday 8:30 PM</Typography>

      <div style={style.block2} >
      <Typography variant= 'body1' style={style.message2}>{this.props.user.chat2}</Typography>
      <Typography variant= 'caption' style={style.caption3}>delivered</Typography>
      </div>

      <div style={style.block} >
      <Typography variant= 'body1' style={style.message1}>{this.props.user.chat3}</Typography>
      </div>

      <Typography variant= 'caption' style={style.caption2}>Today 11:05 AM</Typography>

      <div style={style.block2} >
      <Typography variant= 'body1' style={style.message2}>{this.props.user.chat4}</Typography>
      <Typography variant= 'body1' style={style.message2}>{this.props.user.chat5}</Typography>
      <Typography variant= 'caption' style={style.caption3}>delivered</Typography>
      </div>
    </Paper>

  )
}
}



const style = {
  paper: {
    padding:0, height:'100vh'
  },
  welcome:{
    padding: 30,
    borderRadius: '20px',
    maxWidth: 170,
    color: '#ffffff',
  
    },
  message1:{
  background: '#4b49521f',
  padding: 10,
  borderRadius: '20px',
  fontSize: '13px',
  marginBottom: '1.1em',
  marginLeft: '1 em',
  lineHeight: '1.5em',
  fontFamily: 'Roboto, sans-serif',

  },

  message2:{
    background: '#0024d4e3',
  padding: 10,
  borderRadius: '20px',
  fontSize: '0.8em',
  marginBottom: '1.1em',
  marginLeft: 60,
  lineHeight: '1.5em',
  fontFamily: 'Roboto, sans-serif',
  color: '#ffffff',

  },

  block: {
    padding:20,
    maxWidth: 150,
  },

  block2: {
    padding: 10,
    marginLeft: '60%',
    

  },
  caption1: {
    marginLeft: 30,
  },
  caption2: {
    marginLeft: 230,
  },
  caption3: {
    marginLeft: 90,
  },
  division: {
    padding:10,
    maxWidth:250,
  },
  button: {
    marginTop:50,
  },

};

function mapStateToProps(state){
  return {
    user: state.activeUser
  }
};
const enhance = compose(
  withStyles(style),
  connect(mapStateToProps)
);

export default enhance(Messages);
