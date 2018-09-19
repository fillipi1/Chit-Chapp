import React, { Component } from 'react';
import { Paper, Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Note from '../components/note'

class Notes extends Component {
  constructor(props){
    super(props);

    this.state = {
      noteText: '',
      notes: [],
      image: {},
    };
  
  }
  handleChange(noteText) {
    this.setState({ noteText: noteText.target.value })
  }
  addNote() {
    if (this.state.noteText === '') {return}
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: ''});
  }
  // handleKeyPress = (event) => {
  //   if (event.key === 'Enter'){
  //   let notesArr = this.state.notes;
  //   notesArr.push(this.state.noteText);
  //   this.setState({ noteText: ''});
  //   }
 //}
    deleteNote(index) {
      let notesArr = this.state.notes;
      notesArr.splice(index, 1);
      this.setState({ notes: notesArr})
    }
  render() {  
    let notes = this.state.notes.map((val, key) => {
      return <Note key ={key} text ={val}
              deleteMethod = { () => this.deleteNote(key)} />
    })  

    const imageClick = () => {
      let selectImage = this.props.activeUser.img.map(photo => photo.img);
      this.setState({image : selectImage}, () => {
        console.log(this.state.image)
      })
      
    } 
  return (
    <Paper style={style.paper} >
      <Grid container style = {{diplsay: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant = 'headline' style = {{padding : 20}}> 
          Note
        </Typography>
        <IconButton>
          <Icon style={{ alignSelf: 'center'}} color = 'primary'>
                    delete
          </Icon>
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
        <Typography variant = 'body2' style = {{display: 'flex', flexDirection: 'column-reverse'}}>
          {notes} 
        </Typography>
      </div>
      <Divider/>
      <div>
        <Typography  variant='caption' style={{padding:5}}>
        Shared Photos
        </Typography>
        <div style = {{padding: 3}}>
          <GridList cellHeight={120} style ={style.gridList} cols={3}>
            {this.props.activeUser.img.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.name} onClick = {() => imageClick()} />
            </GridListTile>
          ))}
          </GridList>
        </div>
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
  gridList: {
    width: 300,
    height: 250,
  },

};

function mapStateToProps(state){
  return {
    users: state.users,
    activeUser: state.activeUser, 
  }
};

export default connect(mapStateToProps)(Notes);
