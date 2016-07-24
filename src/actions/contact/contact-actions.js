import createAction from '../../utils/redux/create-action';
import sendMail from '../../services/mail-service';

export const ContactActionTypes = {
  MAIL_SEND_SUCCESS: 'MAIL_SEND_SUCCESS',
  MAIL_SEND_ERROR: 'MAIL_SEND_ERROR'
};

function mailSendSuccess() {
  return createAction(ContactActionTypes.MAIL_SEND_SUCCESS);
}

function mailSendFail() {
  return createAction(ContactActionTypes.MAIL_SEND_ERROR);
}

export function sendEmail(email, message) {
  return sendMail(email, message).then(mailSendSuccess).catch(mailSendFail);
}
