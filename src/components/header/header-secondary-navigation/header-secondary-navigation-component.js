import React, { Component, PropTypes } from 'react';

export default class HeaderSecondaryNavigationComponent extends Component {
  static propTypes = {
    clickHandler: PropTypes.func
  };

  handleLemClick = () => {
    this.props.clickHandler('lem');
  };

  handlePlClick = () => {
    this.props.clickHandler('pl');
  };

  render() {
    return (
      <nav className="header-secondary-navigation-component">
        <div className="header-secondary-navigation-flag-lem" ref="icon_lem" onClick={this.handleLemClick}/>
        <div className="header-secondary-navigation-flag-pl" ref="icon_pl" onClick={this.handlePlClick}/>
      </nav>
    );
  }
}
