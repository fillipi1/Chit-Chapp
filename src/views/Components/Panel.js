import React  from 'react';
import { Grid, Paper } from '@material-ui/core';
import Users from './User';
import Messages from './Messages';
import Notes from './Notes';

export default props =>
<div>
  <Grid container>
  <Grid item sm={3}>
    <Users />
  </Grid>
  <Grid item sm={6}>
    <Messages />
  </Grid>
  <Grid item sm={3}>
    <Notes />
  </Grid>
</Grid>
</div>
