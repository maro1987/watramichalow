import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ContactComponent from '../../components/contact/contact-component';
import { getLabelsSelector } from '../../selectors/labels-selector';
import { bindActionCreators } from 'redux';
import * as ContactActionCreators from '../../actions/contact/contact-actions';

export default class ContactContainer extends Component {
  static propTypes = {
    labels: PropTypes.object,
    sendEmail: PropTypes.func
  };

  render() {
    const { labels } = this.props;
    return (
      <div className="contact-container">
        <h2 className="contact-header">
          <a className="contact-header-title">{labels['mainMenu.contact']}</a>
        </h2>
        <section className="contact-content">
          <h2 className="contact-form-header">{labels['contact.form']}</h2>
          <ContactComponent
            emailLabel={labels['contact.email']}
            messageLabel={labels['contact.message']}
            sendButtonLabel={labels['contact.send']}
            messageSentLabel={labels['contact.messageSent']}
            mandatoryFieldErrorLabel={labels['contact.error.mandatoryField']}
            incorrectEmailErrorLabel={labels['contact.error.incorrectEmail']}
            sentSuccessfully={this.props.sentSuccessfully}
            sendEmail={this.props.sendEmail}
          />
        </section>
      </div>
    );
  }
}

export default connect(
  (state) => Object.assign(
    {},
    state.contact.toJS(),
    { labels: getLabelsSelector(state) }
  ),
  (dispatch) => bindActionCreators(ContactActionCreators, dispatch)
)(ContactContainer);
