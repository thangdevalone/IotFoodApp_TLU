// reducers/index.js

import { combineReducers } from 'redux';
import authReducer from '../views/auth/AuthSlice';
import UserSlice from '../views/auth/UserSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  user:  UserSlice.reducer

  // ...other reducers
});

export default rootReducer;
