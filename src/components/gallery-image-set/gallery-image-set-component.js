import React, { Component, PropTypes } from 'react';
import Lightbox from 'react-images';
import GalleryImageSetListItemComponent from '../gallery-image-set-list-item/gallery-image-set-list-item-component';

export default class GalleryImageSetComponent extends Component {
  static propTypes = {
    items: PropTypes.array
  };

  constructor (props) {
    super(props);

    this.state = {
      isOpen: false,
      currentImageIndex: 0
    };
  }

  gotoPrevious = () => {
    this.setState({
      currentImageIndex: this.state.currentImageIndex - 1
    });
  };

  gotoNext = () => {
    this.setState({
      currentImageIndex: this.state.currentImageIndex + 1
    });
  };

  closeLightbox = () => {
    this.setState({ isOpen: false });
  };

  handleGalleryItemClick = (index) => {
    this.setState({
      isOpen: true,
      currentImageIndex: index
    });
  };

  render () {
    return (
      <div className="gallery-image-set-component">
        <ul className="gallery-image-set-list">
          {
            this.props.items.map((item, index) => (
              <GalleryImageSetListItemComponent
                imgSrc={item.src}
                index={index}
                handleClick={this.handleGalleryItemClick}
                key={index}/>
            ))
          }
        </ul>
        <Lightbox
          images={this.props.items}
          isOpen={this.state.isOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
          currentImage={this.state.currentImageIndex}
          backdropClosesModal={true}
        />
      </div>
    );
  }
}
