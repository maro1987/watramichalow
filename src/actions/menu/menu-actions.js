import createAction from '../../utils/redux/create-action';
import loadMenuData from '../../services/menu-service';

export const MenuActionTypes = {
  MENU_DATA_LOADED: 'MENU_DATA_LOADED',
  MENU_DATA_FAILED_TO_LOAD: 'MENU_DATA_FAILED_TO_LOAD'
};

function menuDataLoaded(data) {
  return createAction(MenuActionTypes.MENU_DATA_LOADED, data);
}

function menuDataFailedToLoaded(error) {
  return createAction(MenuActionTypes.MENU_DATA_FAILED_TO_LOAD, error);
}

export function loadMenu() {
  return loadMenuData().then(menuDataLoaded).catch(menuDataFailedToLoaded);
}
