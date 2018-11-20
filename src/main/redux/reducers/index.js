import { combineReducers } from 'redux';
import activeUser from './activeUser';
import leftPanelReducer from './userReducer';
import activeImage from './activeImage';
import updateUsers from './users';
import updateMessages from './messagesReducer';
import loggedinUser from './loggedinUser';

const rootReducer = combineReducers({
    users: leftPanelReducer,
    activeUser: activeUser,
    
    image: activeImage,
    usersDataBase: updateUsers,
    messagesDataBase: updateMessages,
    loggedinUser: loggedinUser
});

export default rootReducer; 