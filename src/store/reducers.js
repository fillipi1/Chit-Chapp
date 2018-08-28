import { combineReducers } from 'redux';

import app from '../views/appReducer';
import header from '../views/Header/headerReducer';

export default combineReducers({
  app,
  header,
});
