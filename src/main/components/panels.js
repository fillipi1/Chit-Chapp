import React  from 'react';
import { Grid } from '@material-ui/core';
import LeftPanel from '../containers/leftPanel';
import MiddlePanel from '../containers/middlePanel';
import RightPanel from '../containers/rightPanel';

export default () => (
  <div style = {{display: 'flex', flexWrap: 'wrap', overflow: 'hidden', height: 'calc(100vh - 64px)'}}>
     <Grid container>
        <Grid item sm={3}>
          <LeftPanel />
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
