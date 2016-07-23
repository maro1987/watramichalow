import React, { Component, PropTypes } from 'react';
import ArtistContainer from '../../containers/artist/artist-container';

export default class ArtistView extends Component {
  static propTypes = {};

  render() {
    const { id } = this.props.routeParams;
    return (
      <main className="artist-view">
        <ArtistContainer artistId={id}/>
      </main>
    );
  }
}
