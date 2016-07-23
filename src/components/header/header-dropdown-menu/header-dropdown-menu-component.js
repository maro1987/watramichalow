import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default class HeaderDropdownMenuComponent extends Component {
  static propTypes = {
    items: PropTypes.array,
    labels: PropTypes.object,
    handleMenuEnter: PropTypes.func,
    handleMenuLeave: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  componentWillMount () {

  }

  getComponentClassNames () {
    return classNames({
      'header-dropdown-menu-component': true,
      animate: false
    });
  }

  render() {
    const { labels } = this.props;
    return (
      <div className={this.getComponentClassNames()}
           onMouseEnter={this.props.handleMenuEnter}
           onMouseLeave={this.props.handleMenuLeave}>
        <ul className="header-dropdown-menu-list">
          {
            this.props.items.map((item, index) => (
              <li className="header-dropdown-menu-list-item" key={index}>
                <Link className="header-dropdown-menu-list-item-link" to={item.url}>{labels[item.labelId]}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
