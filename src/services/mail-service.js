import $ from 'jquery';

export default function sendMail(email, message) {
  return new Promise((resolve, reject) => {
    const data = {
      form_email: email,
      form_message: message
    };

    $.ajax({
      type: 'POST',
      url: '../php/email.php',
      data,
      success: () => resolve(),
      error: () => reject()
    });
  });
}
