import React  from 'react';
import { Grid } from '@material-ui/core';
import LeftPanel from '../containers/leftPanel';
import MiddlePanel from '../containers/middlePanel';
import RightPanel from '../containers/rightPanel';
import Divider from '@material-ui/core/Divider';
import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export default () => (
  <div>
    <Grid container>
      <Grid item sm={3}>
      <Paper style={{padding:0,height:'100vh', overflow: 'hidden',}}>
      <TextField
          id="textarea"
          placeholder="Search Conversation" 
          margin="normal"
          InputProps ={{disableUnderline:true}}
        />
      <Divider/>
        <LeftPanel />
        </Paper>
      </Grid>
      <Grid item sm={6}>
        <MiddlePanel />
      </Grid>
      <Grid item sm={3}>
        <RightPanel />
      </Grid>
    </Grid>
  </div>
);
