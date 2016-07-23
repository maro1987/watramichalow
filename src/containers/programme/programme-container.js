import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFullProgrammeSelector } from '../../selectors/programme-selectors';
import * as ProgrammeActionCreators from '../../actions/programme/programme-actions';
import ProgrammeComponent from '../../components/programme/programme-component';
import { getLabelsSelector } from '../../selectors/labels-selector';

export default class ProgrammeContainer extends Component {
  static propTypes = {
    programmeData: PropTypes.array,
    labels: PropTypes.object,
    loadProgramme: PropTypes.func
  };

  render() {
    const { programmeData, labels } = this.props;
    return (
      <div className="programme-container">
        <h2 className="programme-header">
          <a className="programme-header-title">{labels['mainMenu.programme']}</a>
        </h2>
        <section className="programme-content">
          <ProgrammeComponent data={programmeData} labels={labels}/>
        </section>
      </div>
    );
  }
}

export default connect(
  (state) => Object.assign(
    {},
    { programmeData: getFullProgrammeSelector(state) },
    { labels: getLabelsSelector(state) }
  ),
  (dispatch) => bindActionCreators(ProgrammeActionCreators, dispatch)
)(ProgrammeContainer);
