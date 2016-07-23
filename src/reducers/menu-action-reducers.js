import Immutable from 'immutable';
import createReducer from '../utils/redux/create-reducer';
import { MenuActionTypes } from '../actions/menu/menu-actions';

const initialState = Immutable.fromJS({
  menu: []
});

export default createReducer(initialState, {
  [MenuActionTypes.MENU_DATA_LOADED]: (state, data) => (
    state.set('menu', data)
  ),
  [MenuActionTypes.MENU_DATA_FAILED_TO_LOAD]: (state, error) => (
    state.set('error', error.message)
  )
});
