import React, { Component, PropTypes } from 'react';
import ContactContainer from '../../containers/contact/contact-container';

export default class ContactView extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="contact-view">
        <ContactContainer/>
      </div>
    );
  }
}
