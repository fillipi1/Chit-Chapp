import { combineReducers } from 'redux';
import activeUser from './active_user';
import leftPanelReducer from './userReducer';
import activeImage from './activeImage';
import updateUsers from './users';
import updateMessages from './messagesReducer';


const rootReducer = combineReducers({
    users: leftPanelReducer,
    activeUser: activeUser,
    image: activeImage,
    usersDataBase: updateUsers,
    messagesDataBase: updateMessages,
});

export default rootReducer; 