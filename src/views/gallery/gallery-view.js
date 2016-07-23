import React, { Component, PropTypes } from 'react';
import GalleryContainer from '../../containers/gallery/gallery-container';

export default class GalleryView extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="gallery-view">
        <GalleryContainer/>
      </div>
    );
  }
}
