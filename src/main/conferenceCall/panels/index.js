import React  from 'react';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import Mic from '@material-ui/icons/keyboardvoice';
import Attachment from '@material-ui/icons/attachment';
import Build from '@material-ui/icons/build';
import Layers from '@material-ui/icons/layers';
import Poll from '@material-ui/icons/personadd';
import List from '@material-ui/core/List';
import Settings from '@material-ui/icons/settings';
import Help from '@material-ui/icons/help';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';


export default () => (
    <div style={{ display: 'flex', overflow: 'hidden', height: 'calc(100vh - 60px)', marginRight: 5, width: '100%' }}>
    <List style={{backgroundColor: '#5e667b', width: '4%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'spaceBetween'}}>
      <div>
        <ListItem button style={styles.iconContainer}>
          <Poll style={styles.icon}/>
        </ListItem>
        <ListItem button style={styles.iconContainer}>
            <Build style={styles.icon}/>
        </ListItem>
        <ListItem button style={styles.iconContainer}>
            <Layers style={styles.icon}/>
        </ListItem>
        <ListItem button style={styles.iconContainer}>
            <Attachment style={styles.icon}/>
        </ListItem>
        <ListItem button style={styles.iconContainer}>
            <Mic style={styles.icon}/>
        </ListItem>
        <ListItem button style={styles.iconContainer2}>
            <Settings style={styles.icon}/>
        </ListItem>
        <ListItem button style={styles.iconContainer}>
            <Help style={styles.icon}/>
        </ListItem>
      </div>
    </List>
    <Grid container>
      <Grid item sm={3}>
      <div style={{ backgroundColor: '#131315', overflow: 'hidden', overflowY: 'scroll', height: 'calc(100vh - 60px)', border: '1px solid grey' }}>
          <div >
          </div>
      </div>
      </Grid>
      <Grid item sm={9}>
        <div style={{ backgroundColor: 'black', overflow: 'hidden', overflowY: 'scroll', height: 'calc(100vh - 60px)', border: '1px solid grey', borderLeftWidth: '0px', width: 999  }}>
            <div>
               
            </div>
        </div>
      </Grid>
    </Grid>
  </div>
);

const styles={
  container: {
      display: 'flex',
      marginTop: 1,
      marginBottom: 5,
  },
  iconContainer: {
      justifyContent: 'center', 
      display: 'flex', 
      width: '100%',
      // marginTop: 10,
      // marginBottom: 20,
  },
  iconContainer2: {
    justifyContent: 'center', 
    display: 'flex', 
    width: '100%',
    marginTop: '500%',
},
  icon: {
      color: 'white',
      marginTop: 1,
      marginBottom: 1,
  }
}