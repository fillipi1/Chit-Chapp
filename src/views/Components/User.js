import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import elon from './pictures/elon.jpg';
import pek from './pictures/pek.jpg';
import indiana from './pictures/indiana.jpg';
import yoshi from './pictures/yoshi.jpg';
import satan from './pictures/satan.jpg';
import jesus from './pictures/jesus.jpg';
import userList from './userList';
import { selectUser} from '../actions/index';


// const styles = theme => ({
//   root: {
//     overflow: 'hidden',
//   },
//   root1: {
//
//   width: '100%',
//   maxWidth: 360,
//   backgroundColor: theme.palette.background,
//   },
//   row: {
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   avatar: {
//   padding: 5,
//   },
//   bigAvatar: {
//     width: 50,
//     height: 50,
//     margin:5,
//
//   },
//
// });



function ComplexGrid() {


        return (
        <div >

          {userList.map(renderList)}

        </div>
      );

      function renderList(user) {

        return (
          <ListItem
          button disableGutters divider
          key={user.name}
          onClick = {() => this.props.selectUser(user)}
          >
          <Grid item >
                 <Avatar alt={user.avatar} src= {user.avatar} />
               </Grid>
               <Grid item xs>
                 <Typography>{user.name}</Typography>
                 <Typography variant= 'caption'>{user.message}</Typography>
               </Grid>
               <Grid item>
                 <Typography variant="caption" >{user.time}</Typography>
               </Grid>
           </ListItem>
         );

      }

    };


  function mapStateToProps(state) {

    return {
      users: state.users,
    };

  }

  function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectUser}, dispatch);
  }

// ComplexGrid.propTypes = {
//   classes: PropTypes.object.isRequired,
// };



export default connect(mapStateToProps, mapDispatchToProps)(ComplexGrid);
