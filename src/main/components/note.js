import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

class Note extends Component {
  
    render() {   
        let d = new Date(); 
        let hour = d.getHours();
        let minutes = d.getMinutes();
        let time = (hour) + ':' + (minutes);
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
        return (
            <div style = {{backgroundColor : '#f3f3f3c2'}}>              
                <div style = {{display: 'flex', justifyContent: 'space-between', padding:5, }}>
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