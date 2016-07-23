import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HomeArtistComponent from '../../components/home-artist/home-artist-component';
import { getLabelsSelector } from '../../selectors/labels-selector';

const artistToShow = 3;

export default class HomeArtistsContainer extends Component {
  static propTypes = {
    artists: PropTypes.array,
    labels: PropTypes.object
  };

  renderArtists(artists) {
    const { labels } = this.props;
    if (artists && artists.length > 0) {
      return (
        artists.slice(0, artistToShow).map((item, index) => (
          <HomeArtistComponent
            id={item.id}
            imgUrl={item.imgUrl}
            name={labels[item.nameId]}
            time={item.time}
            date={item.date}
            description={labels[item.descriptionId]}
            moreLabel={labels.more}
            hourLabel={labels.hour}
            index={index}
            key={index}/>
        ))
      );
    }
  }

  render() {
    const { artists } = this.props;
    return (
      <section className="home-artists-container">
        {this.renderArtists(artists)}
      </section>
    );
  }
}

export default connect(
  (state) => Object.assign(
    {},
    state.artists.toJS(),
    { labels: getLabelsSelector(state) }
  )
)(HomeArtistsContainer);
