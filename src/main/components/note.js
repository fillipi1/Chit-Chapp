import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

class Note extends Component {
  
    render() {    
        return (
            <div style = {{backgroundColor : '#f3f3f3c2'}}>              
                <div style = {{display: 'flex', justifyContent: 'space-between', padding:5, }}>
                    <div className = 'note' style={{ display: 'flex', alignSelf: 'center'}}>            
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