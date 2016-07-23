import React, { Component, PropTypes } from 'react';
import GalleryImageSetContainer from '../../containers/gallery-image-set/gallery-image-set-container';

export default class GalleryImageSetView extends Component {
  static propTypes = {};

  render() {
    const { id } = this.props.routeParams;

    return (
      <div className="gallery-image-set-view">
        <GalleryImageSetContainer imageSetId={id}/>
      </div>
    );
  }
}
