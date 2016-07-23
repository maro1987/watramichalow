import Immutable from 'immutable';
import createReducer from '../utils/redux/create-reducer';
import { GalleryActionTypes } from '../actions/gallery/gallery-actions';

const initialState = Immutable.fromJS({
  gallery: []
});

export default createReducer(initialState, {
  [GalleryActionTypes.GALLERY_DATA_LOADED]: (state, data) => (
    state.set('gallery', data)
  ),
  [GalleryActionTypes.GALLERY_DATA_FAILED_TO_LOAD]: (state, error) => (
    state.set('error', error.message)
  )
});
