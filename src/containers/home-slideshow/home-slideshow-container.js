import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HomeSlideshowComponent from '../../components/home-slideshow/home-slideshow-component';
import { getLabelsSelector } from '../../selectors/labels-selector';
import shuffle from 'lodash.shuffle';

export default class HomeSlideshowContainer extends Component {
  static propTypes = {
    artists: PropTypes.array,
    labels: PropTypes.object
  };

  render() {
    const items = shuffle(this.props.artists);
    return (
      <div className="home-slideshow-container">
        <HomeSlideshowComponent items={items} labels={this.props.labels}/>
      </div>
    );
  }
}

export default connect(
  (state) => Object.assign(
    {},
    state.artists.toJS(),
    { labels: getLabelsSelector(state) }
  )
)(HomeSlideshowContainer);
