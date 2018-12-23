import React, { Component }  from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Typography from '@material-ui/core/Typography';
import Mic from '@material-ui/icons/keyboardvoice';
import Avatar from '@material-ui/core/Avatar'
import Attachment from '@material-ui/icons/attachment';
import Layers from '@material-ui/icons/layers';
import Poll from '@material-ui/icons/personadd';
import List from '@material-ui/core/List';
import Settings from '@material-ui/icons/settings';
import Help from '@material-ui/icons/help';
import {firebaseLoadUsers} from '../../redux/actions/firebaseLoadUsers';
import { selectUser } from '../../redux/actions/selectUser';
import blue from '@material-ui/core/colors/blue';
import { ListItem, ListItemIcon, ListItemText, ListItemAvatar } from '@material-ui/core';
import SimpleDialog from './dialog';
import PhoneIcon from '@material-ui/icons/Phone';
import Callend from '@material-ui/icons/callend';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GoogleMap from './map'



class Panels extends Component {
  
  state = {
    open: false,
    users: []
  };

  componentWillMount(){
    //map through firebase database of customers and update it into redux
    var usersRef = firebase.database().ref('customers');
    usersRef.on('value', data =>{
      this.props.firebaseLoadUsers();
    });
  };

  handleClickOpen = () => {
    console.log('opened')
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  makeCall() {
    console.log('called conferene')
    const reqBody={
      phone: this.props.activeuser.phone
    };
    fetch('http://localhost:8081/call', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",    
      },
      body: JSON.stringify(reqBody),
    }).then((res) => res.json()).then((json) => {
      console.log(json);
    })
  }

  renderList() {
    const maplist = (user) => {
      console.log(user)
      const active = this.props.activeUser.name === user.user.name; 
      return (
        <div key={user.id}>
          <ListItem button disableGutters divider 
            onClick={() => this.props.selectUser(user.user)} style={active ? {backgroundColor:'#39393a'} : {backgroundColor:'#2e3d61'}} >
            <Grid item>
              <Avatar alt={user.user.avatar} src={`https://api.adorable.io/avatars/255/${user.user.phone}@adorable.png`} style={{ width: 45, height: 45, margin: 5, marginRight: 20 }}/>
            </Grid>
            <Grid item xs  wrap="nowrap" >
              <Typography style={{color: 'white'}}>{user.user.name}</Typography>
              <Typography style={{color: 'white'}}>{user.user.phone}</Typography>
            </Grid>
            <IconButton style={{marginRight: 5, color: 'green'}} onClick={this.makeCall.bind(this)}>
              <PhoneIcon  />
            </IconButton>
            <IconButton style={{color: 'red', marginRight: 5}}>
              <Callend />
            </IconButton>
            <Grid item>
            </Grid>
          </ListItem>
        </div>
      );
    }
    return this.props.conferenceusers.map(maplist)
  }


  render() {
    console.log(this.props.activeUser)
    const data = this.props.usersDataBase.users.map(x=> x.name)
    const { classes, onClose, selectedValue, ...other } = this.props;
      return (
        <div style={{ display: 'flex', overflow: 'hidden', height: 'calc(100vh - 60px)', marginRight: 5, width: '100%' }}>
        <List style={{backgroundColor: '#5e667b', width: '4%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'spaceBetween'}}>
          <div>
            <ListItem button style={styles.iconContainer} onClick={this.handleClickOpen}>
              <Poll style={styles.icon}/>
            </ListItem>
            <ListItem button style={styles.iconContainer}>
                <PhoneIcon style={styles.icon}/>
            </ListItem>
            <ListItem button style={styles.iconContainer}>
                <Layers style={styles.icon}/>
            </ListItem>
            <ListItem button style={styles.iconContainer}>
                <Attachment style={styles.icon}/>
            </ListItem>
            <ListItem button style={styles.iconContainer}>
                <Mic style={styles.icon}/>
            </ListItem>
            <ListItem button style={styles.iconContainer2}>
                <Settings style={styles.icon}/>
            </ListItem>
            <ListItem button style={styles.iconContainer}>
                <Help style={styles.icon}/>
            </ListItem>
          </div>
        </List>
        <Grid container>
          <Grid item sm={3}>
          <div style={{ backgroundColor: '#131315', overflow: 'hidden', overflowY: 'scroll', height: 'calc(100vh - 60px)', border: '1px solid grey' }}>
              <div style={{maxHeight: '100%', overflow: 'hidden', overflowY: 'scroll'}}>
                {this.renderList()}
              </div>
          </div>
          {/* <div style={{height: '40%' }} > */}
            {/* <GoogleMap lon={-121.893028} lat={37.335480}  style={{height: '200px', width: '250px'}} /> */}
          {/* </div> */}
          </Grid>
          <Grid item sm={9}>
            <div style={{ backgroundColor: 'black', overflow: 'hidden', overflowY: 'scroll', height: 'calc(100vh - 60px)', border: '1px solid grey', borderLeftWidth: '0px', width: 999  }}>
              <div>
                <SimpleDialog
                  open={this.state.open}
                  onClose={this.handleClose}
                />
               </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}



const styles={
  container: {
      display: 'flex',
      marginTop: 1,
      marginBottom: 5,
  },
  iconContainer: {
      justifyContent: 'center', 
      display: 'flex', 
      width: '100%',
      // marginTop: 10,
      // marginBottom: 20,
  },
  iconContainer2: {
    justifyContent: 'center', 
    display: 'flex', 
    width: '100%',
    marginTop: '500%',
},
  icon: {
      color: 'white',
      marginTop: 1,
      marginBottom: 1,
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
}


function mapStateToProps(state) {
  return {
    users: state.users,
    activeuser: state.activeUser,
    usersDataBase: state.usersDataBase,
    conferenceusers: state.conferenceUsers,
    activeUser: state.activeUser
  };
};

function mapDispachToProps (dispatch) {
  return bindActionCreators({ firebaseLoadUsers, selectUser }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Panels);