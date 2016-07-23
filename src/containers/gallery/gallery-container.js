import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLabelsSelector } from '../../selectors/labels-selector';
import * as GalleryActionCreators from '../../actions/gallery/gallery-actions';

import GalleryComponent from '../../components/gallery/gallery-component';

export default class GalleryContainer extends Component {
  static propTypes = {
    gallery: PropTypes.array.isRequired,
    loadGallery: PropTypes.func.isRequired,
    labels: PropTypes.object
  };

  componentWillMount() {
    this.props.loadGallery();
  }

  render() {
    const { labels } = this.props;
    return (
      <div className="gallery-container">
        <h2 className="gallery-header">
          <a className="gallery-header-title">{labels['mainMenu.gallery']}</a>
        </h2>
        <section className="gallery-content">
          <GalleryComponent
            items={this.props.gallery}
            labels={this.props.labels}
          />
        </section>
      </div>
    );
  }
}

export default connect(
  (state) => Object.assign(
    {},
    state.gallery.toJS(),
    { labels: getLabelsSelector(state) }
  ),
  (dispatch) => bindActionCreators(GalleryActionCreators, dispatch)
)(GalleryContainer);
