import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { bindActionCreators} from 'redux';
import { selectUser } from '../actions/index';



class Notes extends Component {

  render() {

    const style = {
       paper: {
         padding:0,
         marginRight: 1,
         height:'100vh',
         overflow: 'hidden',
     },
     avatar: {
       marginTop: 30,
       padding: 50,
     },

     bigAvatar: {
       width: 50,
       height: 50,
       marginTop: 30,
       marginLeft:5,

     },
     block: {
       padding:20,
       maxWidth: 150,
     },

   };

  return (

  <div>
 <div>{this.props.user.name}</div>
  </div>
  );

  }
}

function mapStateToProps(state) {
  return {
  user: state.activeUser
};
}

function mapDispatchToProps(dispatch) {
return bindActionCreators({selectUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
