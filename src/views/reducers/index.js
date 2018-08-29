import { combineReducers } from 'redux';
import userList from '../Components/userList';
import ActiveUser from './active-user';

const rootReducer = combineReducers({

  users: userList,
  activeUser: ActiveUser

});

export default rootReducer;
