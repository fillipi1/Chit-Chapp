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


class UserList extends Component {
  
  componentWillMount(){
    this.props.selectUser(this.props.users[0])
  }
  renderSubHeader(){
    return (
      <div>
        <Grid item>
          <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: 20}}>
            <Typography variant = 'headline'>
              Conversation
            </Typography>
            <Icon style={{marginLeft: 100}} color = 'primary'>
              add
            </Icon>
          </div>
        </Grid>
          <Divider/>
          <div style = {{display: 'flex', alignItems: 'center', padding: 10}}>
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
        <ListItem button disableGutters divider key={user.id}
        onClick={() => this.props.selectUser(user)} style={active ? {backgroundColor:'rgb(237, 237, 237)'} : {}} >
          <Grid item>
            <Avatar alt={user.avatar} src= {user.avatar} style={styles.bigAvatar}/>
          </Grid>
          <Grid item xs>
            <Typography>{user.name}</Typography>
            <Typography variant= 'caption' style={styles.avatar}>{user.message}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" style={styles.avatar}>{user.time}</Typography>
             {count ? <Badge style={styles.margin} badgeContent={user.badge} color="secondary"></Badge> : false}  
          </Grid>
        </ListItem>
      );
    }
      return this.props.users.map(maplist)
  }

  render() {
    return (
      <Paper style={{height:'100vh', overflow: 'hidden',}}>
        {this.renderSubHeader()}
        {this.renderList()}        
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
    marginRight: 15,
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