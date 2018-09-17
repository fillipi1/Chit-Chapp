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

class Notes extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos: [],
    }
  }
  render() {    
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
            multiline
            InputProps ={{disableUnderline:true}}
            style= {{marginLeft:5, marginBottom: 15}}
            onSubmit = {() => this.addNote(this.state.value)}
          />
      </div>
      <div style = {{display: 'flex', justifyContent: 'flex-end'}}>
        <Button>
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
