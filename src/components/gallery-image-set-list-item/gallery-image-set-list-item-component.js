import React, { Component, PropTypes } from 'react';

export default class GalleryImageSetListItemComponent extends Component {
  static propTypes = {
    imgSrc: PropTypes.string,
    index: PropTypes.number,
    handleClick: PropTypes.func
  };

  handleClick = () => {
    this.props.handleClick(this.props.index);
  };

  render () {
    return (
      <li className="gallery-image-set-list-item" onClick={this.handleClick}>
        <img className="gallery-image-set-list-item-image" src={this.props.imgSrc}/>
      </li>
    );
  }
}