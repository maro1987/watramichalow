import React, { Component, PropTypes } from 'react';
import ArtistsContainer from '../../containers/artists/artists-container';

export default class ArtistsView extends Component {
  static propTypes = {};

  render() {
    return (
      <main className="artists-view">
        <ArtistsContainer />
      </main>
    );
  }
}
