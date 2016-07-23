import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getLabelsSelector } from '../../selectors/labels-selector';

export default class AboutContainer extends Component {
  static propTypes = {
    labels: PropTypes.object
  }

  render() {
    const { labels } = this.props;
    return (
      <div className="about-container">
        <h2 className="about-header">
          <a className="about-header-title">{labels['mainMenu.about']}</a>
        </h2>
        <div className="about-image"/>
        <section className="about-content">
          <h1 className="about-content-header">
            {labels['about.watraMeansFire']}
          </h1>
          <section className="about-content-text">
            {labels['about.description']}
          </section>
          </section>
      </div>
    );
  }
}

export default connect(
  (state) => Object.assign(
    {},
    { labels: getLabelsSelector(state) }
  ),
)(AboutContainer);
