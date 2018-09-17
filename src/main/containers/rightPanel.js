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
import noteReducer from '../components/notesReducer'

class Notes extends Component {
  constructor(props){
    super(props);

    this.state = {
      noteText: '',
      notes: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addNote = this.addNote.bind(this);
  }
  handleChange(noteText) {
    this.setState({ noteText: noteText.target.value })
    console.log( 'changed' );
  }
  
  addNote(note) {
    if (this.state.noteTest === '') {return}
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: ''});
    this.textInput.focus();
      console.log('note', this.state)
    
  }

    deleteNote(index) {
      let notesArr = this.state.notes;
      notesArr.splice(index, 1);
      this.setState({ notes: notesArr})
    }
  render() {  
    let notes = this.state.notes.map((val, key) => {
      return <notesReducer key ={key} text ={val}
              deleteMethod = { () => this.deleteNote(key)} />
    })  

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
      <div style = {{display: 'flex', alignItems: 'center', padding: 7.5}}>
        <TextField
            id="textarea"
            label = "Type a note here"
            ref ={((input) => {this.textInput = input})}
            className = 'textInput'
            multiline
            value = {this.state.value}
            InputProps ={{disableUnderline:true}}
            onChange ={this.handleChange}
            onKeyPress = {this.addNote}
            style= {{marginLeft:5, marginBottom: 15}}
          />
      </div>
      <div style = {{display: 'flex', justifyContent: 'flex-end'}}>
        <Button onClick = {() =>this.addNote(this.state.value)}>
          <Typography>add note</Typography>
          <Icon color = 'primary'>
            add
          </Icon>
        </Button>
      </div>
      <Divider />
      <Typography  variant='caption' style={{padding:5}}>
      Shared Photos
      </Typography>
      <div>
      </div>
      <div style = {{padding: 3}}>
        <GridList cellHeight={120} style ={style.gridList} cols={3}>
          {this.props.activeUser.img.map(tile => (
           <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.name} />
           </GridListTile>
         ))}
        </GridList>
      </div>
    </Paper>
  );

  }
}
const style = {
  paper: {
    marginRight: 1,
    overflow: 'hidden',
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
