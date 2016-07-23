import React, { Component, PropTypes } from 'react';
import Dotdotdot from 'react-dotdotdot';
import classNames from 'classnames';
import { Link } from 'react-router';

export default class ProgrammeDayItemComponent extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
    time: PropTypes.string,
    type: PropTypes.string,
    moreLabel: PropTypes.string,
  };

  getItemTitleClassNames() {
    return classNames({
      'programme-day-item-title': true,
      [`${this.props.type}`]: true
    });
  }

  getLinkUrl() {
    return `wykonawcy/${this.props.id}`;
  }

  renderMoreButton() {
    return (
      <Link className="artists-list-item-slide-more-button" to={this.getLinkUrl() }>
        {this.props.moreLabel}
      </Link>
    );
  }

  render() {
    return (
      <div className="programme-day-item-component">
        <p className="programme-day-item-time">
          {this.props.time}
        </p>
        <img className="programme-day-item-image" src={this.props.imgUrl}/>
        <div className="programme-day-item-text">
          <h1 className={this.getItemTitleClassNames() }>
            {this.props.name}
          </h1>
          <Dotdotdot clamp={4}>
            <p className="programme-day-item-description">
              {this.props.description}
            </p>
          </Dotdotdot>
          { this.props.id !== void 0 && this.renderMoreButton() }
        </div>
      </div>
    );
  }
}
