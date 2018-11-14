import React  from 'react';
import { Grid } from '@material-ui/core';
import LeftPanel from '../containers/leftPanel';
import MiddlePanel from '../containers/middlePanel';
import RightPanel from '../containers/rightPanel';
import RenderSubHeader from '../containers/SubHeaderLeft'
import { Paper } from '@material-ui/core';

export default () => (
  <div style = {{display: 'flex', flexWrap: 'wrap', overflow: 'hidden', height: 'calc(100vh -60px)'}}>
    <Grid container>
        <Grid item sm={3}>
        <Paper style={{ overflow: 'hidden', overflowY: 'scroll', height: 'calc(100vh - 65px)'}}>
          <RenderSubHeader/>
         {/* <div style = {{overflowY: 'scroll', overflow: 'hidden', height: 'calc(100vh - 200px)'}}> */}
            <LeftPanel />
          {/* </div> */}
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
