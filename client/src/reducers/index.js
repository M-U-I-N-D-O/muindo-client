import { combineReducers } from 'redux';
import navbarReducer from './navbar';

const allReducer = combineReducers({
  navbar: navbarReducer,
});

export default allReducer;
