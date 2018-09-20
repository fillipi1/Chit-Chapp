import { combineReducers } from 'redux';
import activeUser from './active_user';
import leftPanelReducer from './userReducer';
import activeImage from './active_image';


const rootReducer = combineReducers({
    users: leftPanelReducer,
    activeUser: activeUser,
    image: activeImage,
});

export default rootReducer; 