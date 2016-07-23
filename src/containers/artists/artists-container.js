import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ArtistsListComponent from '../../components/artists-list/artists-list-component';
import { getLabelsSelector } from '../../selectors/labels-selector';

export default class ArtistsContainer extends Component {
  static propTypes = {
    artists: PropTypes.array,
    label: PropTypes.object
  };

  render() {
    return (
      <div className="artists-container">
        <h2 className="artists-header">
          <a className="artists-header-title">{this.props.labels['mainMenu.artists']}</a>
        </h2>
        <section className="artists-content">
          <ArtistsListComponent items={this.props.artists} labels={this.props.labels} />
        </section>
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
)(ArtistsContainer);
