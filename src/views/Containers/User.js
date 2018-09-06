import React, { Component } from 'react';
import { connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { selectUser } from '../../fillipi-redux/actions/selectUser';
import { compose, bindActionCreators } from 'redux';




class UserList extends Component {
  renderList(){
    const maplist = (user) => {
      return (
      <ListItem button disableGutters divider key={user.name}
      onClick={() => this.props.selectUser(user)}>
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
        {this.renderList()}
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
};

function mapStateToProps(state) {
  
  return {
    users: state.users,
  };
} 

function mapDispachToProps (dispatch) {
  return bindActionCreators({selectUser}, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(UserList);
