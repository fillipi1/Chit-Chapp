import { combineReducers } from 'redux';
import activeUser from './activeUser';
import activeImage from './activeImage';
import Users from './users';
import updateMessages from './messagesReducer';
import loggedinUser from './loggedinUser';
import conferenceUsers from './conferenceList'

const rootReducer = combineReducers({
    activeUser: activeUser,
    image: activeImage,
    usersDataBase: Users,
    messagesDataBase: updateMessages,
    loggedinUser: loggedinUser,
    conferenceUsers: conferenceUsers
});

export default rootReducer; 