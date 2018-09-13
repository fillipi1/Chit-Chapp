import React, { Component } from 'react';
import { Paper, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import {compose} from 'redux';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DeleteIcon from '@material-ui/icons/Delete';

class Messages extends Component {

  render () {
  
  return (
    <Paper style={style.paper} >
      <Grid container style = {{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: 13.5}}>
        <Avatar alt="indiana" src= {this.props.user.avatar} style={style.bigAvatar} />
        <Typography variant = 'body2' gutterBottom style = {{marginLeft: 15}}>
        {this.props.user.name}
        </Typography>
        <Typography variant = 'caption' gutterBottom style = {{marginLeft: 10, color: 'purple'}}>
        {this.props.user.phone}
        </Typography>
        <Icon  color = 'primary' style = {{marginLeft: 200}}>search</Icon>
        <SendIcon color = 'primary'/>
        <InboxIcon color = 'primary'/>
        <DeleteIcon color = 'secondary' />
      </Grid>
      <Divider/>
      <div style ={style.messageListStyle}>
        <div style={style.block} >
          <Typography variant= 'body1' style={style.message1}>{this.props.user.chat1}</Typography>
        </div>
          <Typography variant= 'caption' style={style.caption2}>Yesterday 8:30 PM</Typography>
        <div style={style.block2} >
          <Typography variant= 'body1' style={style.message2}>{this.props.user.chat2}</Typography>
        </div>
        <div style={style.block} >
          <Typography variant= 'body1' style={style.message1}>{this.props.user.chat3}</Typography>
        </div>
        <Typography variant= 'caption' style={style.caption2}>Today 11:05 AM</Typography>
        <div style={style.block2} >
          <Typography variant= 'body1' style={style.message2}>{this.props.user.chat4}</Typography>
        </div>
        <div style={style.block2} >
          <Typography variant= 'body1' style={style.message2}>{this.props.user.chat5}</Typography>
        </div>
        <div style={style.block2}>
        <Typography variant= 'caption' style={style.caption3}>delivered</Typography>
        </div>
        <Divider />
        <TextField
            id="textarea"
            placeholder="Type a message..." 
            style={style.textField}
            margin="normal"
            InputProps ={{disableUnderline:true}}
          />
      </div>
    </Paper>

  )
}
}



const style = {
  paper: {
    padding:0, 
    height:'100vh',
    overflow: 'hidden',
  },
  messageListStyle: {
    position: 'relative',
    height: '100vh',
    overflowY: 'scroll',
    paddingBottom: '150px',
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
    fontSize: '0.8em',
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
    marginLeft: '1 em',
    lineHeight: '1.5em',
    fontFamily: 'Roboto, sans-serif',
    color: '#ffffff',
    maxWidth: '50%'
  },

  block: {
    padding:20,
    maxWidth: '50%',
    display: 'flex'
  },

  block2: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  caption1: {
    marginLeft: 30,
  },
  caption2: {
    marginLeft: '50%',
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
  textField: {
    marginRight: 10,
    width: 200,
    padding:10
  },
  bigAvatar: {
    width: 45,
    height: 45,
    marginLeft:5,

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
