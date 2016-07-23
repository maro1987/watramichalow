import { createSelector } from 'reselect';
import { getArtistByIdSelector } from './artists-selectors';

const programmeSelector = (state) => state.programme.get('programme');
const stateSelector = (state) => state;

export const getFullProgrammeSelector = createSelector(
  programmeSelector,
  stateSelector,
  (programme, state) => {
    return programme.map((item) => {
      let { agenda } = item;
      agenda = agenda.map((agendaItem) => {
        if (agendaItem.type === 'concert') {
          const concert = Object.assign({}, agendaItem, getArtistByIdSelector(state, agendaItem.id));
          return Object.assign({}, concert, agendaItem);
        }
        return agendaItem;
      });
      return Object.assign({}, item, { agenda });
    });
  }
);
