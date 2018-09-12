import React, { Component } from 'react';
import { connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { selectUser } from '../../redux/actions/selectUser';
import { bindActionCreators } from 'redux';
import { Paper } from '@material-ui/core';



class UserList extends Component {
  componentWillMount(){
    this.props.selectUser(this.props.users[0])
  }
  renderList(){
    const maplist = (user) => {
      const active = this.props.activeUser.name === user.name
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
          </Grid>
        </ListItem>
      );
    }
      return this.props.users.map(maplist)
  }

  render() {
    return (
      <div>
        <Paper style={styles.paper}>
        {this.renderList()}
        </Paper>
      </div>
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
    overflow: 'hidden',
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