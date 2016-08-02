import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import menu from './menu';
import facebook from './facebook';

const rootReducer = combineReducers({
  menuOpen: menu,
  facebook,
  routing
});

export default rootReducer;
