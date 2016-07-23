import React, { Component, PropTypes } from 'react';
import AboutContainer from '../../containers/about/about-container';

export default class AboutView extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="about-view">
        <AboutContainer/>
      </div>
    );
  }
}
