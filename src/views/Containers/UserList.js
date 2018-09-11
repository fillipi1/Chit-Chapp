import React, { Component } from 'react';
import { connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { selectUser } from '../../fillipi-redux/actions/selectUser';
import { bindActionCreators } from 'redux';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';



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
        <div>
          
          {/* <TextField
        defaultValue="react-bootstrap"
        label="Search Chit Chapp"
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
        }}
        style={styles.bootstrapInput}
        InputLabelProps={{
          shrink: true,
        }}
      />
          <Divider /> */}
          </div>
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
//   bootstrapInput: {
//     borderRadius: 4,
//     backgroundColor: theme.palette.common.white,
//     border: '1px solid #ced4da',
//     fontSize: 16,
//     padding: '10px 12px',
//     width: 'calc(100% - 24px)',
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:focus': {
//       borderColor: '#80bdff',
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//     },
// },
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