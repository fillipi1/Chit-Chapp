import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';



class Messages extends Component {
render () {
  if (!this.props.user){
    return  (
      <Paper style={style.paper}>
    <div align='center'>
    <Typography variant = 'body1' style={style.welcome}>
    WELCOME TO CHIT CHAPP
    Click on a user to open messages
    </Typography>
    </div>
    </Paper>
    )
  }
  return (
    <Paper style={style.paper} >

      <div style={style.block} >
      <Typography variant= 'body1' style={style.message1}>{this.props.user.name}</Typography>
      </div>
      <Typography variant= 'caption' style={style.caption2}>Yesterday 8:30 PM</Typography>

      <div style={style.block2} >
      <Typography variant= 'body1' style={style.message2}>Did you find chewbaca tho?</Typography>
      <Typography variant= 'caption' style={style.caption3}>delivered</Typography>
      </div>

      <div style={style.block} >
      <Typography variant= 'body1' style={style.message1}>No dude!!! Wrong Harisson ford, this is Indiana Jones!</Typography>
      </div>

      <Typography variant= 'caption' style={style.caption2}>Today 11:05 AM</Typography>

      <div style={style.block2} >
      <Typography variant= 'body1' style={style.message2}>O right, my bad.</Typography>
      <Typography variant= 'body1' style={style.message2}>Tell Luke, hes a terrible actor.</Typography>
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
    padding: 70,
    borderRadius: '20px',
    fontSize: '0.8em',
    marginTop: '0px',
    marginBottom: '1.1em',
    marginLeft: '1 em',
    lineHeight: '1.5em',
    fontFamily: 'Roboto, sans-serif',
    maxWidth: 170,
  
    },
  message1:{
  background: '#4b49521f',
  padding: '0.5em 0.9em 0.5em 0.9em',
  borderRadius: '20px',
  fontSize: '0.8em',
  marginBottom: '1.1em',
  marginLeft: '1 em',
  lineHeight: '1.5em',
  fontFamily: 'Roboto, sans-serif',

  },

  message2:{
    background: '#0024d4e3',
  padding: '0.5em 0.9em 0.5em 0.9em',
  borderRadius: '20px',
  fontSize: '0.8em',
  marginBottom: '1.1em',
  marginLeft: '1.1em',
  lineHeight: '1.5em',
  fontFamily: 'Roboto, sans-serif',
  color: '#ffffff',

  },

  block: {
    padding:20,
    maxWidth: 150,
  },

  block2: {
    padding: 20,
    marginLeft: '70%',
    maxWidth: 150,

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
  }

};

function mapStateToProps(state){
  return {
    user: state.activeUser
  }
}
export default connect(mapStateToProps)(Messages);