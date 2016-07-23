import React, { Component, PropTypes } from 'react';
import InfoItemComponent from '../../components/info-item/info-item-component';

export default class InfoComponent extends Component {
  static propTypes = {
    items: PropTypes.array,
    labels: PropTypes.object,
    category: PropTypes.string
  };

  render() {
    const { labels } = this.props;
    return (
      <ul className="info-component">
        {
          this.props.items.map((item, index) => {
            const active = item.id === this.props.category;
            const { titleId, descriptionId, iframe } = item;

            return (
              <InfoItemComponent
                title={labels[titleId]}
                text={labels[descriptionId]}
                iframe={iframe}
                activeByDefault={active}
                index={index}
                key={index}/>
            );
          })
        }
      </ul>
    );
  }
}
