import React, { Component, PropTypes } from 'react';
import ProgrammeContainer from '../../containers/programme/programme-container';

export default class ProgrammeView extends Component {
  static propTypes = {}

  render() {
    return (
      <main className="programme-view">
        <ProgrammeContainer/>
      </main>
    );
  }
}
