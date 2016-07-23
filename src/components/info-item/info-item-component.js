import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class InfoItemComponent extends Component {
  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.any,
    iframe: PropTypes.any,
    index: PropTypes.number,
    activeByDefault: PropTypes.bool
  };

  static defaultProps = {
    activeByDefault: false
  };

  constructor(props) {
    super(props);

    this.state = {
      isActive: this.props.activeByDefault
    };
  }

  handleClick = () => {
    this.toggle();
  };

  toggle() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  getItemHeaderTitleClassNames() {
    return classNames({
      'info-item-header-title': true,
      [`index_${this.props.index}`]: true
    });
  }

  getItemHeaderContentClassNames() {
    return classNames({
      'info-item-header-content': true,
      active: this.state.isActive
    });
  }

  render() {
    const { iframe } = this.props;
    return (
      <li className="info-item-component">
        <h2 className="info-item-header">
          <a className={this.getItemHeaderTitleClassNames()} onClick={this.handleClick}>{this.props.title}</a>
        </h2>
        <div className={this.getItemHeaderContentClassNames()}>
          {this.props.text}
          { iframe && iframe }
        </div>
      </li>
    );
  }
}
