import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Dotdotdot from 'react-dotdotdot';

export default class ArtistsListItemComponent extends Component {
  static propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    id: PropTypes.string,
    moreLabel: PropTypes.string
  };

  getLinkUrl() {
    return `wykonawcy/${this.props.id}`;
  }

  render() {
    const { imgUrl, name, description, location, moreLabel } = this.props;
    return (
      <li className="artists-list-item-component">
        <h1 className="artists-list-item-header">
          {name}
        </h1>
        <p className="artists-list-item-location">
          {location}
        </p>
        <img className="artists-list-item-item-image" src={imgUrl}/>
        <div className="artists-list-item-description">
          <Dotdotdot clamp={6}>
            {description}
          </Dotdotdot>
          <Link className="artists-list-item-slide-more-button" to={this.getLinkUrl()}>
            {moreLabel}
          </Link>
        </div>
      </li>
    );
  }
}
