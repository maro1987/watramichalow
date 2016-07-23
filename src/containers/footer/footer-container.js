import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FooterNavigationComponent from '../../components/footer/footer-navigation/footer-navigation-component';
import { getLabelsSelector } from '../../selectors/labels-selector';

export default class FooterContainer extends Component {
  static propTypes = {
    menu: PropTypes.array
  };

  render() {
    return (
      <section className="footer-container">
        <div className="footer-container-top">
          <div className="footer-container-sponsors-banner"/>
        </div>
        <div className="footer-container-bottom">
          <div className="footer-container-bottom-content">
            <div className="footer-container-bottom-banner">
              <a href="http://www.stowarzyszenielemkow.pl/">
                <div className="header-container-banner-logo-sl"/>
              </a>
              <Link to="/">
                <div className="header-container-banner-logo-watra"/>
              </Link>
            </div>
            <FooterNavigationComponent items={this.props.menu} labels={this.props.labels}/>
            <span className="footer-container-bottom-copyright">
              <p>
                Copyright © 2013 watramichalow.pl All rights reserved
              </p>
              <a href="mailto:dawid.kwoka@dakastudio.pl">
                design by: DAKA - Studio Graficzne, Dawid Kwoka
              </a>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  (state) => Object.assign(
    {},
    state.menu.toJS(),
    { labels: getLabelsSelector(state) }
  ),
)(FooterContainer);
