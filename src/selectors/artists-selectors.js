import { createSelector } from 'reselect';

const artistSelector = (state, artistId) => {
  return state.artists
    .get('artists')
    .find((item) => item.id === artistId);
};

export const getArtistByIdSelector = createSelector(
  artistSelector,
  artist => artist
);
