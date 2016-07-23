import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './app-action-reducers';
import home from './home-action-reducers';
import artists from './artists-reducers';
import menu from './menu-action-reducers';
import gallery from './gallery-reducers';
import programme from './programme-reducers';
import labels from './labels-reducers';

const reducers = combineReducers({
  app,
  home,
  menu,
  artists,
  gallery,
  programme,
  labels,
  routing: routerReducer
});

export default reducers;
