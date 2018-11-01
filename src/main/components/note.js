import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

class Note extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             hovering : false,
             delete: false
        };
    }

   
    render() {   
        let d = new Date(); 
        let hour = d.getHours();
        let minutes = d.getMinutes();
        let time = (hour) + ':' + (minutes);
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        // let noteColor = ['#6e43c1','#c14343','#43c1c1','#43c14d','#fcff28','#d22b2b','#3ce81d',];        
        // const bColor = noteColor[Math.ceil(Math.random()* 7)];
        let styleIcon = {
            backgroundColor : this.state.hovering ? "#d0cfcf" : '#f5f3f3b8',
        };
        let styleIconDelete = {
            backgroundColor : this.state.hovering ? "red" : 'blue',
        };
        let deleteIcon = this.state.hovering ? 
            <div style={{ display: 'flex', alignSelf: 'center', padding: 0, marginRight: 10}} >
                <div onClick={this.props.deleteMethod} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                    <Icon color = {this.state.delete ? "secondary" : 'primary'}>
                        delete
                    </Icon>
                </div>
            </div>
            : 
            <div style={{ padding: 10, marginTop: 10}}>{}</div>
        ;   
        const handleMouseEnter = () => this.setState({hovering : true});
        const handleMouseLeave = () => this.setState({hovering : false});
        const handleMouseEnter1 = () => this.setState({delete : true});
        const handleMouseLeave1 = () => this.setState({delete : false});  
          return (
            <div style = {styleIcon} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>              
                <div style = {{display: 'flex', justifyContent: 'space-between', padding: 5, }}>
                    <div className = 'note' style={{ styleIconDelete}}>  
                            <div style ={{fontSize: '11px', color: 'gray', display: 'flex', padding:3}}>
                                On {d.getDate()} {month[d.getMonth()]} {d.getFullYear()} {time} 
                            </div>
                            <Grid container style ={{ width: '250px'}}>                   
                                {this.props.text} 
                            </Grid>
                    </div >
                    <div style = {{display: 'flex'}} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>       
                        {deleteIcon}   
                     </div>   
                </div>
                <Divider />
            </div>
        )
  
    }
  }

  export default Note;