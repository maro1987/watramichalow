import React, { Component, PropTypes } from 'react';
import ProgrammeDayComponentItem from '../programme-day-item/programme-day-item-component';

export default class ProgrammeDayComponent extends Component {
  static propTypes = {
    day: PropTypes.string,
    date: PropTypes.string,
    labels: PropTypes.object,
    agenda: PropTypes.array
  };

  render() {
    const { agenda, labels } = this.props;
    return (
      <div className="programme-day-component">
        <h1 className="programme-day-header">
          <a className="programme-day-header-title">{`${labels[this.props.dayId]} ${this.props.date}`}</a>
        </h1>
        <ul>
          {
            agenda.map((item, index) => {
              let name = labels[item.nameId];
              if (name === undefined) {
                name = item.nameId;
              }
              return (
                <ProgrammeDayComponentItem
                  id={item.id}
                  name={name}
                  description={labels[item.descriptionId]}
                  imgUrl={item.imgUrl}
                  time={item.time}
                  type={item.type}
                  moreLabel={labels.more}
                  key={index}
                  />);
            })
          }
        </ul>
      </div>
    );
  }
}
