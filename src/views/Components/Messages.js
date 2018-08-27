import React from 'react';
import { Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

  const style = {
    paper: {
      padding:0, height:'100vh'
    },
    message1:{
    background: '#4b49521f',
    padding: '0.5em 0.9em 0.5em 0.9em',
    borderRadius: '20px',
    fontSize: '0.8em',
    marginBottom: '1.1em',
    marginLeft: '1.1em',
    lineHeight: '1.5em',
    fontFamily: 'Roboto, sans-serif',

    },

    message2:{
      background: '#0024d4e3',
    padding: '0.5em 0.9em 0.5em 0.9em',
    borderRadius: '20px',
    fontSize: '0.8em',
    marginBottom: '1.1em',
    marginLeft: '1.1em',
    lineHeight: '1.5em',
    fontFamily: 'Roboto, sans-serif',
    color: '#ffffff',

    },

    block: {
      padding:20,
      maxWidth: 150,
    },

    block2: {
      padding: 20,
      marginLeft: 350,
      maxWidth: 150,
    },
    caption1: {
      marginLeft: 30,
    },
    division: {
      padding:10,
      maxWidth:250,
    }

  };

export default props =>

  <Paper style={style.paper} >

    <div style={style.block} >
    <Typography variant= 'body1' style={style.message1}>I found the Crystal Skulls!</Typography>
    <Typography variant= 'caption' style={style.caption1}>Read: 12:31 AM</Typography>
    </div>

    <div style={style.block2} >
    <Typography variant= 'body1' style={style.message2}>Did you find chewbaca though?</Typography>
    <Typography variant= 'caption' style={style.caption1}>Sent: 12:40 AM</Typography>
    </div>

    <div>
    <div style={style.division}>
  <Divider />
  </div>

  </div>

  </Paper>;
