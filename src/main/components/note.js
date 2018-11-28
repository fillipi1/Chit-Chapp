import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
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
        const d = new Date(); 
        const hour = d.getHours();
        const minutes = d.getMinutes();
        const time = (hour) + ':' + (minutes);
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const styleIcon = {
            backgroundColor: this.state.hovering ? '#d0cfcf' : '#f5f3f3b8',
        };
        const styleIconDelete = {
            backgroundColor: this.state.hovering ? 'red' : 'blue',
        };
        const deleteIcon = this.state.hovering ? 
            <div style={{ display: 'flex', alignSelf: 'center', padding: 0, marginRight: 10 }} >
                <div onClick={this.props.deleteMethod} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                    <Icon color={this.state.delete ? 'secondary' : 'primary'}>
                        delete
                    </Icon>
                </div>
            </div>
            : 
            <div style={{ padding: 10, marginTop: 10 }}>{}</div>
        ;   
        const handleMouseEnter = () => this.setState({ hovering: true });
        const handleMouseLeave = () => this.setState({ hovering: false });
        const handleMouseEnter1 = () => this.setState({ delete: true });
        const handleMouseLeave1 = () => this.setState({ delete: false });  
          return (
            <div style={styleIcon} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>              
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: 5, }}>
                    <div className='note' style={{ styleIconDelete }}>  
                            <div style={{ fontSize: '11px', color: 'gray', display: 'flex', padding: 3 }}>
                                On {d.getDate()} {month[d.getMonth()]} {d.getFullYear()} {time} 
                            </div>
                            <Grid container style={{ width: '250px' }}>                   
                                {this.props.text} 
                            </Grid>
                    </div >
                    <div style={{ display: 'flex' }} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>       
                        {deleteIcon}   
                     </div>   
                </div>
                <Divider />
            </div>
        );
    }
  }

  export default Note;