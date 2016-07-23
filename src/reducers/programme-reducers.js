import Immutable from 'immutable';
import createReducer from '../utils/redux/create-reducer';
import { ProgrammeActionTypes } from '../actions/programme/programme-actions';

const initialState = Immutable.fromJS({
  programme: {}
});

export default createReducer(initialState, {
  [ProgrammeActionTypes.PROGRAMME_DATA_LOADED]: (state, data) => (
    state.set('programme', data)
  ),
  [ProgrammeActionTypes.PROGRAMME_DATA_FAILED_TO_LOAD]: (state, error) => (
    state.set('error', error.message)
  )
});
