import createAction from '../../utils/redux/create-action';
import { loadMenu } from '../../actions/menu/menu-actions';
import { loadArtists } from '../../actions/artists/artists-actions';
import { loadProgramme } from '../../actions/programme/programme-actions';
import { loadLabels, loadDefaultLanguage, } from '../../actions/labels/labels-actions';


export const AppActionTypes = {
  APP_STARTED: 'APP_STARTED'
};

function appStarted() {
  return createAction(AppActionTypes.APP_STARTED);
}

export function initializeApp() {
  return (dispatch) => {
    return (
      Promise.all([
        dispatch(loadMenu()),
        dispatch(loadArtists()),
        dispatch(loadProgramme()),
        dispatch(loadDefaultLanguage()),
        dispatch(loadLabels())
      ]).then(() => dispatch(appStarted()))
    );
  };
}
