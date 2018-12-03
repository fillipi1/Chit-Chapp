import React, { Component } from 'react';
import { connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { selectUser } from '../redux/actions/selectUser';
import { bindActionCreators } from 'redux';
import { Paper } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import {addUser} from '../redux/actions/updateUser';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


class renderSubHeader extends Component {

    state = {
        open: false,
        name: '',
        phone: '',
        email: ''
      };
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose =() => {
        this.setState({ open: false });
        console.log(this.state.name, this.state.phone)
    };

    handleInputName(name) {
        this.setState({ name: name.target.value })
    };

    handleInputPhone(phone) {
        this.setState({ phone: phone.target.value })
    };

    handleInputEmail(email) {
        this.setState({ email: email.target.value })
    };
    handleNewUser =() => {
        this.setState({ open: false });
        this.props.addUser(this.state.email, this.state.phone, this.state.name);
    };
    render(){
        return (
            <div style={{ overflow: 'hidden'}}>
                <div style={{ overflow: 'hidden', height: 67 }}>
                <Grid item>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12}}>
                        <Typography variant = 'headline'>
                        Add Contact
                        </Typography>
                        <IconButton onClick ={this.handleClickOpen}>
                        <Icon color = 'primary'>
                        add
                        </Icon>
                        </IconButton>
                    </div>
                </Grid>
                </div>
                <Divider/>
                <div style = {{display: 'flex', alignItems: 'center', padding: 7.5, height: 31}}>
                <Icon  color= 'disabled'>search</Icon>
                <TextField
                    id="textarea"
                    placeholder="Search Conversation"
                    InputProps ={{disableUnderline:true}}
                    style= {{marginLeft:5}}
                    />
                </div>
                    <Divider/>
                    <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add User</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Enter contact name, phone # and email
                    </DialogContentText>
                    <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    onChange = {name => this.handleInputName(name)}
                    />
                    <TextField
                    variant="outlined"
                    id="phone number"
                    label="Phone #"
                    type="text"
                    onChange = {phone => this.handleInputPhone(phone)}
                    fullWidth
                    />
                    <TextField
                    variant="outlined"
                    id="email"
                    label="Email"
                    type="email"
                    onChange = {email => this.handleInputEmail(email)}
                    fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={this.handleNewUser} color="primary">
                    Add Contact
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        )
    }
}

function mapStateToProps(state) {
  
    return {
      users: state.users,
      activeUser: state.activeUser,
      usersDataBase: state.usersDataBase
    };
  } 
  
  function mapDispachToProps (dispatch) {
    return bindActionCreators({ selectUser, addUser }, dispatch);
  }
  
  
  export default connect(mapStateToProps, mapDispachToProps)(renderSubHeader);
