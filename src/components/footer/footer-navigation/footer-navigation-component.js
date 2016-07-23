import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class FooterNavigationComponent extends Component {
  static propTypes = {
    items: PropTypes.array,
    labels: PropTypes.object
  };

  render() {
    const { labels } = this.props;
    return (
      <nav className="footer-navigation-component">
        <ul>
          {
            this.props.items.map((item, index) => (
              <li key={index}>
                <Link className="header-main-navigation-link" to={item.url}>{labels[item.labelId]}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
}
