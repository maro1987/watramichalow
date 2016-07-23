import React, { Component, PropTypes } from 'react';
import InfoContainer from '../../containers/info/info-container';

export default class InfoView extends Component {
  static propTypes = {}

  getCategory () {
    const queryParams = this.props.location.query;
    return queryParams.kategoria;
  }

  render() {
    return (
      <main className="info-view">
        <InfoContainer category={this.getCategory()}/>
      </main>
    );
  }
}
