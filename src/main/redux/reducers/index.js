import { combineReducers } from 'redux';
import activeUser from './activeUser';
import leftPanelReducer from './userReducer';
import activeImage from './activeImage';
import updateUsers from './users';
import updateMessages from './messagesReducer';
import loggedIn from './loginReducer'

const rootReducer = combineReducers({
    users: leftPanelReducer,
    activeUser: activeUser,
    image: activeImage,
    usersDataBase: updateUsers,
    messagesDataBase: updateMessages,
    loggedIn: loggedIn
});

export default rootReducer; 