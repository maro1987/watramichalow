import React, { Component } from 'react';
import HeaderContainer from '../../containers/header/header-container';

export default class HeaderView extends Component {
  static propTypes = {};

  render() {
    return (
      <header className="header-view">
        <HeaderContainer/>
      </header>
    );
  }
}
