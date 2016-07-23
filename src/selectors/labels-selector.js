import { createSelector } from 'reselect';

const labelsSelector = (state) => state.labels.get('labels');
const labelsLanguageSelector = (state) => state.labels.get('language');

export const getLabelsSelector = createSelector(
  labelsSelector,
  labelsLanguageSelector,
  (labels, language) => {
    return labels[language];
  }
);
