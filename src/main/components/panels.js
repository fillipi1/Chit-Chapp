import React  from 'react';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import LeftPanel from '../containers/leftPanel';
import MiddlePanel from '../containers/middlePanel';
import RightPanel from '../containers/rightPanel';
import RenderSubHeader from '../containers/SubHeaderLeft';

export default () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden', height: 'calc(100vh -60px)' }}>
    <Grid container>
        <Grid item sm={3}>
        <Paper style={{ overflow: 'hidden', overflowY: 'scroll', height: 'calc(100vh - 65px)' }}>
            <RenderSubHeader />
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
