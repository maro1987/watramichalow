import React, { Component, PropTypes } from 'react';
import ProgrammeDayComponent from '../programme-day/programme-day-component';

export default class ProgrammeComponent extends Component {
  static propTypes = {
    data: PropTypes.array,
    labels: PropTypes.object
  };

  renderDayHeader(item) {
    return (
    <h1 className="programme-day-header">
      <a className="programme-day-header-title">{item.day}</a>
    </h1>
    );
  }

  render() {
    return (
      <ul className="programme-component">
        {
          this.props.data.map((item, index) => (
            <ProgrammeDayComponent {...item} key={index} labels={this.props.labels}/>
          ))
        }
      </ul>
    );
  }
}
