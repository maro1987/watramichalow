import React, { Component, PropTypes } from 'react';

export default class ArtistComponent extends Component {
  static propTypes = {
    name: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
    imgUrl: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    hourLabel: PropTypes.string,
  };

  render() {
    const { name, time, date, imgUrl, description, hourLabel } = this.props;
    return (
      <article className="artist-component">
        <div className="artist-info">
          <p className="artist-time">
            {`${date} ${hourLabel} ${time}`}
          </p>
          <h2 className="artist-name">
            {name}
          </h2>
        </div>
        <img className="artist-image" src={imgUrl}>
        </img>
        <p className="artist-description">
          {description}
        </p>
      </article>
    );
  }
}
