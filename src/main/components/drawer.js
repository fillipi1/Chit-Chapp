import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import Panels from './panels';
import fillipi from './pictures/fillipi.jpg';
import {compose} from 'redux';
import { connect} from 'react-redux';


class MiniDrawer extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });

  };

  handleDrawerClose = () => {
    this.setState({ open: false });

  };

  render() {
    const { classes, theme } = this.props;

    return (
        <div className={classes.root}>
          <AppBar
            position="fixed"
            className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
            <Toolbar disableGutters={!this.state.open} style = {{display:'flex', alignItems: 'center', justifyContent: 'space-between',}}>
            <div style = {{display:'flex', alignItems: 'center', justifyContent: 'space-between',}}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, this.state.open && classes.hide)}
                >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                Im•pek•a•ble
              </Typography>
              </div>
              <div style = {{display: 'flex', marginRight: 20}}>
              <Button className={classes.loginButton} > 
                <Avatar alt="Profile" src= {fillipi} className={classes.bigAvatar} /> 
              </Button> 
              </div>
            </Toolbar>
          </AppBar>
          
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <div style={{alignItems: 'center'}}>
            <List>{mailFolderListItems}</List>
            <Divider />
            <List>{otherMailFolderListItems}</List>
            </div>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />   
            <Panels />
          </main>
      </div>
    );
  }
}

  MiniDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  const drawerWidth = 220;

  const styles = theme => ({
    root: {
      flexGrow: 1,
      zIndex: 1,
      overflowX: 'hidden',
      position: 'fixed',
      display: 'flex',

    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1 ,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
    },
    hide: {
      display: 'flex',
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 4px',
      ...theme.mixins.toolbar,
      
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.primary,
      padding: theme.spacing.unit * 0,
    },
      loginButton: {
      color: 'white',
     
    },

    bigAvatar: {
      width: 50,
      height: 50,

    },

  });

  function mapStateToProps(state) {
  
    return {
      users: state.users,
      activeUser: state.activeUser 
    };
  } 

export default compose(withStyles(styles, { withTheme: true }), connect(mapStateToProps))(MiniDrawer);
