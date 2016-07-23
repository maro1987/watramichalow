import Immutable from 'immutable';
import createReducer from '../utils/redux/create-reducer';
import { ArtistsActionTypes } from '../actions/artists/artists-actions';

const initialState = Immutable.fromJS({
  artists: []
});

export default createReducer(initialState, {
  [ArtistsActionTypes.ARTISTS_DATA_LOADED]: (state, data) => (
    state.set('artists', data)
  ),
  [ArtistsActionTypes.ARTISTS_DATA_FAILED_TO_LOAD]: (state, error) => (
    state.set('error', error.message)
  )
});
