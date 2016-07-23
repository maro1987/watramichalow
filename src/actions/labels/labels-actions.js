import createAction from '../../utils/redux/create-action';
import { loadLabelsData, getDefaultLanguage, setDefaultLanguage } from '../../services/labelling-service';

export const LabelsActionTypes = {
  LABELS_DATA_LOADED: 'LABELS_DATA_LOADED',
  LABELS_DATA_FAILED_TO_LOAD: 'LABELS_DATA_FAILED_TO_LOAD',
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  DEFAULT_LANGUAGE_LOADED: 'DEFAULT_LANGUAGE_LOADED'
};

function labelsDataLoaded(data) {
  return createAction(LabelsActionTypes.LABELS_DATA_LOADED, data);
}

function defaultLanguageLoaded(data) {
  return createAction(LabelsActionTypes.DEFAULT_LANGUAGE_LOADED, data);
}

function labelsDataFailedToLoaded(error) {
  return createAction(LabelsActionTypes.LABELS_DATA_FAILED_TO_LOAD, error);
}

export function loadLabels() {
  return loadLabelsData().then(labelsDataLoaded).catch(labelsDataFailedToLoaded);
}

export function changeLanguage (lang) {
  setDefaultLanguage(lang);
  return createAction(LabelsActionTypes.CHANGE_LANGUAGE, lang);
}

export function loadDefaultLanguage() {
  return getDefaultLanguage().then(defaultLanguageLoaded);
}
