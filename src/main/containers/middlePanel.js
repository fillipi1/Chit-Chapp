import React, { Component } from 'react';
import { Paper, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import {compose} from 'redux';
import { bindActionCreators } from 'redux';
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
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import firebase from '../firebase';
import {updateUsers} from '../redux/actions/updateUser';
import {updateMessages} from '../redux/actions/updateMessages';

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
  componentDidMount(){
    var messagesRef = firebase.database().ref('messages');
    var usersRef = firebase.database().ref('USERS');
    messagesRef.on('value', data => {
      console.log(Object.keys(data.val()).map(x => data.val()[x]))
      var messages = (Object.keys(data.val()).map(x => data.val()[x]));
      var messages2 = (Object.keys(data.val()).map(x => data.val()[x].Text));
      this.props.user.messages.push(messages.pop());
      this.props.user.recentMessage = (messages2.pop());
      this.props.updateMessages(Object.keys(data.val()).map(x => data.val()[x]))
      this.setState({rerender:''})
    });
    usersRef.on('value', data =>{
      this.props.updateUsers(Object.keys(data.val()).map(x => data.val()[x]))
    })
  }
  constructor(props){
    super(props);
    this.state = {
     message: '',
     value: 0,
     open: false,
    };
  }
  openScreen = () =>{
    this.setState({open: true})
  }
  closeScreen = () => {
    this.setState({ open: false });
  }
  recievedMessage(){
    console.log(this.props.usersDataBase, this.props.user, this.props.loggedInAs)
  };
  addMessage (e) {
    // register sent messaged from dashboard into firebase
    e.preventDefault();
    const outText = firebase.database().ref('messages');
    const item = {
      id: 'sent',
      Text: this.state.message,
    }
    outText.push(item);
    //input message into dashboard
    if (this.state.message === '') {return}
    let messageArr = this.props.messagesDataBase;
    messageArr.push({id: 'sent', Text: this.state.message});
    this.setState({ message: ''});
    //send input message to backend server-then sent to phone number
    let reqBody = {
      text : this.state.message,
      phone: this.props.user.phone
    }
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
  messageRender(text){
    if (text.id === 'received'){return {
      background: '#4b49521f',
      padding: 10,
      borderRadius: '20px',
      fontSize: '0.8em',
      marginBottom: '1.1em',
      marginLeft: '1 em',
      lineHeight: '1.5em',
      fontFamily: 'Roboto, sans-serif',
      maxWidth: '50%'
    }
  } else {
    return {
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
    }
  }
  }
  messagePos(text){
    if (text.id === 'sent'){return {
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'flex-end', 
      padding: 10
      }
    } else {
    return {
      display: 'flex', 
      padding: 10
    }
  }
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
        {this.state.open && <Dialog
          fullScreen
          open={true}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
                 <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.closeScreen} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Close
              </Typography>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem>
            <img src={this.state.image}/>
            </ListItem>
          </List>
        </Dialog>}
        </div>
        <div style = {{justifyContent:'flex-end'}}>
        <IconButton color="primary" style = {{margin: -7}} onClick={this.openScreen}>
        <Icon  color = 'primary' onClick={this.openScreen}>search</Icon>
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
          <div >
            {this.props.messagesDataBase.map(text =>(
              <div style={this.messagePos(text)} key={text.id} >
            <Typography variant= 'body1' style= {this.messageRender(text)}>
            {text.Text}
            </Typography>
            </div>
            ))}
          </div>
          </div>
          <Divider />
          <div style = {{display: 'flex', justifyContent: 'space-between'}}>
          <TextField
              id="textarea"
              placeholder="Type a message..." 
              style={{marginRight: 10, width: 450, marginLeft:5}}
              value = {this.state.message}
              onChange = {message => this.handleInput(message)}
              margin="normal"
              InputProps ={{disableUnderline:true}}
            />
            <Button variant="contained" color="primary"  style = {{margin: 15, alginSelf: 'center'}} onClick ={this.addMessage.bind(this)}>
             Send
            </Button>
            <Button variant="contained" color="secondary"  style = {{margin: 15, alginSelf: 'center'}} onClick ={this.recievedMessage.bind(this)}>
             Console.Log
            </Button>
            </div>
        </TabContainer>}
        {value === 1 && <TabContainer>
          <Button onClick={this.handleClickOpen}>>Open full-screen dialog</Button>

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
    user: state.activeUser,
    usersDataBase: state.usersDataBase,
    messagesDataBase: state.messagesDataBase,
    loggedInAs: state.loggedIn
  }
};

function mapDispachToProps (dispatch) {
  return bindActionCreators({ updateUsers, updateMessages } , dispatch);
}

const enhance = compose(
  withStyles(style),
  connect(mapStateToProps, mapDispachToProps)
);

export default enhance(Messages);
