import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ArtistComponent from '../../components/artist/artist-component';
import { getArtistByIdSelector } from '../../selectors/artists-selectors';
import { getLabelsSelector } from '../../selectors/labels-selector';

export default class ArtistContainer extends Component {
  static propTypes = {
    artistId: PropTypes.string,
    artistData: PropTypes.object,
    labels: PropTypes.object
  };

  render() {
    const { artistData, labels } = this.props;
    return (
      <div className="artist-container">
        <h2 className="artist-header">
          <a className="artist-header-title">{labels['mainMenu.artists']}</a>
        </h2>
        <section className="artist-content">
          <ArtistComponent
            name={labels[artistData.nameId]}
            time={artistData.time}
            date={artistData.date}
            imgUrl={artistData.imgUrl}
            location={labels[artistData.locationId]}
            description={labels[artistData.descriptionId]}
            hourLabel={labels.hour}
          />
        </section>
      </div>
    );
  }
}

export default connect(
  (state, props) => Object.assign(
    {},
    state.artists.toJS(),
    { artistData: getArtistByIdSelector(state, props.artistId) },
    { labels: getLabelsSelector(state) }
  )
)(ArtistContainer);
