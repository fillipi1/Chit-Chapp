import { combineReducers } from 'redux';
import activeUser from './active_user';
import leftPanelReducer from './userReducer';


const rootReducer = combineReducers({
    users: leftPanelReducer,
    activeUser: activeUser,
});

export default rootReducer; 