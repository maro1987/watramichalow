import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


export default class ContactComponent extends Component {
  static propTypes = {
    emailLabel: PropTypes.string,
    messageLabel: PropTypes.string,
    sendButtonLabel: PropTypes.string,
    messageSentLabel: PropTypes.string,
    mandatoryFieldErrorLabel: PropTypes.string,
    incorrectEmailErrorLabel: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      emailError: '',
      dialogOpened: false
    };
  }

  validateEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  handleSubmit = () => {
    const email = this.refs.email_input.input.value;

    if (email.length === 0) {
      this.setState({
        emailError: this.props.mandatoryFieldErrorLabel
      });
    } else if (!this.validateEmail(email)) {
      this.setState({
        emailError: this.props.incorrectEmailErrorLabel
      });
    } else {
      this.setState({
        emailError: '',
        dialogOpened: true
      });
    }
  };

  handleDialogClose = () => {
    this.setState({
      dialogOpened: false
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onMouseUp={this.handleDialogClose}
      />
    ];

    return (
      <div className="contact-component">
        <TextField className="contact-email-input"
                   ref="email_input"
                   hintText={this.props.emailLabel}
                   fullWidth={true}
                   errorText={this.state.emailError}
        />
        <br />
        <TextField
          hintText={this.props.messageLabel}
          multiLine={true}
          rows={5}
          style={ { marginTop: '10', marginBottom: '10' } }
          rowsMax={14}
          fullWidth={true}
        />
        <RaisedButton type="submit" label={this.props.sendButtonLabel} primary={true} onMouseUp={this.handleSubmit}/>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.dialogOpened}
          onRequestClose={this.handleDialogClose}
        >
          {this.props.messageSentLabel}
        </Dialog>
      </div>
    );
  }
}
