import createAction from '../../utils/redux/create-action';
import loadArtistsData from '../../services/artists-service';

export const ArtistsActionTypes = {
  ARTISTS_DATA_LOADED: 'ARTISTS_DATA_LOADED',
  ARTISTS_DATA_FAILED_TO_LOAD: 'ARTISTS_DATA_FAILED_TO_LOAD'
};

function artistsDataLoaded(data) {
  return createAction(ArtistsActionTypes.ARTISTS_DATA_LOADED, data);
}

function artistsDataFailedToLoaded(error) {
  return createAction(ArtistsActionTypes.ARTISTS_DATA_FAILED_TO_LOAD, error);
}

export function loadArtists() {
  return loadArtistsData().then(artistsDataLoaded).catch(artistsDataFailedToLoaded);
}
