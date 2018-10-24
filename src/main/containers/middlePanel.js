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
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

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

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
class Messages extends Component {
  constructor(props){
    super(props);

    this.state = {
     message: '',
     value: 0,
     open: false
    };
  }
  
  handleClickOpen = () => {
    this.setState({ open: true });
    console.log(this.state.open)
  };

  handleClose = () => {
    this.setState({ open1: false });
  };
  addMessage () {
    let reqBody = {
      text : this.state.message,
      phone: this.props.user.phone
    }
    if (this.state.message === '') {return}
    let messageArr = this.props.user.newMessage;
    messageArr.push(this.state.message);
    this.setState({ message: ''});

    fetch('http://localhost:8081/sendsms', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
       
      },
      body: JSON.stringify(reqBody),
    }).then((res) => res.json()).then((json) => {
      console.log(json);
    }).catch(function (e) {
      console.log(e)
    })
  }
  handleInput(message) {
    this.setState({ message: message.target.value })
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  fetchMessage = () => {
    // fetch('https://af88d9c9.ngrok.io/records')
    //   .then(response => response.json())
    //   .then(response => response)

    fetch('https://af88d9c9.ngrok.io/records')
    .then(function(response){
      return response.json()
    })
    .then(realData => {
      let messageArr = this.props.user.newMessage;
      messageArr.push(realData.person);
      this.setState({ message: ''});
    })
  }
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
            <div style={{display: 'flex', flexDirection: 'column',alignItems: 'flex-end', padding: 10}} >
              {this.props.user.newMessage.map(text =>(
              <Typography variant= 'body1' style={style.message2}>
              {text}
              </Typography>
              ))}
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
        {value === 1 && <TabContainer>
          <Button onClick={this.handleClickOpen}>>Open full-screen dialog</Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
                 <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Sound
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem>
          </List>
        </Dialog>
        </TabContainer>}
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
    marginRight: 10,
    marginTop: -10
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
