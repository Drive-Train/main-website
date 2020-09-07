import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import cartReducer from './cart/reducer';
import bioReducer from './bios/reducer';

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  bioReducer,
});

export default rootReducer;
