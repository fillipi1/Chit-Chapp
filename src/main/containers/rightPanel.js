import React, { Component } from 'react';
import { Paper, Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { selectImage } from '../redux/actions/selectImage';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Note from '../components/note';
import { bindActionCreators } from 'redux';
import Dialog from '@material-ui/core/Dialog';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
/*
The Notes component creates a new note typography and addes it into a local state. 
It is displayed on the right side of the dashboard. Below the notes are images that open a full screen
dialiog.
*/
class Notes extends Component { 
    state = {
      open: false,
      noteText: '',
      notes: [],
      image: {},     
    };
    
  handleChange(noteText) {
    this.setState({ noteText: noteText.target.value })
  };

  addNote() {
    if (this.state.noteText === '') {return}
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: ''});
  };

    deleteNote(index) {
      let notesArr = this.state.notes;
      notesArr.splice(index, 1);
      this.setState({ notes: notesArr})
    };

     handleClickOpen = () => {
      this.setState({ open: true });
    };
  
     handleClose = () => {
      this.setState({ open: false });
    };

  render() {  
    const { classes } = this.props;
    let notes = this.state.notes.map((val, key) => {
      return <Note key ={key} text ={val} deleteMethod = { () => this.deleteNote(key)} />
    })  

    const imageClick = (tile) => {
      this.setState({image : tile.img}, () => {
      }); 
      this.setState({ open: true }, () => {
  
      });    
    } 

    return (
      <Paper style={style.paper} >
        <Grid container style = {{diplsay: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant = 'headline' style = {{padding : 20, height: 27}}> 
            Note
          </Typography>
          <IconButton>
            <div style={{ alignSelf: 'center', color: 'blue'}}>
              <CloseIcon/>
            </div>
          </IconButton>
        </Grid>
        <Divider/> 
          <div style = {{display: 'flex', alignItems: 'center', padding: 4}}>
            <TextField
                id="textarea"
                label = "Type a note here"            
                className = 'textInput'
                multiline
                value = {this.state.noteText}
                InputProps = {{disableUnderline:true}}
                onChange = {noteText => this.handleChange(noteText)}
                style = {{marginLeft:5, marginBottom: 15}}
              //onKeyPress = {this.handleKeyPress.bind(this)}
              />
          </div>
          <div style = {{display: 'flex', justifyContent: 'flex-end'}}>
            <Button onClick = {this.addNote.bind(this)}>
              <Typography>add note</Typography>
              <Icon color = 'primary'>
                add
              </Icon>
            </Button>       
          </div>
          <Divider />
        <div style = {{ height: 200,overflowY: 'scroll'}}>
          <div variant = 'body2' style = {{display: 'flex', flexDirection: 'column-reverse'}}>
            {notes} 
          </div>
        </div>
        <Divider/>
        <div>
          <Typography  variant='caption' style={{padding:5}}>
          Shared Photos
          </Typography>
          {this.state.open && <Dialog
            fullScreen
            open={true}
            onClose={this.handleClose}
            TransitionComponent={Transition}
          >
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                  <CloseIcon />
                </IconButton>
                <Typography variant="title" color="inherit" className={classes.flex}>
                  Close
                </Typography>
                <Button color="inherit"   onClick = {() => alert('saved')}>
                  Save photo
                </Button>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem>
              <img src={this.state.image}/>
              </ListItem>
            </List>
          </Dialog>}
        </div>
      </Paper>
    );

  }
}
const style = {
  paper: {
    marginRight: 1,
    overflowY: 'scroll',
    overflowX: 'hidden',
    height: 'calc(100vh - 64px)'
  },
};
function mapStateToProps(state){
  return {
    users: state.users,
    activeUser: state.activeUser, 
    image: state.image
  }
};
function mapDispachToProps (dispatch) {
  return bindActionCreators({ selectImage: selectImage }, dispatch);
}
Notes.propTypes = {
  classes: PropTypes.object.isRequired,
};
const enhance = compose(
  withStyles(style),
  connect(mapStateToProps, mapDispachToProps)
);

export default enhance(Notes);
