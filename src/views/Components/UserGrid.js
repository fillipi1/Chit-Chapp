import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import elon from './pictures/elon.jpg';
import pek from './pictures/pek.jpg';
import indiana from './pictures/indiana.jpg';
import yoshi from './pictures/yoshi.jpg';
import satan from './pictures/satan.jpg';
import jesus from './pictures/jesus.jpg';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 0}px`,
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 0,
    minHeight:635,
  },
  wrapper: {
    maxWidth: 400,
  },
  image: {
    width: 128,
    height: 80,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  button: {
    margin: theme.spacing.unit,
  },
  hover: {
    backgroundColor: "rgba(0,100)",

    textShadow: "0 -1px 0 rgba(0, 0, 0, 0.25)"
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 0,
    padding: 5,
  },

  bigAvatar: {
    width: 50,
    height: 50,

  },

});

const buttonStyle = {
    backgroundColor: "#229ac8",
    backgroundImage: "linear-gradient(to bottom, #23a1d1, #1f90bb)",
    backgroundRepeat: "repeat-x",
    borderColor: "#1f90bb #1f90bb #145e7a",
    color: "#ffffff",
    textShadow: "0 -1px 0 rgba(0, 0, 0, 0.25)"
};


function ComplexGrid(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <Paper className={classes.paper}>
    <br/>
    <Grid container wrap="nowrap" spacing={16}>
        <Grid item >
          <Grid item  lg className={classes.avatar}>
              <Avatar alt="indiana" src= {indiana} className={classes.bigAvatar} />
          </Grid>
        </Grid>
        <Grid item xs>
          <Typography>Indian jones</Typography>
          <Typography variant= 'caption'>I have the crystal skull!!!</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption" className={classes.avatar}>2:40 AM</Typography>
        </Grid>
    </Grid>
    <br/>
      <Divider />

      <br/>
      <Grid container spacing={16} wrap="nowrap">
          <Grid item >
            <Grid item  lg className={classes.avatar}>
                <Avatar alt="pek" src= {pek} className={classes.bigAvatar} />
            </Grid>
          </Grid>
          <Grid item xs>
            <Typography>Pek Pongpaet</Typography>
            <Typography variant= 'caption'> Never buy Lemon bubbly again</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" className={classes.avatar}> 4:13 PM</Typography>
          </Grid>
      </Grid>
      <br/>
      <Divider />

      <br/>
      <Grid container wrap="nowrap" spacing={16}>
          <Grid item >
            <Grid item  lg className={classes.avatar}>
                <Avatar alt="Elon" src= {elon} className={classes.bigAvatar} />
            </Grid>
          </Grid>
          <Grid item xs>
            <Typography>Elon Musk</Typography>
            <Typography variant= 'caption'>Hey wana go to Mars?!</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" className={classes.avatar}>9:29 AM</Typography>
          </Grid>
      </Grid>
      <br/>
        <Divider />

        <br/>
        <Grid container wrap="nowrap" spacing={16}>
            <Grid item >
              <Grid item  lg className={classes.avatar}>
                  <Avatar alt="Yoshi" src= {yoshi} className={classes.bigAvatar} />
              </Grid>
            </Grid>
            <Grid item xs>
              <Typography>Yoshi</Typography>
              <Typography variant= 'caption'> My back hurts, Mario has gotten so fat...</Typography>
            </Grid>
            <Grid item >
              <Typography variant="caption" className={classes.avatar}>11:15 AM</Typography>
            </Grid>
        </Grid>
        <br/>
          <Divider />

          <br/>
          <Grid container wrap="nowrap" spacing={16}>
              <Grid item >
                <Grid item  lg className={classes.avatar}>
                    <Avatar alt="satan" src= {satan} className={classes.bigAvatar} />
                </Grid>
              </Grid>
              <Grid item xs>
                <Typography>Lucifer</Typography>
                <Typography variant= 'caption'>Ill give you $100 mil for your soul. thats my final offer</Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption" className={classes.avatar}>6:66 AM</Typography>
              </Grid>
          </Grid>
          <br/>
          <Divider />

          <br/>
          <Grid container wrap="nowrap" spacing={16}>
              <Grid item >
                <Grid item  lg className={classes.avatar}>
                    <Avatar alt="jesus" src= {jesus} className={classes.bigAvatar} />
                </Grid>
              </Grid>
              <Grid item xs>
                <Typography>Jesus Cristo</Typography>
                <Typography variant= 'caption'> Is he texting you again? dont listen to him! Save your soul!</Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption" className={classes.avatar}> 11:11 PM</Typography>
              </Grid>
          </Grid>
          <br/>




          </Paper>
    </div>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);
