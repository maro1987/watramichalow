import React, { Component, PropTypes } from 'react';
import GalleryListItemComponent from '../gallery-list-item/gallery-list-item-component';


export default class GalleryComponent extends Component {
  static propTypes = {
    items: PropTypes.array,
    labels: PropTypes.object
  };

  render() {
    const { labels } = this.props;
    return (
      <article className="gallery-component">
        <ul className="gallery-list">
          {
            this.props.items.map((item, index) => (
              <GalleryListItemComponent
                title={`${item.title} ${labels.lemkoWatra}`}
                year={`${labels.year} ${item.year}`}
                imgUrl={item.imgUrl}
                id={item.id}
                key={index}/>
            ))
          }
        </ul>
      </article>
    );
  }
}
