import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import indiana from './pictures/indiana.jpg';


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

    <Paper style={style.paper}>
    <Grid container wrap="nowrap" spacing={16}>
        <Grid item >
          <Grid item  lg >
              <Avatar alt="indiana" src= {indiana} style={style.bigAvatar} />
                <Typography variant='caption'>Active 1 hour ago</Typography>
          </Grid>
          <Grid item  lg >
                <Typography >Indiana Jones</Typography>
          </Grid>
        </Grid>
    </Grid>
    <br/>
      <Divider />
    </Paper>
  );

  }
}

export default Notes;
