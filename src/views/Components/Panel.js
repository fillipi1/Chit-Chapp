import React  from 'react';
import { Grid } from '@material-ui/core';
import UserList from '../Containers/UserList';
import Messages from '../Containers/Messages';
import Notes from '../Containers/Notes';
import Divider from '@material-ui/core/Divider';

export default () => (
  <div>
    <Grid container>
      <Grid item sm={3}>
        <UserList />
      </Grid>
      <Grid item sm={6}>
        <Messages />
      </Grid>
      <Grid item sm={3}>
        <Notes />
      </Grid>
    </Grid>
  </div>
);
