import { combineReducers } from 'redux';
import activeUser from './active_user';
import leftPanelReducer from './leftPanel';

const rootReducer = combineReducers({
    users: leftPanelReducer,
    activeUser: activeUser,
});

export default rootReducer; 