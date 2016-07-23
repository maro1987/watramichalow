import Immutable from 'immutable';
import createReducer from '../utils/redux/create-reducer';
import { LabelsActionTypes } from '../actions/labels/labels-actions';

const initialState = Immutable.fromJS({
  language: 'pl'
});

export default createReducer(initialState, {
  [LabelsActionTypes.LABELS_DATA_LOADED]: (state, data) => (
    state.set('labels', data)
  ),
  [LabelsActionTypes.LABELS_DATA_FAILED_TO_LOAD]: (state, error) => (
    state.set('error', error.message)
  ),
  [LabelsActionTypes.CHANGE_LANGUAGE]: (state, lang) => (
    state.set('language', lang)
  ),
  [LabelsActionTypes.DEFAULT_LANGUAGE_LOADED]: (state, lang) => (
    (lang && (lang === 'pl' || lang === 'lem')) ? state.set('language', lang) : state
  )
});
