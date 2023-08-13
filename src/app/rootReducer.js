// reducers/index.js

import { combineReducers } from 'redux';
import authReducer from '../views/auth/AuthSlice';

const rootReducer = combineReducers({
  auth: authReducer,

  // ...other reducers
});

export default rootReducer;
