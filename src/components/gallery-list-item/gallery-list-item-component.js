import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class GallerylistItemComponent extends Component {
  static propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    imgUrl: PropTypes.string,
    id: PropTypes.string
  };

  getLinkUrl() {
    return `galeria/${this.props.id}`;
  }

  render() {
    const { imgUrl, title, year } = this.props;
    return (
      <li className="gallery-list-item-component">
        <Link className="gallery-list-item-link" to={this.getLinkUrl() }>
          <h1 className="gallery-list-item-header">
            {title}
          </h1>
        </Link>
        <p className="gallery-list-item-description">
          {year}
        </p>
        <Link className="gallery-list-item-link" to={this.getLinkUrl() }>
          <img className="gallery-list-item-item-image" src={imgUrl}/>
        </Link>
      </li>
    );
  }
}
