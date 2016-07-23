import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Dotdotdot from 'react-dotdotdot';

export default class HomeSlideshowItemComponent extends Component {
  static propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    moreLabel: PropTypes.string,
    hourLabel: PropTypes.string
  };

  getLinkUrl() {
    return `wykonawcy/${this.props.id}`;
  }

  render() {
    return (
      <div className="home-slideshow-item-component">
        <div className="home-slideshow-item-overlay"/>
        <img className="home-slideshow-item-image" src={this.props.imgUrl}/>
        <section className="home-slideshow-item-slide-info">
          <span className="home-slideshow-item-slide-title">
            <Link className="home-slideshow-item-slide-title-link" to={this.getLinkUrl()}>
              {this.props.name}
            </Link>
          </span>
          <p className="home-slideshow-item-slide-date">{`${this.props.date} ${this.props.hourLabel} ${this.props.time}`}</p>
          <span className="home-slideshow-item-slide-description">
            <Dotdotdot clamp={3}>
              {this.props.description}
              <Link className="home-slideshow-item-slide-more-button" to={this.getLinkUrl()}>
                {this.props.moreLabel}
            </Link>
            </Dotdotdot>
          </span>
        </section>
      </div>
    );
  }
}
