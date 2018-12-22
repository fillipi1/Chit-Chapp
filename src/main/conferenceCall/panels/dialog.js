import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import {firebaseloadusers} from '../../redux/actions/firebaseLoadUsers';
import {addConferenceUser} from '../../redux/actions/addConferenceUser';
import blue from '@material-ui/core/colors/blue';
import { ListItem, ListItemIcon, ListItemText, ListItemAvatar } from '@material-ui/core';




class SimpleDialog extends Component {

    state = {
        open: false,
        users: []
      };

    handleClose = () => {
      this.props.onClose(this.props.selectedValue);
    };
  
    handleListItemClick = value => {
      this.props.onClose(value);
      this.props.addConferenceUser(value)
    };
  
  
    render() {
      console.log(this.props.conferenceusers)
      const { classes, onClose, selectedValue, ...other } = this.props;
      const users = this.props.usersdatabase.users;
     // const emails = [{name:'joe'}, {name: 'sicko'}];
  
      return (
        <Dialog onClose={this.handleClose1} aria-labelledby="simple-dialog-title" {...other}>
          <DialogTitle id="simple-dialog-title">Add Customer or Agent to Conference Call</DialogTitle>
          <div>
            <List>
              {users.map(user => (
                <ListItem button onClick={() => this.handleListItemClick(user)} key={user.name}>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar} src={`https://api.adorable.io/avatars/255/${user.phone}@adorable.png`}>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={user.name} secondary={user.phone}/>
                </ListItem>
              ))}
              <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
                <ListItemAvatar>
                  <Avatar>
                    <AddIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Cancel" />
              </ListItem>
            </List>
          </div>
        </Dialog>
      );
    }
  }
  
  SimpleDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    selectedValue: PropTypes.string,
  };
  
  const SimpleDialogWrapped = withStyles({
    avatar: {
      backgroundColor: blue[100],
      color: blue[600],
    },
  })(SimpleDialog);

  
  function mapStateToProps(state) {
    return {
      usersdatabase: state.usersDataBase,
      conferenceusers: state.conferenceUsers
    };
  };
  
  function mapDispachToProps (dispatch) {
    return bindActionCreators({ firebaseloadusers,addConferenceUser }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispachToProps)(SimpleDialogWrapped);