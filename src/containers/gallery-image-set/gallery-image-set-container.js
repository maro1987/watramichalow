import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GalleryImageSetComponent from '../../components/gallery-image-set/gallery-image-set-component';
import * as GalleryActionCreators from '../../actions/gallery/gallery-actions';

export default class GalleryImageSetContainer extends Component {
  static propTypes = {
    imageSetId: PropTypes.string,
    gallery: PropTypes.array,
    loadGallery: PropTypes.func
  };

  componentWillMount() {
    if (this.props.gallery.length === 0) {
      this.props.loadGallery();
    }
  }

  getImageSetData() {
    const { gallery, imageSetId } = this.props;

    const { imgCount } = gallery.filter((item) => item.id === imageSetId)[0];

    const imageSetData = [];
    for (let i = 1; i < imgCount; i++) {
      imageSetData.push({ src: `http://watramichalow.pl/images/galeria/${imageSetId}/${i}.jpg` });
    }

    return imageSetData;
  }

  getImageSetTitle () {
    const { gallery, imageSetId } = this.props;
    const { title } = gallery.filter((item) => item.id === imageSetId)[0];
    return title;
  }

  render() {
    const { gallery } = this.props;
    return (
      <div className="gallery-image-set-container">
        <h2 className="gallery-image-set-header">
          <a className="gallery-image-set-header-title">galeria</a>
        </h2>
        <section className="gallery-image-set-content">
          <h1 className="gallery-image-set-title">
            <a className="gallery-image-set-title-text">{this.getImageSetTitle()}</a>
          </h1>
          { gallery.length > 0 && <GalleryImageSetComponent items={this.getImageSetData()}/>}
        </section>
      </div>
    );
  }
}

export default connect(
  (state) => state.gallery.toJS(),
  (dispatch) => bindActionCreators(GalleryActionCreators, dispatch)
)(GalleryImageSetContainer);
