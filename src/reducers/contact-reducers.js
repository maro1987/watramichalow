import Immutable from 'immutable';
import createReducer from '../utils/redux/create-reducer';
import { ContactActionTypes } from '../actions/contact/contact-actions';

const initialState = Immutable.fromJS({
  sentSuccessfully: null
});

export default createReducer(initialState, {
  [ContactActionTypes.MAIL_SEND_SUCCESS]: (state) => (
    state.set('sentSuccessfully', true)
  ),
  [ContactActionTypes.MAIL_SEND_ERROR]: (state) => (
    state.set('sentSuccessfully', false)
  )
});
