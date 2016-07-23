import React, { Component } from 'react';
import FooterContainer from '../../containers/footer/footer-container';

export default class FooterView extends Component {
  static propTypes = {}

  render() {
    return (
      <footer className="footer-view">
        <FooterContainer/>
      </footer>
    );
  }
}
