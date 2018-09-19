import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

class Note extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             hovering : false
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
        const styleIcon = {
            backgroundColor : this.state.hovering ? "red" : undefined
        };
        const handleMouseEnter = () => this.setState({hovering : true});
        const handleMouseLeave = () => this.setState({hovering : false});
        
          return (
            <div style = {{ backgroundColor: styleIcon, onMouseEnter:{handleMouseEnter}, onMouseLeave:{handleMouseLeave}}}>              
                <div style = {{display: 'flex', justifyContent: 'space-between', padding:5}}>
                    <div className = 'note' style={{ }}>  
                            <div style ={{fontSize: '11px', color: 'gray', display: 'flex'}}>
                                On {d.getDate()} {month[d.getMonth()]} {d.getFullYear()} {time} 
                            </div>         
                        {this.props.text} 
                    </div>
                    <div style={{ display: 'flex', alignSelf: 'center'}}>
                        <IconButton onClick={this.props.deleteMethod}>
                            <Icon color = 'primary'>
                            delete
                            </Icon>
                        </IconButton>
                    </div>
                </div>
                <Divider />
            </div>
        )
  
    }
  }

  export default Note;