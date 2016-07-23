import React, { Component, PropTypes } from 'react';
import ArtistsListItemComponent from '../artists-list-item/artists-list-item-component';

export default class ArtistsListComponent extends Component {
  static propTypes = {
    items: PropTypes.array,
    labels: PropTypes.object
  };

  render() {
    const { labels, items } = this.props;
    return (
      <article className="artists-list-component">
        <ul className="artists-list">
          {
            items.map((item, index) => (
              <ArtistsListItemComponent
                imgUrl={item.imgUrl}
                name={labels[item.nameId]}
                description={labels[item.descriptionId]}
                location={labels[item.locationId]}
                id={item.id}
                moreLabel={labels.more}
                key={index}/>
            ))
          }
        </ul>
      </article>
    );
  }
}
