import React, { Component, PropTypes } from 'react';

export default class HomeInfoComponent extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };

  render() {
    const { title, description } = this.props;
    return (
      <section className="home-info-component">
        <h2 className="home-info-header">
          <a className="home-info-header-title">{title}</a>
        </h2>
        <span className="home-info-description">
          {description}
        </span>
      </section>
    );
  }
}
