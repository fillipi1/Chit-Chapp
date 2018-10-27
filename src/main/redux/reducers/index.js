import { combineReducers } from 'redux';
import activeUser from './active_user';
import leftPanelReducer from './userReducer';
import activeImage from './active_image';
import receivedMessages from './received_messages';


const rootReducer = combineReducers({
    users: leftPanelReducer,
    activeUser: activeUser,
    image: activeImage,
    receivedMessage: receivedMessages,
});

export default rootReducer; 