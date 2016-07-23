import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class HeaderMainNavigationComponent extends Component {
  static propTypes = {
    items: PropTypes.array,
    labels: PropTypes.object,
    handleItemHover: PropTypes.func
  };

  handleOnMouseEnter = (event, slug) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.handleItemHover(slug);
  };

  render() {
    const { labels } = this.props;
    return (
      <nav className="header-main-navigation-component">
        <ul>
          {
            this.props.items.map((item, index) => (
              <li className="header-main-navigation-list-item" onMouseLeave={this.handleOnMouseEnter} onMouseEnter={(event) => this.handleOnMouseEnter(event, item.slug)} key={index}>
                <Link className="header-main-navigation-link" to={item.url}>{labels[item.labelId]}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
}
