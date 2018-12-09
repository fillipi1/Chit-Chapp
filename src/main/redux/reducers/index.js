import { combineReducers } from 'redux';
import activeUser from './activeUser';
import activeImage from './activeImage';
import Users from './users';
import updateMessages from './messagesReducer';
import loggedinUser from './loggedinUser';

const rootReducer = combineReducers({
    activeUser: activeUser,
    image: activeImage,
    usersDataBase: Users,
    messagesDataBase: updateMessages,
    loggedinUser: loggedinUser
});

export default rootReducer; 