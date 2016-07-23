import createAction from '../../utils/redux/create-action';
import loadProgrammeData from '../../services/programme-service';

export const ProgrammeActionTypes = {
  PROGRAMME_DATA_LOADED: 'PROGRAMME_DATA_LOADED',
  PROGRAMME_DATA_FAILED_TO_LOAD: 'PROGRAMME_DATA_FAILED_TO_LOAD'
};

function programmeDataLoaded(data) {
  return createAction(ProgrammeActionTypes.PROGRAMME_DATA_LOADED, data);
}

function programmeDataFailedToLoaded(error) {
  return createAction(ProgrammeActionTypes.PROGRAMME_DATA_FAILED_TO_LOAD, error);
}

export function loadProgramme() {
  return loadProgrammeData().then(programmeDataLoaded).catch(programmeDataFailedToLoaded);
}
