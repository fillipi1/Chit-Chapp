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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DeleteIcon from '@material-ui/icons/Delete';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function TabContainer(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class Messages extends Component {
  constructor(props){
    super(props);

    this.state = {
     message: '',
     value: 0
    };
  }
  state = {
    value: 0,
  };

  addMessage () {
    if (this.state.message === '') {return}
    let messageArr = this.props.user.newMessage;
    messageArr.push(this.state.message);
    this.setState({ message: ''});
  }
  handleInput(message) {
    this.setState({ message: message.target.value })
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render () {
    const { classes } = this.props;
    const { value } = this.state;

  return (
    <Paper style={style.paper} >
      <Grid container style = {{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 13.5, wrap: 'noWrap'}}>
      <div style ={{display:'flex', alignItems: 'center'}}>
        <Avatar alt="indiana" src= {this.props.user.avatar} style={style.bigAvatar} />
        <Typography variant = 'body2' gutterBottom style = {{marginLeft: 15}}>
        {this.props.user.name}
        </Typography>
        <Typography variant = 'caption' gutterBottom style = {{marginLeft: 10, color: 'purple'}}>
        {this.props.user.phone}
        </Typography>
        </div>
        <div style = {{justifyContent:'flex-end'}}>
        <IconButton color="primary" style = {{margin: -7}}>
        <Icon  color = 'primary'>search</Icon>
        </IconButton>
        <IconButton color="primary" style = {{margin: -7}}>
          <PhotoCamera />
        </IconButton>
        <IconButton color="primary" style = {{margin: -7}}>
        <InboxIcon color = 'primary'/>
        </IconButton>
        <IconButton color="primary" style = {{margin: -7}}>
        <DeleteIcon color = 'secondary'/>
        </IconButton>
        </div>
      </Grid>
      <Divider/>
      <Tabs
          value={value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          style = {{backgroundColor : '#f3f3f3c2', display: 'flex'}}
        >
          <Tab label="SMS" color="default"/>
          <Tab label="Messenger" />
          <Tab label="Whats app" />
        </Tabs>
        {value === 0 && 
        <TabContainer>
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
            <div style={style.block2} >
              <Typography variant= 'body1' style={style.message2}>{this.props.user.newMessage}</Typography>
            </div>
          </div>
          <Divider />
          <div style = {{display: 'flex', justifyContent: 'space-between'}}>
          <TextField
              id="textarea"
              placeholder="Type a message..." 
              style={style.textField}
              value = {this.state.message}
              onChange = {message => this.handleInput(message)}
              margin="normal"
              InputProps ={{disableUnderline:true}}
            />
            <Button variant="contained" color="primary"  style = {{margin: 15, alginSelf: 'center'}} onClick ={this.addMessage.bind(this)}>
             Send
            </Button>
            </div>
        </TabContainer>}
        {value === 1 && <TabContainer>Messenger</TabContainer>}
        {value === 2 && <TabContainer> Whats App</TabContainer>}
    </Paper>

  )
}
}



const style = {
  paper: {
    overflow: 'hidden',
    overflowY: 'scroll',
    height: 'calc(100vh - 64px)'
  },
  messageListStyle: {
    position: 'relative',
    overflowY: 'scroll',
    height: 'calc(100vh - 265px)'
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
    display: 'flex',
    justifyContent: 'center'
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
    width: 450,
    marginLeft:5
  },
  bigAvatar: {
    width: 45,
    height: 45,
    marginLeft:5,

  },
};

Messages.propTypes = {
  classes: PropTypes.object.isRequired,
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
