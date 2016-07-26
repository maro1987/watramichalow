import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import Dotdotdot from 'react-dotdotdot';

export default class HomeArtistComponent extends Component {
  static propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    moreLabel: PropTypes.string,
    hourLabel: PropTypes.string,
    index: PropTypes.number
  };

  getArtistInfoClassNames() {
    return classNames({
      'home-artist-info': true,
      [`index_${this.props.index}`]: true
    });
  }

  getLinkUrl() {
    return `wykonawcy/${this.props.id}`;
  }

  render() {
    const { imgUrl, name, time, date, description, moreLabel, hourLabel } = this.props;
    return (
      <div className="home-artist-component">
        <div className={this.getArtistInfoClassNames() }>
          <p className="home-artist-info-date">{`${date} ${hourLabel} ${time}`}</p>
          <span className="home-artist-info-title">
            <a>{name}</a>
          </span>
        </div>
        <img className="home-artist-image" src={imgUrl}/>
        <div className="home-artist-overlay"/>
        <div className="home-artist-description">
          <Dotdotdot clamp={4}>
            {description}
          </Dotdotdot>
          <Link className="home-slideshow-item-slide-more-button" to={this.getLinkUrl() }>
            {moreLabel}
          </Link>
        </div>
      </div>
    );
  }
}
