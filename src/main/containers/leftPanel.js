import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Badge from '@material-ui/core/Badge';
import { updateUsers, addUser } from '../redux/actions/updateUser';
import { selectUser } from '../redux/actions/selectUser';
import {firebaseLoadUsers} from '../redux/actions/firebaseLoadUsers';
import contactCenter from '../components/contactCenter';



//UserList class maps created users in the firebase 
//database and diplays them on the left side component.

class UserList extends Component {

  state={
    search: ''
  }

  componentWillReceiveProps(nextProps) {
    //set the active user as the first on the list
    if (Object.keys(this.props.activeUser).length === 0) {
        if (nextProps.usersDataBase.users.length > 0) {
            this.props.selectUser(nextProps.usersDataBase.users[0]);
        }
    }
    //map through firebase database of active users message by phone number and update message history into redux 
    const messagesRef = firebase.database().ref(`messages/${'+' + this.props.activeUser.phone}/all`); 
    messagesRef.on('value', data => {
      const currentMessages = data.val();
      const recentMes = (Object.keys(currentMessages).map(x => currentMessages[x].message));
      const recentRef = firebase.database().ref(`messages/${'+' + nextProps.user.phone}/recentMessage`);
      recentRef.set(recentMes.pop());
    });
};

componentWillMount(){
  //map through firebase database of customers and update it into redux
  var usersRef = firebase.database().ref('customers');
  usersRef.on('value', data =>{
    this.props.firebaseLoadUsers();
  });
};

handleInput(text) {
  this.setState({ search: text.target.value });
};

  renderList() {
    let filteredList = this.props.usersDataBase.users.filter((word) => word.name.toLowerCase().indexOf(this.state.search) !== -1);
    const maplist = (user) => {
      const active = this.props.activeUser.name === user.name; 
      const recentMessageRef = firebase.database().ref(`messages/${'+' + user.phone}`);
      recentMessageRef.on('value', data => {
        let recentMessage = data.val().recentMessage;
        user.recentMessage = recentMessage;
      });
      return (
        <div key={user.id}>
          <ListItem button disableGutters divider 
            onClick={() => this.props.selectUser(user)} style={active ? {backgroundColor:'rgb(237, 237, 237)'} : {}} >
            <Grid item>
              <Avatar alt={user.avatar} src={`https://api.adorable.io/avatars/255/${user.phone}@adorable.png`} style={{ width: 45, height: 45, margin: 5, marginRight: 20 }}/>
            </Grid>
            <Grid item xs  wrap="nowrap" >
              <Typography>{user.name}</Typography>
              <Typography variant='caption' style={styles.userList} noWrap >{user.recentMessage}</Typography>
            </Grid>
            <Grid item>
            </Grid>
          </ListItem>
        </div>
      );
    }
    return filteredList.map(maplist)
  }

  render() {
    
    console.log(this.props.usersDataBase.users)
    if (this.props.usersDataBase.loading === true) { 
      return <p> Loading...</p>;
    }
    if (this.props.usersDataBase === 0) {
      return <p> add user</p>
    } else {
      return (
        <div>
           <div style = {{display: 'flex', alignItems: 'center', padding: 7.5, height: 31}}>
                <Icon  color= 'disabled'>search</Icon>
                <TextField
                    id="textarea"
                    placeholder="Search Conversation"
                    InputProps ={{disableUnderline:true}}
                    style= {{marginLeft:5}}
                    value = {this.state.search}
                    onChange={text => this.handleInput(text)}
                    />
                </div>
                <Divider/>
          <div style={{ height: 'calc(100vh - 185px)', overflowY: 'scroll' }}>
            {this.renderList()}   
          </div>           
        </div>
      );
    }
 
  }
}
  
const styles = {
  userList: {
    padding: 5,
    width: '70%', 
  },
  margin: {
    marginTop: 5,
    marginRight: 30,
    display: 'flex',
    flexDirection: 'row-reverse',
  },
};

function mapStateToProps(state) {
  return {
    users: state.users,
    activeUser: state.activeUser,
    usersDataBase: state.usersDataBase
  };
} 

function mapDispachToProps (dispatch) {
  return bindActionCreators({ selectUser, updateUsers, addUser, firebaseLoadUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(UserList);
