import createAction from '../../utils/redux/create-action';
import loadGalleryData from '../../services/gallery-service';

export const GalleryActionTypes = {
  GALLERY_DATA_LOADED: 'GALLERY_DATA_LOADED',
  GALLERY_DATA_FAILED_TO_LOAD: 'GALLERY_DATA_FAILED_TO_LOAD'
};

function galleryDataLoaded(data) {
  return createAction(GalleryActionTypes.GALLERY_DATA_LOADED, data);
}

function galleryDataFailedToLoaded(error) {
  return createAction(GalleryActionTypes.GALLERY_DATA_FAILED_TO_LOAD, error);
}

export function loadGallery(service = loadGalleryData) {
  return service().then(galleryDataLoaded).catch(galleryDataFailedToLoaded);
}
