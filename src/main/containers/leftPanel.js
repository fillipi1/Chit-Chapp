import React, { Component } from 'react';
import { connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { selectUser } from '../redux/actions/selectUser';
import { bindActionCreators } from 'redux';
import { Paper } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

class UserList extends Component {
  
  componentWillMount(){
    this.props.selectUser(this.props.users[0])
  }
  renderSubHeader(){
    return (
      <div>
        <Grid item>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12}}>
            <Typography variant = 'headline'>
              Conversation
            </Typography>
            <IconButton>
            <Icon color = 'primary'>
              add
            </Icon>
            </IconButton>
          </div>
        </Grid>
          <Divider/>
          <div style = {{display: 'flex', alignItems: 'center', padding: 7.5}}>
            <Icon  color= 'disabled'>search</Icon>
            <TextField
                id="textarea"
                placeholder="Search Conversation"
                InputProps ={{disableUnderline:true}}
                style= {{marginLeft:5}}
              />
            </div>
            <Divider/>
      </div>
    )
  }

  renderList(){
    const maplist = (user) => {
      const active = this.props.activeUser.name === user.name;
      const count =  user.badge  > 0 ;     
        
      return (
        <div style = {{}}>
          <ListItem button disableGutters divider key={user.id}
          onClick={() => this.props.selectUser(user)} style={active ? {backgroundColor:'rgb(237, 237, 237)'} : {}} >
            <Grid item>
              <Avatar alt={user.avatar} src= {user.avatar} style={styles.bigAvatar}/>
            </Grid>
            <Grid item xs wrap="nowrap" >
              <Typography>{user.name}</Typography>
              <Typography variant= 'caption' style={styles.avatar} noWrap>{user.message}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" style={{ padding: 5, display: 'flex',flexDirection: 'row-reverse', marginRight:5, justifyContent:'flex-start'}}>{user.time}</Typography>
              {count ? <Badge style={styles.margin} badgeContent={user.badge} color="secondary"></Badge> : false}  
            </Grid>
          </ListItem>
        </div>
      );
    }
      return this.props.users.map(maplist)
  }

  render() {
    return (
      <Paper style={{ overflow: 'hidden', height: 'calc(100vh - 64px)'}}>
        {this.renderSubHeader()}
        <div style = {{height: 'calc(100vh - 185px)', overflowY: 'scroll'}}>
          {this.renderList()}   
        </div>     
      </Paper>
    );
  }
};
  
const styles = {
  root: {
    overflow: 'hidden',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    padding: 5,
    width: 150,
    
  },
  bigAvatar: {
    width: 50,
    height: 50,
    margin:5,
  },
  paper: {
    padding:0, 
    height:'100vh',
    overflow: 'hidden'
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
    activeUser: state.activeUser 
  };
} 

function mapDispachToProps (dispatch) {
  return bindActionCreators({ selectUser: selectUser }, dispatch);
}


export default connect(mapStateToProps, mapDispachToProps)(UserList);